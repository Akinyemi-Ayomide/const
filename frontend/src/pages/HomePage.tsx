// import Construction from '../components/Construction';
import React, { Suspense } from 'react';
import Feature from '../components/Feature';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';

const Section1 = React.lazy(() => import('../components/Section1'));
const Slide = React.lazy(() => import('../components/Slide'));
const Testimonial = React.lazy(() => import('../components/Testimonial'));

import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="mx-5">
        {' '}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            {' '}
            <Section1 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Feature />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Info />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Testimonial />
          </Suspense>
        </ErrorBoundary>
      </div>
      <Slide />
    </div>
  );
};

export default HomePage;
