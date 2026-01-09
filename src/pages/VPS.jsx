import React from "react";
import { Check, Shield, Cpu, HardDrive, Globe } from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const VpsHero = () => (
  <div className="bg-slate-950 border-b border-slate-800/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl text-left">
          <span className="text-brand-500 text-sm font-medium mb-2 block">Premium Server Plans</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Virtual Private Servers<span className="text-brand-500">.</span>
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
            src="https://img.icons8.com/isometric/512/server.png"
            alt="VPS Hosting"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
);

const PlanTier = ({ ram, price, cpu, storage, bandwidth, href }) => (
  <div className="relative p-4 sm:p-6 rounded-lg border border-slate-800/50 bg-slate-900/50">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
      {/* Plan Name and Price */}
      <div className="flex items-center justify-between lg:gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold">{ram}GB RAM</h3>
        </div>
        {/* Mobile Price - Shown only on small screens */}
        <div className="flex items-baseline gap-1 lg:hidden">
          <span className="text-xl sm:text-2xl font-bold">${price}</span>
          <span className="text-gray-400">/mo</span>
        </div>
      </div>

      {/* Specs */}
      <div className="flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 shrink-0" />
            <span>{cpu} vCPU Cores</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 shrink-0" />
            <span>{storage}GB NVMe</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 shrink-0" />
            <span>{bandwidth}TB BW</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400 shrink-0" />
            <span>DDoS Protection</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Desktop Price - Hidden on small screens */}
        <div className="hidden lg:flex items-baseline gap-1">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-gray-400">/mo</span>
        </div>

        {/* Deploy Button */}
        <a href={href}>
          <GlowingButton className="w-full lg:w-auto px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap bg-slate-800 hover:bg-slate-700">
            Deploy Now
          </GlowingButton>
        </a>
      </div>
    </div>
  </div>
);

const VpsPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced DDoS protection and regular security updates to keep your VPS safe.",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description:
        "Powered by latest-gen processors and NVMe storage.",
    },
    {
      icon: HardDrive,
      title: "NVMe Storage",
      description: "Lightning-fast storage with exceptional I/O performance.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Multiple locations worldwide with premium bandwidth providers.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Virtual Private Servers | Renderbyte</title>
      </Helmet>
      <VpsHero />

      {/* Features Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Our VPS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-400/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Deploy Your VPS?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose from our range of high-performance Virtual Private Servers and get started in minutes.
          </p>
          <a 
            href="https://billing.renderbyte.site/products/vps-hosting"
            className="inline-block"
          >
            <GlowingButton className="px-8 py-3 text-lg font-bold">
              View Plans & Deploy
            </GlowingButton>
          </a>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default VpsPage;
