import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    const savedAuth = localStorage.getItem('agritech_auth');
    if (savedAuth) {
      try {
        const userData = JSON.parse(savedAuth);
        setUser(userData);
      } catch (error) {
        console.error('Failed to load auth:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const demoUser = {
      id: 'user_' + Date.now(),
      name: email.split('@')[0],
      email: email,
      company: 'Demo Company',
    };
    setUser(demoUser);
    localStorage.setItem('agritech_auth', JSON.stringify(demoUser));
    setIsLoading(false);
    setShowAuthModal(false);
    return true;
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    const newUser = {
      id: 'user_' + Date.now(),
      name: name,
      email: email,
      company: '',
    };
    setUser(newUser);
    localStorage.setItem('agritech_auth', JSON.stringify(newUser));
    setIsLoading(false);
    setShowAuthModal(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agritech_auth');
  };

  const updateProfile = (updates) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('agritech_auth', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        showAuthModal,
        setShowAuthModal,
        authMode,
        setAuthMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
