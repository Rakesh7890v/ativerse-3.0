import { lazy, Suspense } from 'react';
import './App.css';
import bg from './assets/bg.webp';
import HomeComponent from './components/Home';
import LazySection from './components/LazySections';
import About from './components/About';

const Timeline = lazy(() => import('./components/TimeLine'));
const CountDown = lazy(() => import('./components/CountDown'));
const PrizesSection = lazy(() => import('./components/PrizeSection'));
const ApplicationForm = lazy(() => import('./components/ApplicationForm'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function HomePage() {
  return (
    <div className="app-container">
      <img
        src={bg}
        alt="background"
        loading="lazy"
        className="dot-bg"
      />

      <div className="content">

        <section id="home">
          <HomeComponent />
        </section>

        <Suspense fallback={<div className="loader">Loading...</div>}>

          <section id="about">
            <LazySection>
              <About />
            </LazySection>
          </section>

          <section id="timeline">
            <LazySection>
              <Timeline />
            </LazySection>
          </section>

          <section id="countdown">
            <LazySection>
              <CountDown />
            </LazySection>
          </section>

          <section id="prizes">
            <LazySection>
              <PrizesSection />
            </LazySection>
          </section>

          <section id="apply">
            <LazySection rootMargin="300px">
              <ApplicationForm />
            </LazySection>
          </section>

          <section id="faq">
            <LazySection>
              <FAQ />
            </LazySection>
          </section>

          <LazySection>
            <Footer />
          </LazySection>
        </Suspense>
      </div>
    </div>
  );
}

export default HomePage;