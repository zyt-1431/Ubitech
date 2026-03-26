import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Building, Save, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AccountPage = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    company: user?.company || '',
  });

  const handleSave = () => {
    updateProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
    });
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h2>
          <p className="text-gray-600 mb-6">You need to sign in to view your account.</p>
          <button onClick={() => window.location.href = '/'} className="btn btn-primary">Go to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                {!isEditing && <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Edit Profile</button>}
              </div>

              {isSaved && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">Profile updated successfully!</div>}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"><User className="w-4 h-4 inline mr-2" />Full Name</label>
                    <input type="text" disabled={!isEditing} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="input disabled:bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Mail className="w-4 h-4 inline mr-2" />Email Address</label>
                    <input type="email" disabled={!isEditing} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="input disabled:bg-gray-50" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Phone className="w-4 h-4 inline mr-2" />Phone Number</label>
                    <input type="tel" disabled={!isEditing} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="input disabled:bg-gray-50" placeholder="+1 234 567 890" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"><Building className="w-4 h-4 inline mr-2" />Company</label>
                    <input type="text" disabled={!isEditing} value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="input disabled:bg-gray-50" placeholder="Company name" />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <button onClick={handleSave} className="btn btn-primary"><Save className="w-5 h-5 mr-2" />Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Security</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Password</h4>
                      <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                    </div>
                  </div>
                  <button className="btn btn-secondary py-2">Change Password</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Verification</h4>
                      <p className="text-sm text-green-600">Verified</p>
                    </div>
                  </div>
                  <button className="btn btn-ghost py-2">Change Email</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
