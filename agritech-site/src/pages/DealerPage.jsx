import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, TrendingUp, ChevronRight, Loader2, Send } from 'lucide-react';

const benefits = [
  { icon: TrendingUp, title: 'Growth Potential', description: 'Access to a rapidly growing market with proven demand for precision agriculture solutions.' },
  { icon: Globe, title: 'Global Brand', description: 'Partner with established brands XAG and Ubitech, recognized worldwide for quality and innovation.' },
  { icon: Users, title: 'Training & Support', description: 'Comprehensive training programs, technical support, and marketing materials provided.' },
  { icon: CheckCircle, title: 'Exclusive Territory', description: 'Territorial exclusivity for qualified dealers, ensuring minimal competition in your region.' },
];

export const DealerPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', email: '', phone: '', country: '', city: '', products: [], message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">Thank you for your interest in becoming a Ubitech dealer. Our team will review your application and contact you within 5 business days.</p>
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Dealer Partner</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join our global network of dealers and bring innovative precision agriculture
            solutions to farmers in your region.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support to help our dealers succeed in the
              rapidly growing precision agriculture market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${formStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${formStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                <span className="text-gray-600 ml-4">Step {formStep} of 3</span>
              </div>

              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                        <input type="text" required value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} className="input" placeholder="Your company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                        <input type="text" required value={formData.contactPerson} onChange={e => setFormData({ ...formData, contactPerson: e.target.value })} className="input" placeholder="Full name" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="input" placeholder="email@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="input" placeholder="+1 234 567 890" />
                      </div>
                    </div>
                    <button type="button" onClick={() => setFormStep(2)} className="btn btn-primary w-full">Next Step <ChevronRight className="w-5 h-5 ml-2" /></button>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Product Interest</h3>
                    <p className="text-gray-600">Select the product categories you're interested in selling:</p>
                    <div className="space-y-3">
                      {[{ id: 'xag-drones', label: 'XAG Agricultural Drones' }, { id: 'ubitech-systems', label: 'Ubitech Autonomous Systems' }, { id: 'accessories', label: 'Accessories & Spare Parts' }, { id: 'all', label: 'Full Product Range' }].map(option => (
                        <label key={option.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                          <input type="checkbox" checked={formData.products.includes(option.id)} onChange={e => {
                            if (e.target.checked) setFormData({ ...formData, products: [...formData.products, option.id] });
                            else setFormData({ ...formData, products: formData.products.filter(p => p !== option.id) });
                          }} className="w-5 h-5 rounded border-gray-300" />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setFormStep(1)} className="btn btn-secondary flex-1">Previous</button>
                      <button type="button" onClick={() => setFormStep(3)} className="btn btn-primary flex-1">Next Step <ChevronRight className="w-5 h-5 ml-2" /></button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your company:</label>
                      <textarea rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="input" placeholder="Share details about your experience..." />
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setFormStep(2)} className="btn btn-secondary flex-1">Previous</button>
                      <button type="submit" disabled={isSubmitting} className="btn btn-accent flex-1">
                        {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Submitting...</> : <>Submit Application <Send className="w-5 h-5 ml-2" /></>}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
