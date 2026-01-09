import React from "react";
import FeaturesSection from "../components/home/FeaturesSection";
import Hero from "../components/home/Hero";
import ShowcasePanel from "../components/ShowcasePanel";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/FAQ";
import BottomCTA from "../components/home/BottomCTA";
import Helmet from "react-helmet";

const HomeMinecraftHero = () => (
  <div className="bg-slate-950 border-b border-slate-800/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl text-left">
          <span className="text-brand-500 text-sm font-medium mb-2 block">Premium Server Plans</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Premium Game Server Hosting<span className="text-brand-500">.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Experience lag-free gaming with our high-performance servers. We provide dedicated resources, advanced DDoS protection, and 24/7 expert support to ensure your game servers run smoothly.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Instant Setup
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              DDoS Protection
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Performance SSD
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Custom Control Panel
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              Backup System
            </div>
          </div>
        </div>
        <div className="relative h-[300px] lg:h-[400px] w-full max-w-[600px] mx-auto rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            alt="Minecraft"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Renderbyte</title>
      </Helmet>
      <Hero />
      <FeaturesSection />
      <ShowcasePanel />
      <Testimonials />
      <FAQ />
      <BottomCTA />
    </>
  );
};

export default Home;
