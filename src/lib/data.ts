
import doctor2 from "@/assets/dr-manu-gupta.jpeg";
import doctor3 from "@/assets/dr-agamya-saxena.jpeg";
import doctor4 from "@/assets/dr-kk-thakur.jpeg";



export const allDoctors = [
 
  {
  id: 1,
  name: "Dr. Manu Gupta",
  specialty: "Physician & Internal Medicine Specialist",
  department: "Internal Medicine",
  experience: "12+ Years",
  rating: 4.7,
  reviews: 210,
  education: "MBBS, MD (Internal Medicine)",
  image: doctor2,
  bio: "Dr. Manu Gupta is an experienced internal medicine specialist focusing on the diagnosis and management of adult medical conditions such as diabetes, hypertension, infections, and chronic lifestyle diseases. He emphasizes evidence-based treatment and long-term patient care.",
  achievements: [
    "Certified Internal Medicine Specialist",
    "Regular CME Participant",
    "Hospital Clinical Committee Member"
  ],
  languages: ["English", "Hindi"],
  availability: "Mon - Sat, 11 AM - 5 PM",
  consultationFee: "₹1,200",
  phone: "+91 98XXX XXXXX",
  specializations: [
    "Diabetes Management",
    "Hypertension",
    "Infectious Diseases",
    "Thyroid Disorders",
    "General Medicine"
  ],
},
{
  id: 2,
  name: "Dr. Agamya Saxena",
  specialty: "Vascular & Interventional Radiologist",
  department: "Radiology",
  experience: "10+ Years",
  rating: 4.8,
  reviews: 185,
  education: "MBBS, MD (Radiology), Fellowship in Vascular & Interventional Radiology",
  image: doctor3,
  bio: "Dr. Agamya Saxena specializes in minimally invasive, image-guided procedures for vascular and non-vascular conditions. His work includes angioplasties, embolization procedures, biopsies, and catheter-based interventions aimed at reducing the need for surgery.",
  achievements: [
    "Fellowship Trained in Interventional Radiology",
    "Contributor to Clinical Case Studies",
    "Advanced Imaging Certification"
  ],
  languages: ["English", "Hindi"],
  availability: "Mon - Fri, 10 AM - 4 PM",
  consultationFee: "₹1,800",
  phone: "+91 97XXX XXXXX",
  specializations: [
    "Peripheral Angioplasty",
    "Dialysis Access Interventions",
    "Image-Guided Biopsies",
    "Embolization Procedures",
    "Vascular Imaging"
  ],
},
  {
    id: 3,
    name: "Dr. KK Thakur",
    specialty: "Anesthesiologist",
    department: "Anesthesiology",
    experience: "5+ Years",
    rating: 4.8,
    reviews: 198,
    education: "MBBS, MD (Anesthesiology)",
    image: doctor4,
    bio: "Dr. KK Thakur is an experienced anesthesiologist known for ensuring patient safety and comfort before, during, and after surgical procedures. He specializes in advanced anesthesia techniques and pain management.",
    achievements: [
      "Excellence in Anesthesia Care",
      "Patient Safety Award",
      "Senior Anesthesia Consultant"
    ],
    languages: ["English", "Hindi"],
    availability: "Mon - Sat, 9 AM - 6 PM",
    consultationFee: "₹1,200",
    phone: "+91 98XXX XXXXX",
    specializations: [
      "General Anesthesia",
      "Regional Anesthesia",
      "Pain Management",
      "Critical Care Support"
    ],
  }
];

