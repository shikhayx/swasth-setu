# Swasth Setu — Hackathon Presentation Pitch Deck & Demo Guide

> **Track:** Software Track 2 — Healthcare Continuity Platform  
> **Tagline:** Your Health History, Your Permission, Anywhere in India.

---

## 📽️ Slide-by-Slide Presentation Structure

### Slide 1: Title & Hook
* **Title:** Swasth Setu (स्वस्थ सेतु)
* **Subtitle:** An Offline-First, Consent-Governed Healthcare Continuity & Diagnostic Optimization Platform
* **Presenter:** Shikha & Team
* **Hook:** *"Every year, Indian families spend thousands of crores repeating blood tests they took just days ago, simply because clinics don't talk to each other."*

### Slide 2: The Three Pain Points (The "Why")
1. **Clinical Fragmentation:** 75%+ outpatient care in India happens in isolated private clinics without centralized EHR records.
2. **Economic Waste:** Redundant diagnostic tests (CBC, HbA1c, Lipid Profiles) inflate out-of-pocket health expenditure (which represents ~47% of total healthcare spending in India).
3. **Emergency Golden-Hour Blindspot:** In road trauma or acute emergencies, clinicians have zero instant visibility into blood groups, drug allergies, or active blood thinners.

### Slide 3: The Solution Architecture (The "What")
* **Universal Multi-Modal Scanner:** Camera with laser reticle, low-light flashlight toggle, decoding both dynamic share codes & offline emergency lockscreen cards.
* **Proactive Duplicate-Test Interceptor:** Clinical decision support engine flagging redundant diagnostic orders within clinical validity windows (e.g. HbA1c within 90 days).
* **SHA-256 Tamper-Evident Audit Chain:** Cryptographic immutability ensuring every view and access is verifiable and auditable.
* **Offline-First PWA:** Service worker caching enabling seamless continuity in rural clinics with zero internet.

### Slide 4: ABDM & Ayushman Bharat (PM-JAY) Alignment
* Direct mapping to **HL7 FHIR R4** standards (`DiagnosticReport`, `Patient`, `Consent`).
* Instant cashless pre-authorization draft generator aggregating past clinical evidence in one click.

### Slide 5: Live Demonstration
*(See 90-Second Demo Script below)*

### Slide 6: Market Impact & Scalability
* **Direct Out-of-Pocket Savings:** Estimated ₹2,500 - ₹12,000 saved per chronic patient annually.
* **OPD Consultation Time:** 40% reduction in manual history-taking.
* **Privacy by Design:** Zero centralized data honeypot; patient holds cryptographic consent keys.

---

## ⏱️ 90-Second Live Judging Demo Script

```markdown
1. [0:00 - 0:20] Open Patient View (Ramesh Patil)
   - "Judges, here is Ramesh, a diabetic patient in Pune. All his past visits, lab reports, and prescriptions are organized in an offline timeline."
   - Click 'Share' -> Generate a 24-hour consent code and show the dynamic QR code.

2. [0:20 - 0:45] Switch to Doctor View (Dr. Anita Sharma)
   - "Now Dr. Anita at Mumbai Hospital opens the doctor portal and clicks 'Launch Smart Camera Scanner'."
   - Show the animated laser reticle and flashlight toggle. Scan or enter the code.
   - "Instantly, Ramesh's complete cross-hospital history is visible."

3. [0:45 - 1:10] Demonstrate the Duplicate-Test Interceptor
   - "Dr. Anita attempts to order a CBC test. Watch what happens:"
   - Select CBC -> Click Save.
   - "A Duplicate Alert triggers! A CBC was already done 3 days ago at Thyrocare Pune. 
      The system advises cancelling the order, saving the patient ₹350 immediately!"

4. [1:10 - 1:30] Demonstrate the Offline Emergency Lockscreen Card
   - "What if Ramesh meets with an accident while unconscious?
      First responders scan his offline lockscreen QR card. 
      Without any internet or login, his Blood Group (B+), Penicillin allergy, and wife's emergency contact pop up instantly!"
```

---

## ❓ Judge Q&A Cheat Sheet

* **Q: How does this differ from the official ABHA app?**  
  * **A:** While ABHA provides national ID rails, most clinics lack integrated hospital management systems (HMIS). Swasth Setu works standalone, requires zero complex API integrations from small clinics, functions 100% offline, and uniquely includes the proactive **duplicate-test savings interceptor**.

* **Q: How do you handle patient data privacy?**  
  * **A:** Swasth Setu employs localized storage with ephemeral, time-bounded consent tokens. Every access is logged to a SHA-256 hash chain that detects any tampering or unauthorized record alteration.

* **Q: How do you prevent doctors from bypassing duplicate alerts?**  
  * **A:** Clinicians can override the alert only by supplying a documented clinical justification (e.g., suspected acute hemorrhage), which is permanently committed to the patient's audit log.
