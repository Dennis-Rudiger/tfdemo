import { 
  FaHardHat, 
  FaBuilding, 
  FaPencilRuler, 
  FaTools, 
  FaRegLightbulb,
  FaLeaf,
  FaWrench,
  FaChartLine
} from 'react-icons/fa';

// Services Data
export const servicesData = [
  { 
    id: 'design-build',
    icon: FaBuilding, 
    title: 'Design & Build',
    description: 'Comprehensive solutions from concept to completion',
    link: '/services/design-build'
  },
  { 
    id: 'civil-works',
    icon: FaHardHat, 
    title: 'Civil Works',
    description: 'Infrastructure development and structural engineering',
    link: '/services/civil-works'
  },
  { 
    id: 'mechanical-works',
    icon: FaTools, 
    title: 'Mechanical Works',
    description: 'Advanced systems installation and maintenance',
    link: '/services/mechanical-works'
  },
  { 
    id: 'renovation',
    icon: FaPencilRuler, 
    title: 'Renovation',
    description: 'Modernizing and upgrading existing structures',
    link: '/services/renovation'
  },
  { 
    id: 'maintenance',
    icon: FaWrench, 
    title: 'Maintenance',
    description: 'Regular upkeep and repairs for optimal performance',
    link: '/services/maintenance'
  },
  { 
    id: 'assessments',
    icon: FaChartLine, 
    title: 'Assessments',
    description: 'Thorough evaluation of structures and systems',
    link: '/services/assessments'
  },
  { 
    id: 'consultancy',
    icon: FaRegLightbulb, 
    title: 'Consultancy',
    description: 'Expert advice and professional guidance',
    link: '/services/consultancy'
  },
  { 
    id: 'landscaping',
    icon: FaLeaf, 
    title: 'Landscaping',
    description: 'Creating beautiful and functional outdoor spaces',
    link: '/services/landscaping'
  },
];

// Project Data
export const projectsData = [
  {
    id: 1,
    slug: "savannah-heights-residential",
    title: "Savannah Heights Residential Complex",
    category: "residential",
    location: "Nairobi, Kenya",
    year: 2022,
    description: "A modern residential complex featuring 120 luxury apartments with sustainable design elements.",
    image: "/images/projects/savannah-heights.jpg"
  },
  {
    id: 2,
    slug: "jamii-business-center",
    title: "Jamii Business Center",
    category: "commercial",
    location: "Mombasa, Kenya",
    year: 2021,
    description: "A state-of-the-art office complex with retail spaces and underground parking facilities.",
    image: "/images/projects/jamii-business-center.jpg"
  },
  {
    id: 3,
    slug: "barabara-highway-extension",
    title: "Barabara Highway Extension",
    category: "civil",
    location: "Nakuru County, Kenya",
    year: 2020,
    description: "A 45-kilometer highway extension with bridges and drainage systems.",
    image: "/images/projects/barabara-highway.jpg"
  },
  {
    id: 4,
    slug: "unity-hospital-renovation",
    title: "Unity Hospital Renovation",
    category: "renovation",
    location: "Kisumu, Kenya",
    year: 2022,
    description: "Complete renovation and modernization of an existing medical facility.",
    image: "/images/projects/unity-hospital.jpg"
  },
  {
    id: 5,
    slug: "green-valley-eco-resort",
    title: "Green Valley Eco Resort",
    category: "commercial",
    location: "Nanyuki, Kenya",
    year: 2021,
    description: "An eco-friendly resort featuring sustainable building practices and materials.",
    image: "/images/projects/green-valley-resort.jpg"
  },
  {
    id: 6,
    slug: "maisha-water-treatment-plant",
    title: "Maisha Water Treatment Plant",
    category: "civil",
    location: "Machakos County, Kenya",
    year: 2020,
    description: "Water treatment facility serving over 50,000 residents with modern filtration systems.",
    image: "/images/projects/maisha-water-plant.jpg"
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, ABC Corporation",
    content: "Tronraft Africa delivered exceptional quality on our commercial building project. Their team's professionalism and attention to detail exceeded our expectations.",
    image: "/images/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Director, XYZ Industries",
    content: "Working with Tronraft Africa has been a game-changer for our infrastructure projects. Their consultancy services have saved us both time and resources.",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: 3,
    name: "Michael Ochieng",
    position: "Property Developer",
    content: "I've worked with many construction firms, but Tronraft stands out for their commitment to timeline and budget adherence while maintaining top quality.",
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 4,
    name: "Amina Wanjiku",
    position: "Project Manager, Government Housing Initiative",
    content: "The Tronraft team's expertise in civil works helped us overcome challenging terrain issues. Their innovative solutions saved us significant costs.",
    image: "/images/testimonials/amina.jpg"
  }
];

// Team Members Data
export const teamData = [
  {
    id: 1,
    name: "John Mwangi",
    position: "Chief Executive Officer",
    bio: "With over 15 years of experience in construction management, John leads Tronraft Africa with vision and expertise.",
    image: "/images/team/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Odhiambo",
    position: "Chief Operations Officer",
    bio: "Sarah ensures our projects are delivered on time and within budget while maintaining our high quality standards.",
    image: "/images/team/sarah.jpg"
  },
  {
    id: 3,
    name: "David Kimani",
    position: "Chief Technical Officer",
    bio: "David brings innovative engineering solutions to every project with his extensive technical background.",
    image: "/images/team/david.jpg"
  },
  {
    id: 4,
    name: "Jane Wanjiku",
    position: "Head of Design",
    bio: "Jane's creative designs blend functionality with aesthetics to create spaces that inspire and endure.",
    image: "/images/team/jane.jpg"
  }
];

// Company Values Data
export const valuesData = [
  { id: 1, title: "Quality", description: "We never compromise on materials or workmanship" },
  { id: 2, title: "Integrity", description: "Honest and transparent in all our dealings" },
  { id: 3, title: "Community", description: "Creating jobs and empowering local communities" },
  { id: 4, title: "Innovation", description: "Embracing new technologies and sustainable practices" }
];

// Client/Partner Logos
export const clientsData = [
  { 
    id: 1, 
    name: "ABC Corporation", 
    logo: "https://via.placeholder.com/150x80?text=ABC+Corp" 
  },
  { 
    id: 2, 
    name: "XYZ Industries", 
    logo: "https://via.placeholder.com/150x80?text=XYZ+Industries" 
  },
  { 
    id: 3, 
    name: "Global Enterprises", 
    logo: "https://via.placeholder.com/150x80?text=Global+Enterprises" 
  },
  { 
    id: 4, 
    name: "Tech Solutions", 
    logo: "https://via.placeholder.com/150x80?text=Tech+Solutions" 
  },
  { 
    id: 5, 
    name: "Infinity Builders", 
    logo: "https://via.placeholder.com/150x80?text=Infinity+Builders" 
  },
  { 
    id: 6, 
    name: "EcoSmart Developments", 
    logo: "https://via.placeholder.com/150x80?text=EcoSmart" 
  },
  { 
    id: 7, 
    name: "Metro Properties", 
    logo: "https://via.placeholder.com/150x80?text=Metro+Properties" 
  },
  { 
    id: 8, 
    name: "United Construction", 
    logo: "https://via.placeholder.com/150x80?text=United+Construction" 
  },
];
