const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const aboutUsData = {
  institute: {
    name: 'Smt. Indira Gandhi College of Engineering',
    shortName: 'SIGCE',
    badge: "Autonomous Institute | NAAC 'A' Grade",
    affiliation: 'AICTE Approved | Affiliated to University of Mumbai',
    tagline: 'Academic excellence and innovation with a global perspective',
    established: 1993,
    campusSize: '1,20,000 sq. ft.',
    trust: 'Jawaharlal Nehru Institute of Education, Science and Technological Research Trust, Nanded'
  },
  stats: [
    { value: '1993', label: 'Year Established (30+ Yrs Legacy)' },
    { value: '1,20,000 sq ft', label: 'Modern Ghansoli Campus' },
    { value: '75%+', label: 'Graduates Placed in Reputed Firms' },
    { value: '100%', label: 'Placement Assistance' }
  ],
  vision:
    'To create a transformative societal impact by continuously pursuing excellence in technical education, innovation, and entrepreneurship grounded in strong ethical values.',
  mission: [
    'Graduate skilled, broadly educated engineers equipped with modern technology resources to build sustainable solutions for society.',
    'Uphold academic excellence across science, engineering, and technology through dedicated research, innovative learning, and human values.',
    'Foster entrepreneurship and strong academia-industry partnerships that drive collaborative problem-solving.',
    'Develop ethical, high-performing professionals capable of building and leading global engineering enterprises.'
  ],
  usps: [
    {
      title: 'Modern Campus',
      detail: 'Spacious 1,20,000 sq. ft. contemporary campus with certified, state-of-the-art laboratories and a well-stocked library.'
    },
    {
      title: 'Incubation Center',
      detail: 'Active startup incubation ecosystem that has already incubated 2 startups, with more ventures in progress.'
    },
    {
      title: 'Industry-Academia Floor',
      detail: 'Dedicated seventh floor reserved for MNCs and industry partners to run sponsored labs and practical training.'
    },
    {
      title: 'Advanced Labs',
      detail: 'Hands-on training facilities in Robotics, Mechatronics, and 3D Printing.'
    },
    {
      title: 'Emerging Tech Courses',
      detail: 'Industry-certified programs in Artificial Intelligence, Machine Learning, Blockchain, IoT, and Big Data Analytics.'
    },
    {
      title: 'Placement Cell',
      detail: '100% placement assistance for eligible students, with over 75% working in reputed companies and others pursuing higher studies.'
    }
  ],
  specialFeatures: [
    'Leading technical campus in Navi Mumbai with modern infrastructure and well-equipped labs',
    'Strong research culture led by experienced, qualified, and dedicated faculty',
    'Effective teaching-learning model with continuous student assessment and a teacher-guardian mentoring scheme',
    'Consistent university merit positions and strong academic results',
    'Strategic industry collaborations for add-on training and R&D lab development',
    'Merit-based scholarships and fee waivers for deserving students',
    'Education loan support through Abhudaya Cooperative Bank (subject to bank terms)',
    'Easy commute: 5-minute bus ride or 10-minute walk from Ghansoli Railway Station',
    'Accommodation assistance for outstation students'
  ],
  legacyAndEcosystem: {
    trustSummary:
      'Founded in 1993 and managed by the Jawaharlal Nehru Institute of Education, Science and Technological Research Trust (Nanded), SIGCE carries forward a 30+ year educational legacy across schools, colleges, technical, and agricultural institutes in Maharashtra.',
    leadership: [
      {
        role: 'Leadership',
        name: 'Hon. V. M. Jadhav',
        note: 'Former Member of Parliament (Rajya Sabha), guiding the trust and institute.'
      },
      {
        role: 'Managing Trustee',
        name: 'Sunil Jadhav',
        note: 'BITS Pilani & NJIT (USA) alumnus with 20 years of Wall Street experience; focused on making SIGCE a premier Navi Mumbai startup incubation hub.'
      }
    ],
    locationAdvantage:
      'Located in Ghansoli, Navi Mumbai, close to Reliance Jio headquarters and the Thane-Belapur Industrial Corridor.',
    programs: [
      'Computer Engineering',
      'Electrical Engineering',
      'Electronics & Telecommunication Engineering',
      'Instrumentation Engineering',
      'Mechanical Engineering'
    ],
    alumniCompanies: ['Citibank', 'Microsoft', 'PayTM', 'Reliance', 'TCS']
  },
  contact: {
    address: 'Plot No. 1, Sector 8, Ghansoli, Navi Mumbai - 400701',
    phones: ['+91-8080949300', '+91-7738921077'],
    email: 'contactus@sigce.edu.in'
  }
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/about', (req, res) => {
  res.json(aboutUsData);
});

app.listen(PORT, () => {
  console.log(`SIGCE About Us server running at http://localhost:${PORT}`);
});