import React from "react";
import { Check, Cpu, HardDrive, Server, Users, Shield, Layers } from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import ShowcasePanel from "../components/ShowcasePanel";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MinecraftHero = () => (
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

const MinecraftPage = () => {
  const budgetPlans = [
    { name: "ByteNest", price: 30, specs: "2GB RAM | 1 Core | 10GB SSD" },
    { name: "ScriptForge", price: 60, specs: "4GB RAM | 1.5 Cores | 20GB SSD" },
    { name: "CodePulse", price: 80, specs: "6GB RAM | 2 Cores | 40GB SSD" },
    { name: "LogicCore", price: 140, specs: "8GB RAM | 2 Cores | 40GB SSD" },
    { name: "NeuralEdge", price: 180, specs: "12GB RAM | 3 Cores | 50GB SSD" },
    { name: "QuantumCore", price: 200, specs: "16GB RAM | 4 Cores | 60GB SSD" },
    { name: "HyperNode", price: 240, specs: "24GB RAM | 4 Cores | 80GB SSD" },
    { name: "OmniForge", price: 300, specs: "32GB RAM | 8 Cores | 100GB SSD" },
  ];

  const features = [
    { icon: Cpu, title: "Intel Xeon High-Frequency CPUs" },
    { icon: HardDrive, title: "NVMe SSD Storage" },
    { icon: Server, title: "Instant Setup & SFTP Access" },
    { icon: Users, title: "Unlimited Player Slots" },
    { icon: Shield, title: "24/7 Support via Discord Tickets" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Minecraft Hosting | Renderbyte</title>
      </Helmet>
      <MinecraftHero />

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Budget-Friendly Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {budgetPlans.map((plan, index) => (
            <div key={index} className="p-6 rounded-lg border border-slate-800 bg-slate-900 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <img src="https://img.icons8.com/color/48/minecraft-main-character.png" alt="MC" className="w-6 h-6" />
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{plan.specs}</p>
              <div className="text-2xl font-bold mb-6">₹{plan.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <a href="https://billing.renderbyte.site">
                <GlowingButton className="w-full py-2">Deploy Server</GlowingButton>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">All Plans Include</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-slate-900/50 border border-slate-800">
              <div className="w-12 h-12 rounded-lg bg-brand-400/20 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <ShowcasePanel />
      <FAQ />
    </div>
  );
};

export default MinecraftPage;
