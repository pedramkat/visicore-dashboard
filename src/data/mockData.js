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
    medicalInfo: {
      bloodType: 'O+',
      allergies: ['NSAIDs'],
      conditions: ['Post-MI'],
    },
    mriImages: [],
    reports: [],
  }
]
