import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Doctors = () => {
  return (
    <div>
      <Header />
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Doctors</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Our team of experienced doctors is dedicated to providing the best possible care. Each member of our team is highly skilled and committed to delivering compassionate, patient-centered care in their respective specialties.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Doctors;
