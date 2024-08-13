import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Healthcare = () => {
  return (
    <div>
      <Header />
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Healthcare Services</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Our hospital provides a comprehensive range of healthcare services to meet the needs of our patients. From preventive care to advanced treatments, our goal is to deliver exceptional medical care and support for every stage of life.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Healthcare;
