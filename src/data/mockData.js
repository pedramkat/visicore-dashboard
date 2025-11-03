// Mock data for Visicore demo. Replace with real API calls later.

export const users = [
  {
    id: 1,
    email: 'doctor@example.com',
    password: '123',
    name: 'Dr. Sarah Johnson',
    avatar: '/avatars/avatar1.svg',
  },
]

export const patients = [
  {
    id: '1',
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    image: '/patients/patient1.svg',
    status: 'Monitoring',
    summary: 'Mild left ventricular hypertrophy',
    dateOfBirth: '1979-03-15',
    lastVisit: '2024-12-15',
    nextAppointment: '2025-02-15',
    medicalHistory: [
      'Hypertension diagnosed 2018',
      'Type 2 Diabetes since 2020',
      'Previous cardiac episode 2022'
    ],
    medications: [
      'Metformin 500mg twice daily',
      'Lisinopril 10mg once daily',
      'Aspirin 81mg daily'
    ],
    analysis:
      'Recent MRI shows early signs of cardiac remodeling. Chamber dimensions within normal limits but wall thickness increased in anteroseptal region. No evidence of ischemia or infarction. Ejection fraction 58%. Recommend continued medication and lifestyle modifications.',
    medicalInfo: {
      bloodType: 'A+',
      allergies: ['Penicillin'],
      conditions: ['Hypertension']
    },
    mriImages: [
      {
        id: 'mri1',
        url: '/mri/brain-scan-1.svg',
        date: '2024-01-15',
        type: 'Brain MRI',
        analysis: {
          findings: ['Normal brain structure', 'No abnormalities detected'],
          severity: 'Low',
          recommendations: ['Regular follow-up in 6 months']
        }
      },
      {
        id: 'mri2',
        url: '/mri/brain-scan-2.svg',
        date: '2024-02-20',
        type: 'Brain MRI Follow-up',
        analysis: {
          findings: ['Consistent with previous scan', 'Stable condition'],
          severity: 'Low',
          recommendations: ['Continue current treatment']
        }
      }
    ],
    reports: [
      {
        id: 'rep1',
        date: '2024-01-16',
        title: 'Initial MRI Assessment',
        type: 'MRI',
        status: 'Completed',
        content: 'Patient presented with mild headaches. MRI scan shows normal brain structure with no signs of abnormalities.',
        doctor: 'Dr. Sarah Johnson'
      }
    ]
  },
  {
    id: '2',
    name: 'Emma Davis',
    age: 32,
    gender: 'Female',
    image: '/patients/patient2.svg',
    status: 'Active',
    summary: 'Bicuspid aortic valve with mild stenosis',
    dateOfBirth: '1992-07-22',
    lastVisit: '2024-10-01',
    nextAppointment: '2025-01-10',
    medicalHistory: [
      'Migraine since adolescence',
      'Occasional palpitations'
    ],
    medications: [
      'Propranolol 20mg PRN',
      'Ibuprofen 400mg PRN'
    ],
    analysis:
      'Valve shows mild stenosis consistent with bicuspid morphology. No immediate intervention required. Recommend periodic echocardiography and symptom monitoring.',
    medicalInfo: {
      bloodType: 'O-',
      allergies: [],
      conditions: ['Migraine']
    },
    mriImages: [
      {
        id: 'mri3',
        url: '/mri/brain-scan-3.svg',
        date: '2024-03-10',
        type: 'Brain MRI',
        analysis: {
          findings: ['Minor white matter changes', 'Consistent with migraine history'],
          severity: 'Medium',
          recommendations: ['Neurological consultation', 'Medication adjustment']
        }
      }
    ],
    reports: [
      {
        id: 'rep2',
        date: '2024-03-11',
        title: 'Migraine Assessment',
        type: 'MRI',
        status: 'Reviewed',
        content: 'Patient experiencing chronic migraines. MRI shows minor changes consistent with condition.',
        doctor: 'Dr. Sarah Johnson'
      }
    ]
  },
  {
    id: '3',
    name: 'Michael Brown',
    age: 58,
    gender: 'Male',
    image: '/patients/patient3.svg',
    status: 'Monitoring',
    summary: 'Acute viral myocarditis',
    dateOfBirth: '1966-01-10',
    lastVisit: '2024-11-20',
    nextAppointment: '2025-03-05',
    medicalHistory: [
      'Diabetes Type 2 for 10 years',
      'Recent viral infection 2024'
    ],
    medications: [
      'Metformin 1000mg daily',
      'Bisoprolol 5mg daily'
    ],
    analysis:
      'Findings consistent with resolving myocarditis. Recommend reduced activity and cardiology follow-up. Repeat imaging in 3 months.',
    medicalInfo: {
      bloodType: 'B+',
      allergies: ['Latex'],
      conditions: ['Diabetes Type 2']
    },
    mriImages: [
      {
        id: 'mri4',
        url: '/mri/brain-scan-4.svg',
        date: '2024-02-05',
        type: 'Brain MRI',
        analysis: {
          findings: ['Age-appropriate changes', 'No acute findings'],
          severity: 'Low',
          recommendations: ['Annual follow-up recommended']
        }
      }
    ],
    reports: [
      {
        id: 'rep3',
        date: '2024-02-06',
        title: 'Routine Screening',
        type: 'Screening',
        status: 'Completed',
        content: 'Routine MRI screening shows age-appropriate changes with no concerning findings.',
        doctor: 'Dr. Sarah Johnson'
      }
    ]
  },
  {
    id: '4',
    name: 'Lisa Anderson',
    age: 41,
    gender: 'Female',
    image: '/patients/patient4.svg',
    status: 'Recovered',
    summary: 'Rule out hypertrophic cardiomyopathy',
    dateOfBirth: '1983-09-05',
    lastVisit: '2024-09-18',
    nextAppointment: '2025-04-01',
    medicalHistory: [
      'Family history of HCM (mother)',
      'Previous palpitations now resolved'
    ],
    medications: [
      'None currently'
    ],
    analysis:
      'No hypertrophic cardiomyopathy detected on recent workup. Continue routine primary care and return if symptoms recur.',
    medicalInfo: {
      bloodType: 'AB+',
      allergies: ['Aspirin'],
      conditions: []
    },
    mriImages: [
      {
        id: 'mri5',
        url: '/mri/brain-scan-5.svg',
        date: '2024-03-25',
        type: 'Brain MRI',
        analysis: {
          findings: ['Normal scan', 'No pathological findings'],
          severity: 'Low',
          recommendations: ['No immediate follow-up needed']
        }
      }
    ],
    reports: [
      {
        id: 'rep4',
        date: '2024-03-26',
        title: 'Preventive Screening',
        type: 'Preventive',
        status: 'Completed',
        content: 'Preventive MRI scan shows normal brain structure. Patient is in good health.',
        doctor: 'Dr. Sarah Johnson'
      }
    ]
  },
  {
    id: '5',
    name: 'David Thompson',
    age: 67,
    gender: 'Male',
    image: '/patients/patient5.svg',
    status: 'Critical',
    summary: 'Heart failure, NYHA Class II',
    dateOfBirth: '1957-11-02',
    lastVisit: '2024-12-22',
    nextAppointment: '2025-01-15',
    medicalHistory: [
      'Heart failure diagnosed 2022',
      'Coronary artery disease'
    ],
    medications: [
      'Furosemide 40mg daily',
      'Atorvastatin 20mg nightly',
      'Clopidogrel 75mg daily'
    ],
    analysis:
      'Evidence of chronic heart failure with reduced exercise tolerance. Optimize diuretics and consider cardiology consultation for device therapy evaluation.',
    medicalInfo: {
      bloodType: 'A-',
      allergies: [],
      conditions: ['Heart failure'],
    },
    mriImages: [],
    reports: [],
  },
  {
    id: '6',
    name: 'Robert Wilson',
    age: 58,
    gender: 'Male',
    image: '/patients/patient6.svg',
    status: 'Monitoring',
    summary: 'Post-MI with stent placement',
    dateOfBirth: '1966-05-29',
    lastVisit: '2024-08-30',
    nextAppointment: '2025-02-20',
    medicalHistory: [
      'Myocardial infarction 2023 with stent placement',
      'Hyperlipidemia'
    ],
    medications: [
      'Ticagrelor 90mg twice daily',
      'Metoprolol 50mg daily'
    ],
    analysis:
      'Stable post-MI status with good stent patency on recent imaging. Continue dual antiplatelet therapy as prescribed and monitor lipids.',
    medicalInfo: {
      bloodType: 'O+',
      allergies: ['NSAIDs'],
      conditions: ['Post-MI'],
    },
    mriImages: [],
    reports: [],
  }
]
