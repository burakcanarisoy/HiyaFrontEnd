// src/app/page.tsx
import Hero from './components/Hero';
import IntroText from './components/ProblemHighlight';
import HiyaSolution from './components/HiyaSolution';
import HowItWorks from './components/HowItWorks';
import ProductTeasers from './components/ProductTeasers';
import ProblemHighlight from './components/ProblemHighlight';
import SocialProof from './components/SocialProof';
import WhyHiya from './components/WhyHiya';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <main className="scrollytelling-container">
      <div className="scrollytelling-section">
        <Hero />
      </div>
      <div className="scrollytelling-section">
        <ProblemHighlight />
      </div>
      <div className="scrollytelling-section">
        <HiyaSolution />
      </div>
      <div className="scrollytelling-section">
        <HowItWorks />
      </div>
      <div className="scrollytelling-section">
        <ProductTeasers />
      </div>
      <div className="scrollytelling-section">
        <SocialProof />
      </div>
      <div className="scrollytelling-section">
        <WhyHiya />
      </div>
      <div className="scrollytelling-section">
        <FinalCTA />
      </div>
    </main>
  );
}