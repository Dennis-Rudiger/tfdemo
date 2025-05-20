import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../../components/ui/HeroSection';
import Button from '../../components/ui/Button';
import ProjectCard from '../../components/projects/ProjectCard';
import ProjectFilter from '../../components/projects/ProjectFilter';
import { projectData, getCategories, getProjectsByCategory } from '../../utils/projectData';
import { FaArrowRight, FaSearch, FaTrophy } from 'react-icons/fa';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(Object.values(projectData));
  const [searchQuery, setSearchQuery] = useState('');
  const [categories] = useState(getCategories());
  
  // Filter projects based on category and search query
  useEffect(() => {
    const categoryFiltered = getProjectsByCategory(activeCategory);
    
    if (searchQuery.trim() === '') {
      setFilteredProjects(categoryFiltered);
      return;
    }
    
    const searchFiltered = categoryFiltered.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredProjects(searchFiltered);
  }, [activeCategory, searchQuery]);
  
  // Get a featured project (first one for simplicity)
  const featuredProject = Object.values(projectData)[0];
  
  return (
    <>
      <Head>
        <title>Our Projects | Tronraft Africa Limited</title>
        <meta 
          name="description" 
          content="Explore our portfolio of construction and infrastructure projects across East Africa, showcasing our expertise in various sectors."
        />
      </Head>
      
      {/* Hero Section with stylish background */}
      <HeroSection 
        title="Our Portfolio"
        subtitle="Discover our outstanding construction and infrastructure projects across East Africa"
        showButtons={false}
        height="small"
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        overlayStyle="gradient"
      />
      
      {/* Featured Project Showcase */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Project</h2>
              <div className="h-1 w-20 bg-secondary mt-2"></div>
            </div>
            <Button 
              href="/projects" 
              variant="ghost"
              icon={<FaArrowRight />}
              className="mt-4 md:mt-0"
            >
              View All Projects
            </Button>
          </div>
          
          <div className="mt-6">
            <ProjectCard project={featuredProject} variant="featured" />
          </div>
        </div>
      </section>
      
      {/* Projects Grid with Filtering */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We have successfully delivered projects across various sectors, demonstrating our versatility and commitment to excellence.
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <div className="md:w-1/3 lg:w-1/4">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-gray-500 mb-4">
                    <FaSearch size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No projects found</h3>
                  <p className="text-gray-600">
                    Please try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">120+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">12</div>
              <p className="text-blue-100">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards and Recognition */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized through various industry awards and accolades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaTrophy size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Construction Excellence</h3>
              <p className="text-gray-600">East African Construction Awards, 2022</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaTrophy size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Innovation</h3>
              <p className="text-gray-600">Green Building Council Recognition, 2023</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaTrophy size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Heritage Preservation</h3>
              <p className="text-gray-600">Historical Sites Conservation Award, 2021</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-8 md:mb-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Client Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/4 md:pl-8">
              <svg className="text-white/20 w-12 h-12 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl italic mb-6">
                "Tronraft Africa consistently delivered beyond our expectations. The team's attention to detail, commitment to quality, and ability to solve complex challenges made them the ideal partner for our flagship development project."
              </p>
              <div>
                <h4 className="font-bold text-lg">James Kamau</h4>
                <p className="text-blue-200">CEO, Urban Development Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with our expertise and experience
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="/quote" 
              variant="secondary" 
              size="lg"
              glow={true}
              icon={<FaArrowRight />}
            >
              Request a Quote
            </Button>
            <Button 
              href="/contact" 
              variant="outline"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
