/**
 * Swasth Setu - ABDM & HL7 FHIR (R4) Interoperability Standards Mapping
 * Translates local clinical records and consent grants into standardized FHIR bundles
 * compatible with India's Ayushman Bharat Digital Mission (ABDM) specifications.
 */

const LOINC_CODES = {
  'CBC': { code: '58410-2', display: 'Complete blood count (hemogram) panel' },
  'HbA1c': { code: '4548-4', display: 'Hemoglobin A1c/Hemoglobin.total in Blood' },
  'Lipid Profile': { code: '24331-1', display: 'Lipid panel with direct LDL' },
  'ECG': { code: '11524-6', display: 'EKG report' },
  'X-Ray Chest': { code: '36643-5', display: 'Chest X-ray single view' },
  'Thyroid Profile': { code: '99608-2', display: 'Thyroid hormone panel' },
  'Blood Sugar': { code: '15074-8', display: 'Glucose [Moles/volume] in Blood' }
};

/**
 * Transforms a Swasth Setu patient record into a standard FHIR R4 Patient resource.
 */
function toFHIRPatient(patient) {
  return {
    resourceType: 'Patient',
    id: patient.id,
    identifier: [
      {
        system: 'https://healthid.ndhm.gov.in',
        type: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0203', code: 'MR' }] },
        value: patient.abha || 'UNLINKED'
      }
    ],
    active: true,
    name: [{ use: 'official', text: patient.name }],
    telecom: [{ system: 'phone', value: patient.ecPhone, use: 'emergency' }],
    extension: [
      {
        url: 'https://nrces.in/ndhm/fhir/r4/StructureDefinition/BloodGroup',
        valueString: patient.blood
      }
    ]
  };
}

/**
 * Transforms an investigation or test into a FHIR R4 DiagnosticReport resource.
 */
function toFHIRDiagnosticReport(record, patientId) {
  const loinc = LOINC_CODES[record.test] || { code: '11502-2', display: 'Laboratory report' };
  return {
    resourceType: 'DiagnosticReport',
    id: record.id,
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
            code: record.cat === 'Scan' ? 'RAD' : 'LAB',
            display: record.cat
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: loinc.code,
          display: loinc.display
        }
      ],
      text: record.title
    },
    subject: { reference: `Patient/${patientId}` },
    effectiveDateTime: record.date,
    performer: [
      {
        display: record.hospital || 'Authorized Health Facility'
      }
    ],
    conclusion: record.notes || ''
  };
}

/**
 * Builds an ABDM-compliant Consent Artifact for patient-authorized data exchange.
 */
function toABDMConsentArtifact(grant, patient, doctor) {
  return {
    schemaVersion: 'v0.5',
    consentId: grant.id,
    createdAt: new Date().toISOString(),
    patient: { id: patient.abha || patient.id },
    careContexts: [{ patientReference: patient.id, careContextReference: 'OPD-ALL' }],
    purpose: {
      text: 'Continuity of Care Consultation',
      code: 'CAREMGT',
      refUri: 'https://ndhm.gov.in/consent/purpose'
    },
    hiTypes: ['DiagnosticReport', 'Prescription', 'OPConsultation'],
    permission: {
      accessMode: 'VIEW',
      dateRange: {
        from: new Date(Date.now() - 365 * 86400000).toISOString(),
        to: new Date().toISOString()
      },
      dataEraseAt: grant.exp,
      frequency: { unit: 'HOUR', value: 1, repeats: 0 }
    },
    consentManager: { id: 'sbx' }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LOINC_CODES, toFHIRPatient, toFHIRDiagnosticReport, toABDMConsentArtifact };
}
