import React from 'react';
import Image from 'next/image';
import { FaCheck, FaAward, FaCertificate, FaUsers, FaHandshake } from 'react-icons/fa';
import ClientsMarquee from '../components/home/ClientsMarquee';
import { clientsData } from '../utils/data';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "John Mwangi",
      position: "Chief Executive Officer",
      bio: "With over 15 years of experience in construction management, John leads Tronraft Africa with vision and expertise.",
      image: "/images/team/john.jpg"
    },
    {
      name: "Sarah Odhiambo",
      position: "Chief Operations Officer",
      bio: "Sarah ensures our projects are delivered on time and within budget while maintaining our high quality standards.",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "David Kimani",
      position: "Chief Technical Officer",
      bio: "David brings innovative engineering solutions to every project with his extensive technical background.",
      image: "/images/team/david.jpg"
    },
    {
      name: "Jane Wanjiku",
      position: "Head of Design",
      bio: "Jane's creative designs blend functionality with aesthetics to create spaces that inspire and endure.",
      image: "/images/team/jane.jpg"
    }
  ];

  const values = [
    { icon: <FaCheck />, title: "Quality", description: "We never compromise on materials or workmanship" },
    { icon: <FaHandshake />, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: <FaUsers />, title: "Community", description: "Creating jobs and empowering local communities" }
  ];

  const certifications = [
    "National Construction Authority (NCA) Certification",
    "ISO 9001:2015 Quality Management",
    "Kenya Bureau of Standards Compliance",
    "Environmental Management Certification",
    "Occupational Health and Safety Certification"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tronraft Africa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building Africa's future through quality construction and empowerment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative h-80 md:h-96 w-full">
              {/* Replace with your company image */}
              <div className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Company Image</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6">
                Established in 2010, Tronraft Africa Limited has grown from a small consultancy firm to one of the leading construction companies in East Africa. We specialize in delivering high-quality construction services across residential, commercial, and civil sectors.
              </p>
              <p className="mb-6">
                Our journey has been defined by a commitment to excellence, innovation, and community development. By prioritizing local expertise and sustainable practices, we've successfully completed over 200 projects throughout the region.
              </p>
              <p>
                Today, with a team of over 100 professionals, we continue to expand our capabilities while maintaining our core values and mission: "Empower Africa, Empower You."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaAward className="text-4xl text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg">
                To deliver exceptional construction and consultancy services that empower communities, create sustainable infrastructure, and build a stronger Africa for future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaUsers className="text-4xl text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg">
                To be the most trusted construction and consultancy partner in Africa, recognized for excellence, innovation, and positive social impact in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Meet the experienced professionals who guide our company to success
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Certifications</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-8">
                <FaCertificate className="text-4xl text-primary mr-4" />
                <h3 className="text-2xl font-bold">Quality Assurance</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative h-80 w-full">
              {/* Replace with certifications image */}
              <div className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Certifications Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section with Client Marquee */}
      <section id="partners" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built strong relationships with industry leaders to deliver exceptional results for our clients
            </p>
          </div>
          
          <ClientsMarquee 
            clients={clientsData}
            speed={30}
            direction="right"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4">Supplier Partnerships</h3>
              <p className="text-gray-600">
                We partner with the best material suppliers to ensure quality, sustainability, and cost-effectiveness for all our projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Technology Collaborations</h3>
              <p className="text-gray-600">
                Our technology partnerships keep us at the cutting edge of building information modeling, project management, and sustainability solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Industry Affiliations</h3>
              <p className="text-gray-600">
                We are proud members of industry associations that promote best practices, innovation, and professional development in construction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
