import React, { useState } from 'react';
import { FaInfoCircle, FaUpload, FaCheckCircle } from 'react-icons/fa';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email',
    heardAbout: '',
    files: [] as File[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, files: [...prev.files, ...fileArray] }));
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...formData.files];
    updatedFiles.splice(index, 1);
    setFormData(prev => ({ ...prev, files: updatedFiles }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Thank you for your quote request. Our team will review your project details and get back to you within 2 business days.'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        location: '',
        budget: '',
        timeline: '',
        description: '',
        preferredContact: 'email',
        heardAbout: '',
        files: []
      });
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tell us about your project, and we'll provide a detailed estimate tailored to your needs
          </p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="section bg-light">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitResult ? (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Quote Request Submitted!</h2>
                <p className="mb-6 text-lg">{submitResult.message}</p>
                <button 
                  onClick={() => setSubmitResult(null)} 
                  className="btn btn-primary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaInfoCircle className="text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        Please provide as much detail as possible about your project to help us provide an accurate quote. Fields marked with an asterisk (*) are required.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block mb-1 font-medium">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="phone" className="block mb-1 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-1 font-medium">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-4 pb-2 border-b mt-8">Project Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="projectType" className="block mb-1 font-medium">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select Project Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Consultancy">Consultancy</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block mb-1 font-medium">Project Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="budget" className="block mb-1 font-medium">Estimated Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Under $10,000">Under $10,000</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                        <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                        <option value="$1,000,000+">$1,000,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block mb-1 font-medium">Desired Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Timeline</option>
                        <option value="Immediate">Immediate</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="More than 12 months">More than 12 months</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block mb-1 font-medium">Project Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Please provide details about your project, specific requirements, and any other information that might help us prepare an accurate quote."
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-1 font-medium">Upload Documents (Optional)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="fileUpload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                            <span>Upload files</span>
                            <input 
                              id="fileUpload" 
                              name="files" 
                              type="file" 
                              className="sr-only" 
                              multiple 
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, PDF, DOC up to 10MB each
                        </p>
                      </div>
                    </div>
                    {formData.files.length > 0 && (
                      <ul className="mt-3 divide-y divide-gray-200">
                        {formData.files.map((file, index) => (
                          <li key={index} className="py-2 flex justify-between items-center">
                            <span className="text-sm truncate">{file.name}</span>
                            <button 
                              type="button" 
                              onClick={() => removeFile(index)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-4 pb-2 border-b mt-8">Additional Information</h3>

                  <div className="mb-6">
                    <label className="block mb-3 font-medium">Preferred Contact Method *</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="contactEmail" 
                          name="preferredContact" 
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="contactEmail" className="ml-2 block text-gray-700">Email</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="contactPhone" 
                          name="preferredContact" 
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="contactPhone" className="ml-2 block text-gray-700">Phone</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="contactWhatsApp" 
                          name="preferredContact" 
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <label htmlFor="contactWhatsApp" className="ml-2 block text-gray-700">WhatsApp</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="heardAbout" className="block mb-1 font-medium">How did you hear about us?</label>
                    <select
                      id="heardAbout"
                      name="heardAbout"
                      value={formData.heardAbout}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Please select</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex items-center mb-6">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the processing of my personal data in accordance with the <a href="/privacy" className="text-primary hover:underline">privacy policy</a> *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quote Process</h3>
              <ol className="list-decimal ml-5 space-y-2">
                <li>Submit your project details</li>
                <li>Our team reviews your requirements</li>
                <li>We prepare a detailed quote</li>
                <li>You receive the quote within 2-3 business days</li>
                <li>We schedule a consultation to discuss further</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Why Choose Us</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Free, no-obligation quotes</li>
                <li>Transparent pricing structure</li>
                <li>Detailed project proposals</li>
                <li>Competitive rates</li>
                <li>Professional project management</li>
                <li>Quality guarantee on all work</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Need Help?</h3>
              <p className="mb-4">
                If you have questions about requesting a quote or need assistance, please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> <a href="mailto:quotes@tronraftafrica.com" className="text-primary hover:underline">quotes@tronraftafrica.com</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+254123456789" className="text-primary hover:underline">+254 123 456 789</a>
                </p>
                <p>
                  <strong>Hours:</strong> Monday to Friday, 8am to 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
