interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  gallery: string[];
  year: string;
  location: string;
  client: string;
  services: string[];
  duration: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  mainImage: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
}

interface ProjectData {
  [key: string]: Project;
}

export const projectData: ProjectData = {
  'savannah-heights-residential': {
    id: 'savannah-heights-residential',
    title: 'Savannah Heights Residential Complex',
    description: 'A modern 120-unit luxury residential complex featuring sustainable design elements and premium amenities.',
    fullDescription: 'Savannah Heights represents the pinnacle of modern luxury living in Nairobi. This ambitious project included 120 premium residential units across 3 tower buildings, complete with underground parking, rooftop gardens, leisure facilities, and smart home technology. The design emphasizes sustainability with rainwater harvesting systems, solar power integration, and energy-efficient appliances throughout.',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      'https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    year: '2022',
    location: 'Nairobi, Kenya',
    client: 'Savannah Heights Development Ltd',
    services: ['Design & Build', 'Mechanical Works', 'Landscaping'],
    duration: '30 months',
    challenges: [
      'Complex foundation requirements due to varying soil conditions',
      'Integration of sustainable energy systems within budget constraints',
      'Coordinating multiple specialty contractors under tight timelines',
      'Adapting to material availability challenges during the pandemic'
    ],
    solutions: [
      'Custom foundation design utilizing soil reinforcement techniques',
      'Phased implementation of renewable energy systems to manage costs',
      'Implemented comprehensive project management software for seamless coordination',
      'Early procurement strategy and flexible material specifications'
    ],
    results: [
      'Project completed 2 months ahead of schedule despite pandemic challenges',
      'Achieved 30% energy efficiency improvement over standard building code requirements',
      '95% of units sold prior to completion due to quality reputation and marketing',
      'Received Green Building Council certification for sustainable design excellence'
    ],
    mainImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    testimonial: {
      quote: "The Tronraft team exceeded our expectations at every turn. Their meticulous planning, attention to detail, and commitment to sustainability have made Savannah Heights the premier residential address in Nairobi.",
      author: "Sarah Kamau",
      position: "Development Director, Savannah Heights Ltd",
      image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    }
  },
  'barabara-highway-extension': {
    id: 'barabara-highway-extension',
    title: 'Barabara Highway Extension',
    description: '45-kilometer highway extension with bridges, interchanges, and comprehensive drainage systems.',
    fullDescription: 'The Barabara Highway Extension project connected two major economic zones, improving transportation infrastructure and regional commerce. This complex civil engineering project involved the construction of a 45-kilometer highway extension including three major bridges, multiple interchanges, and comprehensive drainage systems. The project incorporated modern traffic management systems and durable materials designed for the African climate.',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1621930658141-45c31ba835a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
      'https://images.unsplash.com/photo-1531218614045-e596f12f0393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    year: '2021',
    location: 'Central Kenya',
    client: 'National Highways Authority',
    services: ['Civil Works', 'Consultancy', 'Assessments'],
    duration: '36 months',
    challenges: [
      'Navigating difficult terrain including wetlands and rocky escarpments',
      'Mitigating environmental impact in ecologically sensitive areas',
      'Managing seasonal weather challenges including heavy rainy seasons',
      'Coordinating with multiple government agencies and stakeholders'
    ],
    solutions: [
      'Custom bridge designs and specialized foundation work for challenging terrain',
      'Comprehensive environmental impact assessment and mitigation strategy',
      'Phased construction schedule optimized around seasonal weather patterns',
      'Established centralized communication protocols and regular stakeholder meetings'
    ],
    results: [
      'Project completed 30 days ahead of schedule and 2% under budget',
      'Reduced travel time between economic zones by 65%',
      'Received Excellence in Civil Engineering award from the Engineers Association of Kenya',
      'Created over 1,200 direct and 3,000 indirect jobs during construction'
    ],
    mainImage: 'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    testimonial: {
      quote: "Tronraft's expertise in large-scale infrastructure projects was evident throughout the Barabara Highway Extension. Their innovative approach to challenges and commitment to quality have set a new standard for road construction in Kenya.",
      author: "James Ochieng'",
      position: "Director of Infrastructure, National Highways Authority",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  },
  'unity-hospital-systems': {
    id: 'unity-hospital-systems',
    title: 'Unity Hospital Systems Upgrade',
    description: 'Comprehensive mechanical systems overhaul for a major hospital, improving energy efficiency and operational reliability.',
    fullDescription: 'The Unity Hospital Systems Upgrade involved a complete overhaul of HVAC, electrical, plumbing, and medical gas systems across the 350-bed medical facility. This critical project was executed while the hospital remained fully operational, requiring meticulous planning and phased implementation. The new systems incorporated smart building technology, energy-efficient components, and improved redundancy for critical care areas.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2653&q=80',
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    year: '2023',
    location: 'Mombasa, Kenya',
    client: 'Unity Healthcare Group',
    services: ['Mechanical Works', 'Renovation', 'Maintenance'],
    duration: '24 months',
    challenges: [
      'Maintaining hospital operations during extensive mechanical system replacements',
      'Ensuring sterile conditions and minimizing disruption to patient care',
      'Retrofitting modern systems into existing infrastructure with space constraints',
      'Coordinating with medical staff to accommodate departmental schedules and needs'
    ],
    solutions: [
      'Detailed phasing plan developed with hospital administration and department heads',
      'Implemented temporary isolation systems and enhanced infection control protocols',
      'Custom-designed compact systems and utilized vertical space for equipment placement',
      'Established 24-hour work schedule with specialized quiet-time periods for critical care areas'
    ],
    results: [
      '30% reduction in energy consumption',
      'Enhanced reliability with zero unplanned downtime since completion',
      'Improved patient comfort and staff working conditions',
      'Increased capacity for sensitive medical equipment installation'
    ],
    mainImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
    testimonial: {
      quote: "The complexity of renovating a hospital while maintaining operations cannot be overstated. Tronraft's team showed exceptional understanding of healthcare environments, technical expertise, and coordination skills. The energy savings alone have justified the investment.",
      author: "Dr. Elena Mwangi",
      position: "Chief Operations Officer, Unity Healthcare Group",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    }
  },
  'nairobi-commercial-district': {
    id: 'nairobi-commercial-district',
    title: 'Nairobi Commercial District Development',
    description: 'Mixed-use urban development with office space, retail, and residential units.',
    fullDescription: 'The Nairobi Commercial District Development transformed an underutilized urban area into a thriving mixed-use community. The project encompassed multiple mid-rise buildings with 15,000 square meters of office space, 8,000 square meters of retail space, and 150 residential units. The development features public plazas, green spaces, and pedestrian corridors designed to create a vibrant neighborhood atmosphere within the commercial heart of Nairobi.',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1577139547221-98f2a0e7e265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      'https://images.unsplash.com/photo-1542621323-be453e69d015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    ],
    year: '2022',
    location: 'Nairobi, Kenya',
    client: 'Urban Development Consortium',
    services: ['Design & Build', 'Civil Works', 'Consultancy'],
    duration: '48 months',
    challenges: [
      'Navigating complex urban zoning requirements and community concerns',
      'Integrating new development with existing infrastructure',
      'Managing construction in a congested urban environment',
      'Balancing diverse needs of commercial, retail and residential components'
    ],
    solutions: [
      'Comprehensive stakeholder engagement and community input sessions',
      'Detailed infrastructure assessment and coordinated upgrades with city services',
      'Specialized logistics plan with off-peak deliveries and off-site staging areas',
      'Modular design approach allowing specialized teams for each development component'
    ],
    results: [
      '95% occupancy within first year of operation',
      'Created over 2,500 permanent jobs in retail and office spaces',
      'Property values in surrounding neighborhoods increased by 15-20%',
      'Received Urban Design Excellence Award from the Architectural Association of Kenya'
    ],
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    testimonial: {
      quote: "From navigating regulatory challenges to delivering a world-class mixed-use development, Tronraft's expertise was invaluable. They transformed our vision into a vibrant community that has revitalized an entire district of Nairobi.",
      author: "Daniel Muthoni",
      position: "Chairman, Urban Development Consortium",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    }
  },
  'mombasa-heritage-building': {
    id: 'mombasa-heritage-building',
    title: 'Mombasa Heritage Building Restoration',
    description: 'Careful restoration of a 75-year-old landmark building, preserving historical elements while modernizing systems.',
    fullDescription: 'The Mombasa Heritage Building Restoration involved the meticulous rehabilitation of a colonial-era landmark that is vital to the city\'s architectural heritage. This project combined historical preservation with modern functionality, incorporating structural reinforcement, system modernization, and careful restoration of historical elements including ornate facades, terrazzo flooring, and custom woodwork. The restored building now houses administrative offices, a cultural center, and a historical museum.',
    category: 'Historical',
    image: 'https://images.unsplash.com/photo-1598554793673-dbf0377e2e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598554793673-dbf0377e2e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      'https://images.unsplash.com/photo-1562963885-55a2292ef1fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    year: '2020',
    location: 'Mombasa, Kenya',
    client: 'Mombasa Historical Society',
    services: ['Renovation', 'Assessments', 'Consultancy'],
    duration: '18 months',
    challenges: [
      'Addressing structural degradation while preserving historical elements',
      'Limited documentation of original construction methods and materials',
      'Retrofitting modern systems with minimal impact on historical features',
      'Adhering to strict heritage preservation guidelines'
    ],
    solutions: [
      'Non-invasive structural investigation and custom reinforcement techniques',
      'Partnered with historical archivists and conducted materials analysis to guide authentic restoration',
      'Creative systems integration using existing pathways and custom concealments',
      'Regular consultation with heritage authorities throughout the design and execution process'
    ],
    results: [
      'Successfully preserved 90% of original architectural elements',
      'Improved structural integrity for extended building lifespan',
      'Modern amenities integrated with minimal visual impact',
      'Received Historical Preservation Excellence Award'
    ],
    mainImage: 'https://images.unsplash.com/photo-1598554793673-dbf0377e2e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    testimonial: {
      quote: "Tronraft's restoration team demonstrated exceptional sensitivity to the historical significance of our building. They managed to preserve its character and historical integrity while giving it new life with modern functionality. The results have exceeded all our expectations.",
      author: "Ahmed Hassan",
      position: "President, Mombasa Historical Society",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2721&q=80"
    }
  },
  'green-valley-eco-resort': {
    id: 'green-valley-eco-resort',
    title: 'Green Valley Eco Resort',
    description: 'Sustainable luxury resort with indigenous landscaping and eco-friendly infrastructure.',
    fullDescription: 'Green Valley Eco Resort represents the pinnacle of sustainable hospitality development in East Africa. This luxury eco-resort features 60 guest accommodations, including villas and tented suites, designed to blend harmoniously with the natural environment. The project emphasized minimal environmental impact through sustainable construction methods, renewable energy systems, water conservation, and extensive use of local and natural materials. The landscaping incorporated over 200 species of indigenous plants, creating natural habitats and supporting local biodiversity.',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    year: '2021',
    location: 'Rift Valley, Kenya',
    client: 'Green Valley Hospitality Ltd',
    services: ['Design & Build', 'Landscaping', 'Consultancy'],
    duration: '24 months',
    challenges: [
      'Developing luxury amenities with minimal environmental impact',
      'Creating infrastructure in a remote location with limited access',
      'Balancing conservation goals with guest comfort and experience',
      'Establishing sustainable water and energy systems independent of municipal supplies'
    ],
    solutions: [
      'Integrated design approach with environmental consultants from project inception',
      'Phased logistics plan with temporary access routes and on-site materials processing',
      'Design emphasis on natural cooling, lighting, and connection with surroundings',
      'Custom solar power plant, rainwater harvesting system, and water recycling facility'
    ],
    results: [
      '95% of resort energy needs met through renewable sources',
      '75% reduction in water usage compared to conventional resorts of similar size',
      'Creation of 150 permanent jobs for local community members',
      'Received international eco-tourism certification and sustainability awards'
    ],
    mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    testimonial: {
      quote: "Working with Tronraft allowed us to achieve our vision of luxury that doesn't compromise on sustainability. Their innovative approaches to eco-friendly construction and their attention to the smallest environmental details have created a truly unique property that our guests deeply appreciate.",
      author: "Lisa Wanjau",
      position: "CEO, Green Valley Hospitality Ltd",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    }
  }
};

export const getCategories = () => {
  const categories = Object.values(projectData).map(project => project.category);
  return Array.from(new Set(categories));
};

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') {
    return Object.values(projectData);
  }
  return Object.values(projectData).filter(project => project.category === category);
};
