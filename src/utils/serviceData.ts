interface ProcessStep {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: ProcessStep[];
  caseStudyTitle: string;
  caseStudyDescription: string;
  faqs: FAQ[];
  image: string;
}

interface ServiceData {
  [key: string]: Service;
}

export const serviceData: ServiceData = {
  'design-build': {
    title: 'Design & Build',
    description: 'Comprehensive solutions from concept to completion',
    fullDescription: 'Our Design & Build service offers a streamlined approach to construction projects, providing a single point of responsibility from initial concept through to project completion. This integrated method ensures seamless coordination between design and construction phases, optimizing both aesthetics and functionality while reducing overall project time and cost.',
    benefits: [
      'Single point of contact for the entire project',
      'Streamlined communication and decision-making',
      'Better cost control and budget management',
      'Reduced timeline from concept to completion',
      'Coordinated design and construction phases',
      'Early identification of construction challenges'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We meet with you to understand your vision, requirements, and budget constraints.'
      },
      {
        title: 'Concept Development',
        description: 'Our architects and engineers develop initial concepts based on your needs and preferences.'
      },
      {
        title: 'Design Refinement',
        description: 'We refine the design through collaborative feedback sessions until it meets your expectations.'
      },
      {
        title: 'Construction Planning',
        description: 'Our team develops detailed construction plans, timelines, and resource allocations.'
      },
      {
        title: 'Project Execution',
        description: 'We handle all aspects of construction, keeping you informed throughout the process.'
      },
      {
        title: 'Quality Assurance & Handover',
        description: 'We conduct thorough quality checks before the final handover of your completed project.'
      }
    ],
    caseStudyTitle: 'Savannah Heights Residential Complex',
    caseStudyDescription: 'A modern residential complex featuring 120 luxury apartments with sustainable design elements. Our Design & Build approach resulted in 15% cost savings and a 3-month reduction in project timeline compared to traditional methods.',
    faqs: [
      {
        question: 'How long does a typical Design & Build project take?',
        answer: 'Project timelines vary based on size and complexity. A residential project might take 6-12 months, while larger commercial projects can take 12-24 months.'
      },
      {
        question: 'Do you handle all regulatory approvals and permits?',
        answer: 'Yes, as part of our Design & Build service, we manage all necessary regulatory approvals, building permits, and compliance requirements.'
      },
      {
        question: 'Can I make changes to the design once construction has started?',
        answer: 'Yes, changes can be accommodated, though they may impact timeline and budget. Our integrated approach makes it easier to implement changes compared to traditional methods.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'civil-works': {
    title: 'Civil Works',
    description: 'Infrastructure development and structural engineering',
    fullDescription: 'Our Civil Works service encompasses a wide range of infrastructure development projects, including roads, bridges, water systems, and structural engineering. With our experienced team and state-of-the-art equipment, we handle projects of any scale with precision, durability, and adherence to the highest safety standards.',
    benefits: [
      'Expert structural engineering and analysis',
      'Comprehensive infrastructure development capabilities',
      'Strict adherence to safety standards and regulations',
      'Sustainable and environmentally friendly approaches',
      'High-quality materials and construction methods',
      'Long-lasting, durable results'
    ],
    process: [
      {
        title: 'Site Survey & Analysis',
        description: 'We conduct thorough site surveys and soil testing to assess conditions and requirements.'
      },
      {
        title: 'Engineering Design',
        description: 'Our civil engineers develop detailed designs and structural plans for your project.'
      },
      {
        title: 'Material Selection',
        description: 'We choose appropriate materials based on project requirements and environmental factors.'
      },
      {
        title: 'Construction Planning',
        description: 'We create comprehensive construction plans, including timelines and resource allocation.'
      },
      {
        title: 'Project Execution',
        description: 'Our team implements the construction plan with precision and attention to detail.'
      },
      {
        title: 'Quality Control & Handover',
        description: 'We conduct rigorous quality checks throughout the project and upon completion.'
      }
    ],
    caseStudyTitle: 'Barabara Highway Extension',
    caseStudyDescription: 'A 45-kilometer highway extension project with bridges and comprehensive drainage systems. The project was completed ahead of schedule and has significantly improved transportation infrastructure in the region.',
    faqs: [
      {
        question: 'What types of civil works projects do you handle?',
        answer: 'We handle a wide range of projects including roads, bridges, dams, drainage systems, water treatment facilities, and other infrastructure developments.'
      },
      {
        question: 'How do you ensure environmental protection during civil works projects?',
        answer: 'We implement comprehensive environmental management plans, including erosion control, waste management, and habitat protection measures tailored to each project.'
      },
      {
        question: 'What standards do you follow for civil engineering projects?',
        answer: 'We adhere to international engineering standards as well as local building codes and regulations to ensure the highest quality and safety in all our projects.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'mechanical-works': {
    title: 'Mechanical Works',
    description: 'Advanced systems installation and maintenance',
    fullDescription: 'Our Mechanical Works services cover the installation and maintenance of HVAC, plumbing, electrical systems, and other mechanical components essential for building functionality. We employ skilled technicians and engineers to deliver solutions that prioritize efficiency, safety, and long-term performance.',
    benefits: [
      'Energy-efficient mechanical system design',
      'Expert installation of HVAC, plumbing and electrical systems',
      'Regular maintenance programs to ensure optimal performance',
      'Troubleshooting and emergency repair services',
      'Integration of smart building technologies',
      'Compliance with all safety standards and regulations'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We assess your specific needs and building requirements to determine optimal mechanical systems.'
      },
      {
        title: 'System Design',
        description: 'Our engineers develop detailed designs for mechanical systems that meet performance and efficiency goals.'
      },
      {
        title: 'Material Selection',
        description: 'We source high-quality components and materials suited for your specific application.'
      },
      {
        title: 'Installation',
        description: 'Our skilled technicians install all systems with precision and attention to detail.'
      },
      {
        title: 'Testing & Commissioning',
        description: 'We conduct comprehensive testing to ensure all systems function correctly before handover.'
      },
      {
        title: 'Maintenance & Support',
        description: 'We provide ongoing maintenance services to keep your mechanical systems operating at peak efficiency.'
      }
    ],
    caseStudyTitle: 'Unity Hospital Systems Upgrade',
    caseStudyDescription: 'A comprehensive overhaul of the mechanical systems for a major hospital, including new HVAC systems, backup generators, and integrated building management systems. The project resulted in 30% energy savings and enhanced operational reliability.',
    faqs: [
      {
        question: 'What types of mechanical systems do you work with?',
        answer: 'We work with a wide range of mechanical systems including HVAC (heating, ventilation, and air conditioning), plumbing, electrical systems, fire protection systems, building automation systems, and more.'
      },
      {
        question: 'How energy-efficient are your mechanical installations?',
        answer: 'Our mechanical systems are designed with energy efficiency as a priority. We use the latest technologies and approaches to minimize energy consumption while maximizing performance. Many of our installations achieve significant energy savings compared to conventional systems.'
      },
      {
        question: 'Do you offer maintenance contracts for mechanical systems?',
        answer: 'Yes, we offer comprehensive maintenance contracts tailored to your specific needs. These can include regular inspections, preventative maintenance, emergency call-out services, and system optimization.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
  },
  'renovation': {
    title: 'Renovation',
    description: 'Modernizing and upgrading existing structures',
    fullDescription: 'Our Renovation services transform existing structures through modernization and upgrades, breathing new life into aging buildings while preserving their character and enhancing functionality. Whether it is a residential, commercial, or institutional building, we have the expertise to revitalize your space.',
    benefits: [
      'Increased property value and aesthetic appeal',
      'Enhanced functionality and space utilization',
      'Improved energy efficiency and reduced operating costs',
      'Modernized systems and infrastructure',
      'Extended building lifespan',
      'Minimal disruption during the renovation process'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'We evaluate the existing structure, identifying areas for improvement and preservation.'
      },
      {
        title: 'Design Consultation',
        description: 'Our design team works with you to develop renovation plans that meet your goals and budget.'
      },
      {
        title: 'Detailed Planning',
        description: 'We create comprehensive plans including timelines, material selections, and cost estimates.'
      },
      {
        title: 'Permitting & Approvals',
        description: 'We handle all necessary permits and regulatory approvals for your renovation project.'
      },
      {
        title: 'Construction',
        description: 'Our skilled craftsmen execute the renovation with minimal disruption to ongoing operations.'
      },
      {
        title: 'Final Inspection & Handover',
        description: 'We conduct thorough quality checks before delivering your newly renovated space.'
      }
    ],
    caseStudyTitle: 'Unity Hospital Renovation',
    caseStudyDescription: 'A comprehensive renovation of an existing healthcare facility, including modernization of patient rooms, upgrade of medical systems, and redesign of communal areas. The project was completed while the hospital remained operational, with careful planning to minimize disruption to patients and staff.',
    faqs: [
      {
        question: 'Can you renovate occupied buildings?',
        answer: 'Yes, we have extensive experience renovating occupied buildings. We develop phased renovation plans that minimize disruption and ensure safety for occupants throughout the process.'
      },
      {
        question: 'How do you handle structural issues discovered during renovation?',
        answer: 'Our team includes structural engineers who can quickly assess any issues discovered during renovation. We develop solutions promptly and communicate transparently about any necessary changes to the project scope or timeline.'
      },
      {
        question: 'Can you incorporate sustainable practices into renovation projects?',
        answer: 'Absolutely. We offer numerous sustainable options for renovation projects, including energy-efficient systems, water conservation measures, sustainable materials, and improved insulation. We can also help achieve green building certifications for renovated structures.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'maintenance': {
    title: 'Maintenance',
    description: 'Regular upkeep and repairs for optimal performance',
    fullDescription: 'Our comprehensive Maintenance services ensure the longevity, efficiency, and safety of your buildings and infrastructure. Through preventative maintenance, regular inspections, and prompt repairs, we help you avoid costly emergency repairs and extend the life of your assets.',
    benefits: [
      'Reduced risk of equipment failure and emergency repairs',
      'Extended lifespan of building systems and components',
      'Lower long-term operating and maintenance costs',
      'Improved energy efficiency and performance',
      'Enhanced safety and regulatory compliance',
      'Customized maintenance plans tailored to your specific needs'
    ],
    process: [
      {
        title: 'Initial Facility Audit',
        description: 'We conduct a thorough assessment of your facility to understand maintenance needs and priorities.'
      },
      {
        title: 'Maintenance Plan Development',
        description: 'We create a customized maintenance schedule and plan specific to your facility and requirements.'
      },
      {
        title: 'Regular Inspections',
        description: 'Our team performs scheduled inspections to identify potential issues before they become problems.'
      },
      {
        title: 'Preventative Maintenance',
        description: 'We perform routine upkeep tasks to ensure optimal system performance and prevent breakdowns.'
      },
      {
        title: 'Repair & Troubleshooting',
        description: 'Our technicians quickly address any issues that arise, minimizing downtime and disruption.'
      },
      {
        title: 'Documentation & Reporting',
        description: 'We maintain detailed records of all maintenance activities and provide regular performance reports.'
      }
    ],
    caseStudyTitle: 'Savannah Heights Residential Complex',
    caseStudyDescription: 'Implementation of a comprehensive maintenance program for a 120-unit luxury residential complex. Our proactive maintenance approach reduced emergency repair calls by 75% and extended equipment lifespan by an average of 40%, resulting in significant cost savings for the property management company.',
    faqs: [
      {
        question: 'What types of buildings do you provide maintenance services for?',
        answer: 'We provide maintenance services for a wide range of buildings including commercial properties, residential complexes, healthcare facilities, educational institutions, industrial facilities, and public infrastructure.'
      },
      {
        question: 'How quickly can you respond to emergency maintenance issues?',
        answer: 'Our standard response time for emergencies is within 2-4 hours. We also offer premium maintenance contracts with guaranteed response times as short as 1 hour for critical systems.'
      },
      {
        question: 'Can you handle all aspects of building maintenance?',
        answer: 'Yes, we offer comprehensive maintenance services covering structural elements, mechanical systems, electrical systems, plumbing, roofing, exterior features, and grounds maintenance. Our team includes specialists in all relevant disciplines.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'assessments': {
    title: 'Assessments',
    description: 'Thorough evaluation of structures and systems',
    fullDescription: 'Our Assessment services provide comprehensive evaluations of structural integrity, energy efficiency, system performance, and regulatory compliance for existing buildings and infrastructure. We deliver detailed reports with actionable recommendations to help property owners make informed decisions.',
    benefits: [
      'Early identification of potential structural or system issues',
      'Clear understanding of current building performance and condition',
      'Actionable recommendations for improvements and repairs',
      'Documentation for insurance, financing, and regulatory purposes',
      'Prioritized approach to maintenance and renovation planning',
      'Professional expertise from certified engineers and inspectors'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We discuss your needs and concerns to determine the appropriate types of assessments required.'
      },
      {
        title: 'On-site Inspection',
        description: 'Our expert team conducts thorough physical inspections of the property and its systems.'
      },
      {
        title: 'Testing & Analysis',
        description: 'We perform specialized testing as needed and analyze collected data for comprehensive understanding.'
      },
      {
        title: 'Report Preparation',
        description: 'We compile our findings into a detailed, easy-to-understand assessment report.'
      },
      {
        title: 'Recommendations',
        description: 'We provide specific, prioritized recommendations based on our findings and your objectives.'
      },
      {
        title: 'Action Planning',
        description: 'If requested, we help develop action plans to address issues identified in the assessment.'
      }
    ],
    caseStudyTitle: 'Mombasa Heritage Building',
    caseStudyDescription: 'A comprehensive structural and systems assessment of a 75-year-old historic building. Our assessment identified critical structural issues requiring immediate attention, as well as opportunities for energy efficiency improvements. The client was able to secure funding for preservation based on our detailed documentation.',
    faqs: [
      {
        question: 'What types of assessments do you offer?',
        answer: 'We offer various assessments including structural evaluations, building envelope assessments, mechanical systems inspections, electrical system assessments, energy audits, code compliance reviews, and pre-purchase/due diligence inspections.'
      },
      {
        question: 'How long does a typical building assessment take?',
        answer: 'The timeline varies depending on the size and complexity of the building and the scope of the assessment. A basic assessment of a small commercial building might take 1-2 days on-site plus report preparation time, while a comprehensive assessment of a large complex might take several weeks.'
      },
      {
        question: 'Are your assessments recognized by insurance companies and financial institutions?',
        answer: 'Yes, our assessments are conducted by certified professionals and follow industry-standard protocols. Our reports are widely accepted by insurance companies, banks, and other financial institutions for underwriting and financing purposes.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'consultancy': {
    title: 'Consultancy',
    description: 'Expert advice and professional guidance',
    fullDescription: 'Our Consultancy services provide expert guidance on construction planning, project management, and technical challenges. Drawing on years of industry experience and specialized knowledge, our consultants help clients make informed decisions at every stage of their construction projects.',
    benefits: [
      'Access to specialized expertise and industry knowledge',
      'Independent, objective advice for informed decision-making',
      'Cost savings through effective planning and risk mitigation',
      'Optimized project design and execution strategies',
      'Regulatory compliance and best practice implementation',
      'Flexible engagement models to suit your specific needs'
    ],
    process: [
      {
        title: 'Needs Assessment',
        description: 'We meet with you to understand your specific challenges, objectives, and constraints.'
      },
      {
        title: 'Research & Analysis',
        description: 'Our experts gather relevant information and analyze your situation in detail.'
      },
      {
        title: 'Strategy Development',
        description: 'We develop tailored strategies and solutions for your specific circumstances.'
      },
      {
        title: 'Recommendations',
        description: 'We present our findings and recommendations in clear, actionable terms.'
      },
      {
        title: 'Implementation Support',
        description: 'If needed, we provide ongoing support as you implement our recommendations.'
      },
      {
        title: 'Review & Refinement',
        description: 'We review outcomes and refine strategies as needed to ensure optimal results.'
      }
    ],
    caseStudyTitle: 'Nairobi Commercial District Development',
    caseStudyDescription: 'Strategic consultancy for a major commercial development facing regulatory challenges and community concerns. Our team developed alternative approaches and facilitated stakeholder engagement, enabling the project to proceed with necessary approvals and community support.',
    faqs: [
      {
        question: 'What areas of construction do your consultants specialize in?',
        answer: 'Our consultants have expertise in various areas including project feasibility, cost estimation, structural engineering, sustainable design, construction management, regulatory compliance, dispute resolution, and value engineering.'
      },
      {
        question: 'Can you provide consultancy for just a specific phase or aspect of our project?',
        answer: 'Absolutely. While we can provide end-to-end consultancy, many clients engage us for specific project phases or particular challenges. We offer flexible engagement models to meet your specific needs.'
      },
      {
        question: 'How do your consultancy services differ from other firms?',
        answer: 'Our consultancy team brings practical construction experience along with theoretical knowledge, giving us unique insights into real-world challenges. We also focus on implementable solutions rather than just analysis, ensuring our advice translates into tangible results for your projects.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  'landscaping': {
    title: 'Landscaping',
    description: 'Creating beautiful and functional outdoor spaces',
    fullDescription: 'Our Landscaping services transform outdoor environments into beautiful, functional spaces that enhance property aesthetics and value. From initial design to ongoing maintenance, we create sustainable landscapes that harmonize with their surroundings and meet the specific needs of our clients.',
    benefits: [
      'Enhanced property aesthetics and value',
      'Sustainable, environmentally-friendly designs',
      'Functional outdoor spaces tailored to your needs',
      'Water-efficient irrigation systems',
      'Native plant selections appropriate for local climate',
      'Long-term landscape management plans'
    ],
    process: [
      {
        title: 'Site Analysis',
        description: 'We evaluate your site\'s topography, soil, existing vegetation, and other key factors.'
      },
      {
        title: 'Design Consultation',
        description: 'We collaborate with you to understand your vision, preferences, and requirements.'
      },
      {
        title: 'Concept Development',
        description: 'Our designers create initial concepts for your landscape based on our consultations.'
      },
      {
        title: 'Detailed Design',
        description: 'We develop comprehensive plans including plant selections, hardscapes, and irrigation systems.'
      },
      {
        title: 'Installation',
        description: 'Our skilled team brings the design to life with careful attention to detail.'
      },
      {
        title: 'Maintenance & Support',
        description: 'We provide ongoing care to ensure your landscape thrives and evolves beautifully.'
      }
    ],
    caseStudyTitle: 'Green Valley Eco Resort',
    caseStudyDescription: 'Development of extensive landscaping for an eco-resort, featuring indigenous plants, sustainable water management systems, and natural habitats for local wildlife. The project transformed a degraded site into a thriving ecosystem that enhances the guest experience while supporting environmental conservation.',
    faqs: [
      {
        question: 'Do you focus on sustainable landscaping practices?',
        answer: 'Yes, sustainability is a core principle of our landscaping approach. We emphasize water conservation, native plant selections, reduced chemical use, efficient irrigation, and sustainable hardscape materials in all our designs.'
      },
      {
        question: 'Can you incorporate functional elements like outdoor living spaces into landscaping?',
        answer: 'Absolutely. We design landscapes that include functional elements such as outdoor kitchens, seating areas, fire pits, play areas, edible gardens, and more. We focus on creating spaces that are beautiful and practical for your specific needs.'
      },
      {
        question: 'Do you offer maintenance services after installation?',
        answer: 'Yes, we provide comprehensive landscape maintenance services to ensure your landscape continues to thrive. Our maintenance plans can be customized to meet your specific needs, from basic upkeep to comprehensive care.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80'
  }
};
