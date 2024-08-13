import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceName } = useParams();

  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">{serviceName.replace(/-/g, ' ')}</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">Details about {serviceName.replace(/-/g, ' ')}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
