import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="relative py-16 bg-gray-100 dark:bg-blue-300">
        {/* Hero Section */}
        <div className="relative w-full h-64 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'https://cdn.pixabay.com/photo/2023/08/04/09/40/health-8168788_640.jpg' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">About Us</h2>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-6 mt-12">
          <h3 className="text-3xl font-semibold text-center mb-8">Our Mission</h3>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Our mission is to provide exceptional healthcare services that improve the quality of life for our patients. We aim to offer innovative treatments and compassionate care in a safe and supportive environment.
          </p>
        </div>

        {/* Values Section */}
        <div className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Value 1" className="w-full h-40 object-cover rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Compassion</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-300">We care deeply about our patients and are committed to delivering compassionate care.</p>
          </div>
          <div className="text-center">
            <img src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Value 2" className="w-full h-40 object-cover rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Innovation</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-700">We embrace innovation and continuously seek to improve our services through advanced technology.</p>
          </div>
          <div className="text-center">
            <img src="https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Value 3" className="w-full h-40 object-cover rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Excellence</h4>
            <p className="mt-2 text-gray-600 dark:text-gray-700">We strive for excellence in every aspect of our work, ensuring the highest standards of care.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-6 mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <img src="/path-to-team-member1.jpg" alt="Team Member 1" className="w-40 h-40 object-cover rounded-full mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Dr.Pranav Jadhav</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-700">Chief Medical Officer</p>
            </div>
            
            <div className="text-center">
              <img src="/path-to-team-member2.jpg" alt="Team Member 2" className="w-40 h-40 object-cover rounded-full mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Dr.Himanshi Pandey</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-700">Head of Surgery</p>
            </div>
            
            <div className="text-center">
              <img src="/path-to-team-member3.jpg" alt="Team Member 3" className="w-40 h-40 object-cover rounded-full mx-auto" />
              <h4 className="text-xl font-semibold mt-4">Dr. Gauri Sonawane</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-700">Head of Pediatrics</p>
            </div>
          </div>
        </div>

        
        <div className="container mx-auto px-6 mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">What Our Patients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"The care I received was outstanding. The staff were compassionate and attentive to my needs."</p>
              <p className="mt-4 text-right text-gray-600 dark:text-gray-300">- John Die</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"Thanks to the dedicated team, my recovery was smooth and successful. I highly recommend this hospital."</p>
              <p className="mt-4 text-right text-gray-600 dark:text-gray-300">- Alice Smith</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
