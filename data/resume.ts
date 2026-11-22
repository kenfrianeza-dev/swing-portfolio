export interface ExperienceItem {
    role: string;
    hospital: string;
    unit: string;
    period: string;
    highlights: string[];
}

export interface RotationItem {
    hospital: string;
    unit: string;
    summary: string;
}

export interface CertificationItem {
    title: string;
    provider: string;
    year: string;
    category: "Clinical Certification" | "Seminar & Research";
}

export const resumeData = {
    personal: {
        name: "Stella Joy D. Gregorio, RN",
        shortName: "Stella Gregorio",
        credentials: "Registered Nurse",
        shortCredentials: "RN",
        degree: "Bachelor of Science in Nursing (BSN)",
        shortDegree: "BSN",
        title: "Staff Nurse — General Ward (Internal Medicine & Surgical)",
        location: "Quezon City, Metro Manila, Philippines",
        phone: "0936 950 1703",
        email: "stellajoygregorio.rn@gmail.com",
        availability: ["Active Registered Nurse", "Open to Clinical Opportunities"],
        summary:
            "I like the ward. I start the IV, stay close after surgery, and tell you what's happening in normal words.",
        headshotUrl: "/headshot.jpg",
        resumePdfUrl: "/resume.pdf",
    },

    professionalExperience: [
        {
            role: "Staff Nurse / General Ward Nurse",
            hospital: "Rosario Maclang Bautista General Hospital",
            unit: "Internal Medicine (IM) & Surgical Wards (Cross-trained in OB-GYN & Pediatrics)",
            period: "March 2026 — Present",
            highlights: [
                "Deliver direct bedside nursing care, comprehensive assessments, and continuous vital signs monitoring for Internal Medicine and Surgical patients.",
                "Perform adult and neonatal intravenous (IV) insertion, venipuncture, and blood sample extraction for diagnostic testing.",
                "Manage pre-operative preparation, post-operative monitoring, sterile wound care, and surgical dressing changes.",
                "Cross-assist in Obstetrics & Gynecology (OB-GYN) and Pediatric units, supporting maternal care, newborn stabilization, and pediatric monitoring.",
                "Maintain accurate, timely FDAR charting and collaborate closely with multidisciplinary healthcare teams to uphold infection control and patient safety.",
            ],
        },
    ] as ExperienceItem[],

    clinicalRotations: [
        {
            hospital: "Rosario Maclang Bautista General Hospital",
            unit: "Operating Room & PACU",
            summary:
                "Assisted as scrub and circulating nurse, monitored post-anesthesia recovery vitals in PACU, and maintained sterile surgical instrumentation.",
        },
        {
            hospital: "Rosario Maclang Bautista General Hospital",
            unit: "Delivery Room",
            summary:
                "Provided immediate newborn care including thermal regulation, newborn vaccinations, umbilical cord care, and vital signs monitoring.",
        },
        {
            hospital: "Ospital ng Lungsod ng San Jose Del Monte",
            unit: "Pediatric Ward",
            summary:
                "Prepared and administered pediatric medications under supervision, regulated IV fluids, and maintained accurate clinical charting.",
        },
        {
            hospital: "Pasig Doctors Medical Center",
            unit: "Intensive Care Unit (ICU) & General Ward",
            summary:
                "Observed critical care management for acute patients; performed I&O monitoring, medication preparation, and FDAR documentation.",
        },
        {
            hospital: "Rapha's Psychiatric and Diagnostic Care",
            unit: "Psychiatric Ward",
            summary:
                "Applied therapeutic communication and emotional support techniques while administering supervised medications and monitoring vitals.",
        },
    ] as RotationItem[],

    clinicalSkills: {
        "Vascular Access & Procedures": [
            "Adult & Neonatal IV Insertion",
            "Venipuncture & Blood Extraction",
            "IM, SC, and ID Injections",
            "Urinary Catheterization",
            "Nasogastric Tube (NGT) Care",
            "Chest Thoracic Tube Care",
        ],
        "Bedside & Perioperative Care": [
            "Comprehensive Nursing Assessment",
            "Pre-Op & Post-Op Patient Care",
            "Wound Care & Sterile Dressing Changes",
            "Oxygen Therapy & Nebulization",
            "Maternal, Newborn & Pediatric Care",
            "Medication Administration & I&O Monitoring",
        ],
        "Safety, Documentation & Core": [
            "FDAR Charting & Clinical Documentation",
            "Infection Prevention & Control",
            "Basic Life Support (BLS) & ACLS",
            "Patient & Family Health Education",
            "Therapeutic Communication & Advocacy",
        ],
    },

    education: {
        degree: "Bachelor of Science in Nursing (BSN)",
        school: "Our Lady of Fatima University",
        campus: "Lagro, Quezon City",
        period: "2021 — 2025",
    },

    certifications: [
        {
            title: "Advanced Cardiovascular Life Support (ACLS)",
            provider: "Quest Solutions Training",
            year: "2026",
            category: "Clinical Certification",
        },
        {
            title: "Basic Intravenous Therapy Training",
            provider: "Quest Solutions Training",
            year: "2026",
            category: "Clinical Certification",
        },
        {
            title: "ECG & Pharmacology Seminar",
            provider: "Quest Solutions Training",
            year: "2026",
            category: "Clinical Certification",
        },
        {
            title: "Basic Life Support (BLS)",
            provider: "HQCI Life Support Training Center",
            year: "2025",
            category: "Clinical Certification",
        },
        {
            title: "First Aid & Transferring Skills in Emergency Disaster Nursing",
            provider: "HQCI Life Support Training Center",
            year: "2025",
            category: "Clinical Certification",
        },
        {
            title: "Bandaging Course",
            provider: "HQCI Life Support Training Center",
            year: "2025",
            category: "Clinical Certification",
        },
        {
            title: "5th International Conference on Technological Competency as Caring in Nursing & Health Sciences",
            provider: "Rozzano Locsin Institute",
            year: "2024",
            category: "Seminar & Research",
        },
        {
            title: "Cultivating Ease & Passion: Exploring Breakthroughs in Nursing Research",
            provider: "OLFU College of Nursing",
            year: "2023",
            category: "Seminar & Research",
        },
    ] as CertificationItem[],
};
