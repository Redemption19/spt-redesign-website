// Navigation Items
export const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
    dropdown: [
      { title: 'Company Overview', href: '/about' },
      { title: 'Leadership', href: '/about/leadership' },
      { title: 'Timeline', href: '/about/timeline' },
    ],
  },
  {
    title: 'Services',
    href: '/services',
    dropdown: [
      { title: 'Self-Service Centre', href: '/services/self-service-center' },
      { title: 'Enrollments', href: '/services/enrollment' },
      { title: 'FAQs', href: '/services/faq' },
    ],
  },
  {
    title: 'Schemes',
    href: '/schemes',
    dropdown: [
      { title: 'Master Trust', href: '/schemes/master-trust' },
      { title: 'Personal Pension', href: '/schemes/personal-pension' },
      { title: 'Provident Fund', href: '/schemes/provident-fund' },
      { title: 'Employer Sponsored', href: '/schemes/employer-sponsored' },
    ],
  },
  {
    title: 'Media',
    href: '/media',
    dropdown: [
      { title: 'Blog', href: '/media/blog' },
      { title: 'News', href: '/media/news' },
      { title: 'Events', href: '/media/events' },
      { title: 'Downloads', href: '/media/downloads' },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

// Footer Links
export const footerLinks = {
  services: [
    { title: 'Self-Service Centre', href: '/services/self-service' },
    { title: 'Enrollments', href: '/services/enrollments' },
    { title: 'FAQs', href: '/services/faqs' },
  ],
  schemes: [
    { title: 'Master Trust', href: '/schemes/master-trust' },
    { title: 'Personal Pension', href: '/schemes/personal-pension' },
    { title: 'Provident Fund', href: '/schemes/provident-fund' },
    { title: 'Employer Sponsored', href: '/schemes/employer-sponsored' },
  ],
  media: [
    { title: 'Blog', href: '/media/blog' },
    { title: 'News', href: '/media/news' },
    { title: 'Events', href: '/media/events' },
    { title: 'Downloads', href: '/media/downloads' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/legal/privacy-policy' },
    { title: 'Terms & Conditions', href: '/legal/terms' },
    { title: 'Fee Breakdown', href: '/legal/fees' },
  ],
};

// Pension Schemes
export const pensionSchemes = [
  {
    id: 'master-trust',
    title: 'Master Trust',
    description: 'A multi-employer pension scheme designed for organizations looking for a comprehensive retirement solution.',
    benefits: [
      'Reduced administrative burden',
      'Lower costs through economies of scale',
      'Expert investment management',
      'Full regulatory compliance',
    ],
    icon: 'Building',
  },
  {
    id: 'personal-pension',
    title: 'Personal Pension',
    description: 'Individual pension plans for self-employed professionals and those seeking additional retirement security.',
    benefits: [
      'Complete control over contributions',
      'Tax advantages on savings',
      'Flexible investment options',
      'Portable between employers',
    ],
    icon: 'User',
  },
  {
    id: 'provident-fund',
    title: 'Provident Fund',
    description: 'A savings scheme where both employers and employees contribute to build a retirement fund.',
    benefits: [
      'Matched employer contributions',
      'Lump-sum payment at retirement',
      'Tax-efficient savings',
      'Emergency access provisions',
    ],
    icon: 'Landmark',
  },
  {
    id: 'employer-sponsored',
    title: 'Employer Sponsored',
    description: 'Customized pension schemes designed specifically for your organization\'s unique needs.',
    benefits: [
      'Tailored to company requirements',
      'Enhanced employee retention',
      'Corporate governance oversight',
      'Integrated HR benefits solution',
    ],
    icon: 'Briefcase',
  },
];

// Stats
export const companyStats = [
  { value: '17,710+', label: 'Members' },
  { value: '8', label: 'Branches' },
  { value: '15+', label: 'Years Experience' },
  { value: '99.8%', label: 'Client Satisfaction' },
];

// Team
export const leadershipTeam = [
  {
    name: 'Kofi Mensah',
    position: 'CEO',
    bio: 'With over 20 years in financial services, Kofi leads Standard Pensions Trust with a vision for inclusive retirement planning across Ghana.',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Abena Osei',
    position: 'CFO',
    bio: 'Abena brings extensive expertise in financial management and strategic planning to ensure the security and growth of all member funds.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Emmanuel Darko',
    position: 'CTO',
    bio: 'Emmanuel leads our digital transformation efforts, ensuring our technological infrastructure supports members with reliable, secure services.',
    image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Akosua Boateng',
    position: 'Head of Client Services',
    bio: 'Akosua ensures our members receive exceptional support and guidance through every stage of their retirement planning journey.',
    image: 'https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Timeline Events
export const timelineEvents = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Standard Pensions Trust was established with a mission to transform retirement planning in Ghana.',
  },
  {
    year: '2010',
    title: 'First Master Trust',
    description: 'Launched our flagship Master Trust scheme, bringing affordable pension solutions to SMEs across Ghana.',
  },
  {
    year: '2013',
    title: 'Digital Transformation',
    description: 'Introduced our first online portal, allowing members to check balances and update information remotely.',
  },
  {
    year: '2015',
    title: 'Expanded Reach',
    description: 'Opened regional offices in Kumasi, Takoradi, and Tamale to serve members across the country.',
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Recognized for pension innovation with the Ghana Financial Services Excellence Award.',
  },
  {
    year: '2020',
    title: 'Mobile Services',
    description: 'Launched mobile app with integrated payment solutions for seamless pension management.',
  },
  {
    year: '2023',
    title: 'ESG Investment',
    description: 'Introduced sustainable investment options, aligning member values with retirement planning.',
  },
  {
    year: '2025',
    title: 'Looking Forward',
    description: 'Continuing our mission of securing financial futures for all Ghanaians through innovative pension solutions.',
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: 'understanding-tier-3',
    title: 'Understanding Tier 3 Pension Contributions',
    excerpt: 'Explore how voluntary Tier 3 contributions can significantly enhance your retirement benefits and provide tax advantages.',
    date: '2025-04-15',
    image: 'https://images.pexels.com/photos/7063777/pexels-photo-7063777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Education',
  },
  {
    id: 'pension-investment-strategies',
    title: 'Pension Investment Strategies for Different Life Stages',
    excerpt: 'Learn how your pension investment approach should evolve as you progress from early career to near retirement.',
    date: '2025-04-08',
    image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Planning',
  },
  {
    id: 'regulatory-changes-2025',
    title: 'New Pension Regulatory Changes for 2025',
    excerpt: 'Stay informed about the latest regulatory updates affecting pension schemes in Ghana and how they impact your retirement savings.',
    date: '2025-04-01',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Regulation',
  },
  {
    id: 'retirement-planning-entrepreneurs',
    title: 'Retirement Planning for Entrepreneurs',
    excerpt: 'Special considerations for business owners looking to secure their financial future while growing their enterprises.',
    date: '2025-03-25',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Business',
  },
];

// Events
export const events = [
  {
    id: 'retirement-planning-workshop',
    title: 'Retirement Planning Workshop',
    description: 'Join our experts for a comprehensive session on effective retirement planning strategies.',
    date: '2025-05-15',
    time: '10:00 AM - 1:00 PM',
    location: 'Standard Pensions Trust HQ, Accra',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    registration: true,
  },
  {
    id: 'investment-outlook-2025',
    title: 'Investment Outlook 2025',
    description: 'A detailed analysis of investment trends and opportunities for pension funds in the coming year.',
    date: '2025-05-22',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual Event',
    image: 'https://images.pexels.com/photos/7666081/pexels-photo-7666081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    registration: true,
  },
  {
    id: 'employer-forum',
    title: 'Employer Forum: Optimizing Benefits',
    description: 'Discussion forum for HR professionals on maximizing pension benefits for employees.',
    date: '2025-06-05',
    time: '9:00 AM - 12:00 PM',
    location: 'Kempinski Hotel, Accra',
    image: 'https://images.pexels.com/photos/5325740/pexels-photo-5325740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    registration: true,
  },
  {
    id: 'financial-wellness-day',
    title: 'Financial Wellness Day',
    description: 'One-on-one consultations with financial advisors to review your retirement planning progress.',
    date: '2025-06-18',
    time: '9:00 AM - 5:00 PM',
    location: 'Standard Pensions Trust HQ, Accra',
    image: 'https://images.pexels.com/photos/8867486/pexels-photo-8867486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    registration: true,
  },
];

// FAQs
export const faqs = [
  {
    question: 'What is the difference between Tier 2 and Tier 3 pensions?',
    answer: 'Tier 2 is the mandatory occupational pension scheme managed by private trustees, while Tier 3 consists of voluntary contributions that provide additional tax benefits and retirement savings. Tier 3 offers more flexibility and can be used for specific goals like housing or education before retirement.',
  },
  {
    question: 'How do I check my pension balance?',
    answer: 'You can check your pension balance through our secure Member Portal, via our mobile app, by visiting any of our branch offices, or by calling our customer service line. We also send quarterly statements to your registered email address.',
  },
  {
    question: 'At what age can I access my pension benefits?',
    answer: 'The standard retirement age in Ghana is 60 years. However, early retirement is possible from age 55, though this may affect your benefit calculations. Special provisions exist for certain professions with different retirement ages.',
  },
  {
    question: 'Can I withdraw from my pension before retirement?',
    answer: 'Limited early withdrawals are possible from Tier 3 voluntary contributions for specific purposes like housing, education, or critical illness. Tier 1 and Tier 2 funds are generally locked until retirement age except in cases of permanent emigration or total incapacity.',
  },
  {
    question: 'How are my pension contributions invested?',
    answer: 'Your contributions are invested according to regulatory guidelines and our investment policy. We maintain a diversified portfolio across government securities, corporate bonds, equities, and alternative investments to balance growth and security. Members can view our investment strategy and performance reports on the Member Portal.',
  },
  {
    question: 'What happens to my pension if I change employers?',
    answer: 'Your pension benefits are portable. When changing employers, you can transfer your Tier 2 contributions to your new employer&apos;s scheme or maintain them with us if your new employer also uses Standard Pensions Trust. We provide a simple transfer process to ensure continuity.',
  },
  {
    question: 'How secure are my pension savings?',
    answer: 'Your pension savings are highly secure, protected by stringent regulatory oversight from the National Pensions Regulatory Authority (NPRA). Funds are held by independent custodians, and we maintain insurance coverage, regular audits, and robust cybersecurity measures to protect your retirement savings.',
  },
  {
    question: 'Can I increase my pension contributions?',
    answer: 'Yes, you can make additional voluntary contributions (Tier 3) to enhance your retirement benefits. These contributions often come with tax advantages and can be arranged through your employer\'s payroll system or direct deposits to your pension account.',
  },
];

// Contact Information
export const contactInfo = {
  headquarters: {
    address: '25 Independence Avenue, Accra, Ghana',
    phone: '+233 30 000 0000',
    email: 'info@standardpensionstrust.com',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8228781762046!2d-0.18683492468618836!3d5.5780774959247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a5309ba4eb5%3A0x2b4eb2721d6e4208!2sIndependence%20Ave%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1714003636727!5m2!1sen!2sus',
  },
  branches: [
    {
      city: 'Kumasi',
      address: '15 Harper Road, Kumasi, Ghana',
      phone: '+233 30 000 0001',
    },
    {
      city: 'Takoradi',
      address: '8 Market Circle, Takoradi, Ghana',
      phone: '+233 30 000 0002',
    },
    {
      city: 'Tamale',
      address: '12 Hospital Road, Tamale, Ghana',
      phone: '+233 30 000 0003',
    },
  ],
  social: {
    facebook: 'https://facebook.com/standardpensionstrust',
    twitter: 'https://twitter.com/standardpensions',
    linkedin: 'https://linkedin.com/company/standard-pensions-trust',
    instagram: 'https://instagram.com/standardpensionstrust',
  },
};
