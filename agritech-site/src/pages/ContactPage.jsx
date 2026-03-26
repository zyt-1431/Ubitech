import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, FileText, Wrench, Users } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: 'Email', content: 'info@ubitech.com', link: 'mailto:info@ubitech.com' },
  { icon: Phone, title: 'Phone', content: '+31 20 123 4567', link: 'tel:+31201234567' },
  { icon: MapPin, title: 'Address', content: 'Rotterdam Port District, The Netherlands, 3011 AB', link: null },
  { icon: Clock, title: 'Business Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM (CET)', link: null },
];

const tabs = [
  { id: 'general', label: 'General Inquiry', icon: Mail, title: 'Send us a message' },
  { id: 'warranty', label: 'Warranty', icon: FileText, title: 'Warranty Service' },
  { id: 'support', label: 'Technical Support', icon: Wrench, title: 'Technical Assistance' },
  { id: 'careers', label: 'Careers', icon: Users, title: 'Join Our Team' },
];

const jobs = [
  { title: 'Regional Sales Manager - Europe', location: 'Rotterdam, Netherlands', type: 'Full-time' },
  { title: 'Technical Support Engineer', location: 'Remote / Germany', type: 'Full-time' },
  { title: 'Product Training Specialist', location: 'Rotterdam, Netherlands', type: 'Full-time' },
  { title: 'Marketing Coordinator', location: 'Remote', type: 'Full-time' },
];

export const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help with sales inquiries,
            technical support, warranty claims, and career opportunities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map(item => (
                  <div key={item.title} className="flex flex-col items-center text-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-primary transition-colors text-sm">{item.content}</a>
                      ) : (
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                >
                  <tab.icon className="w-5 h-5" />{tab.label}
                </button>
              ))}
            </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                {activeTab === 'general' && (
                  <>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                        <p className="text-gray-600 mb-8">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
                        <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">Send Another Message</button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a message</h3>
                          <p className="text-gray-600">Have questions about our products or services? We're here to help.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                            <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="input" placeholder="Your name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="input" placeholder="you@example.com" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                          <textarea rows={5} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="input" placeholder="How can we help you?" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-accent w-full py-4">
                          {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sending...</> : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
                        </button>
                      </form>
                    )}
                  </>
                )}

                {activeTab === 'warranty' && (
                  <div className="space-y-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty Service</h3>
                    <p className="text-gray-600">All Ubitech products come with a comprehensive warranty.</p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Warranty Coverage</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />XAG Products: 2-year manufacturer warranty</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Ubitech Products: 2-year manufacturer warranty</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Batteries: 1-year warranty</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />Accessories: 6-month warranty</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'support' && (
                  <div className="space-y-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Assistance</h3>
                    <p className="text-gray-600">Our technical support team is available to help with installation, operation, and troubleshooting.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
                        <p className="text-gray-600 mb-4">Available Mon-Fri, 9AM-6PM CET</p>
                        <a href="tel:+31201234567" className="text-primary font-medium">+31 20 123 4567</a>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                        <p className="text-gray-600 mb-4">Response within 24 hours</p>
                        <a href="mailto:support@ubitech.com" className="text-primary font-medium">support@ubitech.com</a>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'careers' && (
                  <div className="space-y-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Team</h3>
                    <p className="text-gray-600">We're always looking for talented individuals to join our team.</p>
                    <div className="space-y-4">
                      {jobs.map((job, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors gap-4">
                          <div className="text-center sm:text-left">
                            <h4 className="font-semibold text-gray-900">{job.title}</h4>
                            <p className="text-sm text-gray-500">{job.location} - {job.type}</p>
                          </div>
                          <button className="btn btn-secondary py-2 px-4">Apply</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
