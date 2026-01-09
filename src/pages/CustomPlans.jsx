import React, { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import Helmet from "react-helmet";
import { GlowingButton } from "../components/ui/GlowingButton";

const customPlans = [
  { name: "Newbie Plan", inr: "59", usd: "0.69", specs: "1 GB RAM | 5 GB NVMe SSD | 1 vCore" },
  { name: "Basic Plan", inr: "129", usd: "1.49", specs: "2 GB RAM | 10 GB NVMe SSD | 1 vCore" },
  { name: "Pro Plan", inr: "249", usd: "2.89", specs: "4 GB RAM | 20 GB NVMe SSD | 2 vCores" },
  { name: "Essentials Plan", inr: "349", usd: "4.09", specs: "6 GB RAM | 25 GB NVMe SSD | 2 vCores" },
  { name: "Elite Plan", inr: "449", usd: "5.19", specs: "8 GB RAM | 40 GB NVMe SSD | 3 vCores" },
  { name: "Strelizia Plan", inr: "699", usd: "8.19", specs: "12 GB RAM | 60 GB NVMe SSD | 4 vCores" },
  { name: "Blaze Plan", inr: "1,099", usd: "12.89", specs: "24 GB RAM | 80 GB NVMe SSD | 5 vCores" },
  { name: "Enterprise Plan", inr: "1,399", usd: "16.49", specs: "32 GB RAM | 100 GB NVMe SSD | 6 vCores" },
];

const CustomPlansPage = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <Helmet>
      <title>Custom Plans | Renderbyte</title>
    </Helmet>
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
              alt="Custom Games"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {customPlans.map((plan, index) => (
          <div key={index} className="p-6 rounded-lg border border-slate-800 bg-slate-900 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://img.icons8.com/isometric/48/controller.png" alt="Controller" className="w-6 h-6" />
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{plan.specs}</p>
            <div className="mb-6 mt-auto">
              <div className="text-2xl font-bold text-white">₹{plan.inr}</div>
              <div className="text-sm text-gray-500">/ ${plan.usd} per mo</div>
            </div>
            <GlowingButton className="w-full py-2">Deploy Now</GlowingButton>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CustomPlansPage;
