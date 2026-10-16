# Swasth Setu (स्वस्थ सेतु)
### Healthcare Continuity & Diagnostic Optimization Platform
*Software Track 2 — Problem Statement: Healthcare Continuity Platform*

---

## 🌟 Executive Summary & Background
In India, over **75% of outpatient medical visits** happen in standalone clinics and nursing homes that rely on physical paper files. When patients consult different doctors or travel, their medical records are fragmented and lost. 

This causes two massive national problems:
1. **Financial Waste via Duplicate Testing:** Misplaced previous reports force doctors to re-order expensive lab investigations (CBC, HbA1c, Thyroid, Lipid Profile). Out-of-pocket health expenditure in India sits at ~47%, and redundant diagnostic tests cost patients billions of rupees annually.
2. **Emergency Golden-Hour Blindspots:** In roadside accidents and acute trauma, doctors have zero visibility into vital baselines (blood group, allergies to Penicillin/Sulfa, active blood thinners), risking fatal medical errors.

**Swasth Setu** is an offline-first, patient-governed healthcare continuity platform bridging patients, attending clinicians, and emergency responders.

---

## 🚀 Key Features

### 1. 📷 Universal Smart Scanner (Upgraded)
* **Dual QR Detection:** Automatically recognizes both **dynamic 6-digit consent share codes** and **zero-connectivity emergency lockscreen cards**.
* **High-Tech Viewfinder:** Integrated camera overlay with animated laser reticle, camera switch, and torch/flashlight toggle for low-light clinic settings.
* **Audio & Haptic Feedback:** Plays responsive confirmation tones and triggers device vibration on successful code recognition.
* **Photo Scanner:** Scan from saved screenshots or camera roll photos.

### 2. 🛑 Duplicate-Test Interception Engine
* Built-in clinical validity rules (e.g., HbA1c valid for 90 days, Lipid Profile for 30 days, CBC for 7 days).
* If a doctor orders a test that was recently performed at another clinic, the system alerts the clinician, displays the prior result date and facility, and calculates the exact money saved for the patient.

### 3. 🚨 100% Offline Emergency Lockscreen Card
* Generates an offline plain-text QR code containing only vital clinical parameters (Blood Group, Allergies, Active Medications, Emergency Contact).
* Can be saved as a phone lock-screen wallpaper. First responders scan it without needing internet or an account.

### 4. 🛡️ Tamper-Evident Cryptographic Audit Chain
* Every record access, grant generation, and emergency break-glass action is hashed using **SHA-256** in a continuous blockchain-like chain.
* Any unauthorized modification to an audit log entry breaks the hash sequence and is instantly flagged via the "Verify audit log" tool.

### 5. 💳 Ayushman Bharat PM-JAY Cashless Integration
* Shows remaining government insurance balance.
* Automatically drafts pre-authorization request summaries with attached clinical history in one click.

### 6. 🗣️ Multi-Lingual & Voice Notes
* Full interface in **English, Hindi (हिन्दी), and Marathi (मराठी)**.
* Integrated speech-to-text dictation for doctor consultation notes.

---

## 🛠️ How to Run & Demo

1. Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Brave, Firefox).
2. **Demoing Live Patient-Doctor Sharing:**
   * Open `index.html` in Tab 1 -> Choose **Patient (Ramesh Patil)**.
   * Go to the **Share (🔗)** tab and click **Generate consent code**.
   * Open `index.html` in Tab 2 -> Choose **Doctor (Dr. Rahul Mehta)**.
   * Click **Launch Smart Camera Scanner** or type the 6-digit PIN.
   * You will instantly see the patient's unified medical timeline, duplicate test alerts, and insurance balance.

---

## 🏗️ Technical Architecture
* **Frontend:** Zero-dependency vanilla HTML5, CSS3 Glassmorphism, Modern ES6+ JavaScript.
* **Security:** Synchronous SHA-256 hash chaining, ephemeral consent grants.
* **Offline Layer:** Web LocalStorage persistence, ServiceWorker ready.
* **Vision & Media:** HTML5 MediaStreams API, `jsQR` real-time image processing.
