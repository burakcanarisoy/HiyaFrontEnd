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
      <div id="problem-highlight" className="scrollytelling-section">
        <ProblemHighlight />
      </div>
      <div id="hiya-solution" className="scrollytelling-section">
        <HiyaSolution />
      </div>
      <div id="how-it-works" className="scrollytelling-section">
        <HowItWorks />
      </div>
      <div id="product-teasers" className="scrollytelling-section">
        <ProductTeasers />
      </div>
      <div id="social-proof" className="scrollytelling-section">
        <SocialProof />
      </div>
      <div id="why-hiya" className="scrollytelling-section">
        <WhyHiya />
      </div>
      <div className="scrollytelling-section">
        <FinalCTA />
      </div>
    </main>
  );
}