export const allDepartments = [
  {
    id: 101,
    name: "Fistula Surgery",
    shortDesc:
      "AV fistula creation and vascular access procedures for dialysis patients.",
    fullDesc:
      "The Fistula Surgery department specializes in creating and maintaining vascular access for patients undergoing dialysis. Our surgeons ensure long-term access patency with minimally invasive techniques and post-operative care.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=60",
    features: [
      "AV Fistula Creation",
      "Vascular Access Surgery",
      "Dialysis Access Care",
    ],
    doctors: 3,
    experience: "15+ Years",
    timing: "9 AM - 7 PM",
    phone: "+91 123 456 7901",
    headDoctor: "Dr. Amit Verma",
    equipment: ["Vascular Ultrasound", "Minor OT", "Access Monitoring Devices"],
    category: "surgery",
  },
  {
    id: 102,
    name: "Radiology",
    shortDesc:
      "Diagnostic imaging services supporting accurate medical diagnosis.",
    fullDesc:
      "Our Radiology department provides high-quality imaging services essential for diagnosis and treatment planning. Equipped with modern imaging systems, we support all clinical departments with timely and precise reports.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&auto=format&fit=crop&q=60",
    features: ["X-Ray", "Ultrasound", "CT Scan & Imaging Reports"],
    doctors: 4,
    experience: "18+ Years",
    timing: "8 AM - 8 PM",
    phone: "+91 123 456 7902",
    headDoctor: "Dr. Neha Kapoor",
    equipment: ["Digital X-Ray", "High-Resolution Ultrasound", "CT Scanner"],
    category: "diagnostics",
  },
  {
    id: 103,
    name: "Urology",
    shortDesc:
      "Diagnosis and treatment of urinary tract and urological disorders.",
    fullDesc:
      "The Urology department focuses on diseases of the urinary system and male reproductive organs. Our specialists manage stone disease, infections, and surgical urological conditions with advanced techniques.",
    image:
      "/anatomy-drawing-vintage-style.jpg",
    features: ["Urinary Tract Care", "Stone Treatment", "Urological Procedures"],
    doctors: 5,
    experience: "20+ Years",
    timing: "9 AM - 6 PM",
    phone: "+91 123 456 7903",
    headDoctor: "Dr. Rohit Malhotra",
    equipment: ["Cystoscopy Unit", "Lithotripsy System", "Uro-Surgery OT"],
    category: "specialty",
  },
  {
    id: 104,
    name: "Pain Clinic",
    shortDesc:
      "Advanced pain management for chronic and acute conditions.",
    fullDesc:
      "Our Pain Clinic provides personalized pain management solutions using medical, interventional, and rehabilitative approaches to improve patient quality of life.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&auto=format&fit=crop&q=60",
      features: [
      "Chronic Pain Management",
      "Acute Pain Relief",
      "Non-Surgical Therapy",
    ],
    doctors: 2,
    experience: "12+ Years",
    timing: "10 AM - 5 PM",
    phone: "+91 123 456 7904",
    headDoctor: "Dr. Kavita Iyer",
    equipment: ["Nerve Block Kits", "Pain Assessment Tools", "Physio Support"],
    category: "support",
  },
  {
    id: 105,
    name: "Critical Care",
    shortDesc:
      "24/7 intensive care with advanced life-support systems.",
    fullDesc:
      "The Critical Care department delivers round-the-clock monitoring and life-saving treatment for critically ill patients, supported by advanced ICU technology and trained intensivists.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&auto=format&fit=crop&q=60",
    features: ["ICU Monitoring", "Life Support Systems", "Expert Intensivists"],
    doctors: 7,
    experience: "22+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7905",
    headDoctor: "Dr. Sandeep Khanna",
    equipment: ["Ventilators", "ICU Monitors", "Infusion Pumps"],
    category: "critical",
  },
  {
    id: 106,
    name: "Casualty",
    shortDesc:
      "Immediate medical assessment and emergency care.",
    fullDesc:
      "The Casualty department handles medical emergencies with rapid triage and stabilization, ensuring patients receive immediate and effective care.",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&auto=format&fit=crop&q=60",
    features: ["Emergency Assessment", "First Aid Care", "Rapid Response"],
    doctors: 6,
    experience: "20+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7906",
    headDoctor: "Dr. Manish Arora",
    equipment: ["Emergency Beds", "Defibrillators", "Trauma Kits"],
    category: "emergency",
  },
  {
    id: 107,
    name: "Emergency Dialysis",
    shortDesc:
      "24×7 dialysis services for urgent renal care.",
    fullDesc:
      "Emergency Dialysis services are available round-the-clock for patients requiring immediate renal support, ensuring rapid response during critical situations.",
    image:
      "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60",
    features: ["24×7 Dialysis", "Critical Renal Support", "Emergency Response"],
    doctors: 4,
    experience: "18+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7907",
    headDoctor: "Dr. Rakesh Gupta",
    equipment: ["Portable Dialysis Machines", "RO Plant", "Bedside Monitors"],
    category: "treatment",
  },
  {
    id: 108,
    name: "Plasmapheresis",
    shortDesc:
      "Advanced blood purification therapy.",
    fullDesc:
      "Our Plasmapheresis unit offers specialized blood component separation therapy for autoimmune and renal disorders, performed under expert supervision.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&auto=format&fit=crop&q=60",
    features: [
      "Blood Component Separation",
      "Autoimmune Therapy",
      "Critical Support",
    ],
    doctors: 3,
    experience: "16+ Years",
    timing: "On Appointment",
    phone: "+91 123 456 7908",
    headDoctor: "Dr. Sunita Mehra",
    equipment: ["Apheresis Machines", "Monitoring Systems", "Sterile Kits"],
    category: "specialty",
  },
  {
    id: 109,
    name: "Research",
    shortDesc:
      "Clinical research and medical innovation.",
    fullDesc:
      "The Research department conducts clinical studies and trials aimed at improving treatment outcomes and advancing medical science.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=60",
    features: ["Clinical Trials", "Medical Innovation", "Evidence-Based Care"],
    doctors: 5,
    experience: "10+ Years",
    timing: "9 AM - 5 PM",
    phone: "+91 123 456 7909",
    headDoctor: "Dr. Anil Deshmukh",
    equipment: ["Research Labs", "Data Analysis Tools", "Trial Monitoring Systems"],
    category: "research",
  },
  {
    id: 110,
    name: "VIP ICU",
    shortDesc:
      "Private intensive care with enhanced comfort.",
    fullDesc:
      "VIP ICU provides high-end critical care with privacy, personalized attention, and advanced monitoring for patients requiring intensive treatment.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=60",
    features: ["Private ICU Rooms", "Dedicated Care Team", "Enhanced Monitoring"],
    doctors: 4,
    experience: "20+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7910",
    headDoctor: "Dr. Pooja Malhotra",
    equipment: ["Premium ICU Beds", "Advanced Monitors", "Ventilators"],
    category: "critical",
  },
  {
    id: 111,
    name: "Poly Clinic",
    shortDesc:
      "Multi-specialty outpatient consultation services.",
    fullDesc:
      "Our Poly Clinic offers outpatient consultations across multiple specialties, ensuring coordinated and convenient patient care.",
    image:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=900&auto=format&fit=crop&q=60",
    features: ["Multi-Specialty Consultations", "OPD Services", "Follow-Up Care"],
    doctors: 9,
    experience: "15+ Years",
    timing: "9 AM - 8 PM",
    phone: "+91 123 456 7911",
    headDoctor: "Dr. Ashish Nair",
    equipment: ["Consultation Rooms", "EMR System", "Diagnostic Support"],
    category: "outpatient",
  },
  {
    id: 112,
    name: "General Ward",
    shortDesc:
      "Comfortable inpatient care and recovery facilities.",
    fullDesc:
      "The General Ward provides well-monitored inpatient care with 24/7 nursing support, ensuring patient comfort and recovery.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Inpatient Care", "24/7 Nursing", "Recovery Support"],
    doctors: 6,
    experience: "18+ Years",
    timing: "24/7 Available",
    phone: "+91 123 456 7912",
    headDoctor: "Dr. Mohan Lal",
    equipment: ["Hospital Beds", "Patient Monitoring", "Nursing Stations"],
    category: "inpatient",
  },
];
