import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/08/04/09/40/health-8168788_640.jpg")' }}>
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-blue-950 shadow-md animate-bounce">YOUR JOURNEY TO WELLNESS BEGINS HERE</h2>
          <p className="text-lg text-black animate-pulse">Your health, our priority</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-12 animate-slide-in-left">Our Services</h2>
    <div className="space-y-8">
      {/* Emergency Care */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="Emergency Care" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">Emergency Care</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">24/7 emergency services to handle critical situations.</p>
            <Link to="/services/emergency-care" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* X-Ray & Imaging */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="X-Ray & Imaging" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">X-Ray & Imaging</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Advanced imaging services including X-ray, MRI, and CT scans.</p>
            <Link to="/services/xray-imaging" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Operation Theatre */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="Operation Theatre" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">Operation Theatre</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">State-of-the-art operation theatres equipped for complex surgeries.</p>
            <Link to="/services/operation-theatre" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* In-Patient Management */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="In-Patient Management" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">In-Patient Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Comprehensive care and management for admitted patients.</p>
            <Link to="/services/in-patient-management" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* General Medicine */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="General Medicine" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">General Medicine</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Comprehensive care for everyday health issues and preventive care.</p>
            <Link to="/services/general-medicine" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Pharmacy */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="https://via.placeholder.com/300x150" alt="Pharmacy" className="w-full lg:w-1/3 h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-t-lg" />
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold mb-4">Pharmacy</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">In-house pharmacy for convenient access to prescribed medications.</p>
            <Link to="/services/pharmacy" className="text-green-500 hover:underline">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Home;
