import React from "react";
import { Helmet } from "react-helmet";
import { GlowingButton } from "../components/ui/GlowingButton";
import FAQ from "../components/FAQ";

const botPlans = [
  { name: "ByteNest", price: "23", specs: "1 GB RAM | 3 GB SSD" },
  { name: "ScriptForge", price: "45", specs: "3 GB RAM | 6 GB SSD" },
  { name: "CodePulse", price: "90", specs: "6 GB RAM | 12 GB SSD" },
  { name: "LogicCore", price: "135", specs: "9 GB RAM | 18 GB SSD" },
  { name: "NeuralEdge", price: "180", specs: "12 GB RAM | 24 GB SSD" },
];

const BotHostingPage = () => (
  <div className="min-h-screen bg-slate-950 text-white">
    <Helmet>
      <title>Bot Hosting | Renderbyte</title>
    </Helmet>
    
    <div className="bg-slate-950 border-b border-slate-800/50">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-xl text-left">
            <span className="text-brand-500 text-sm font-medium mb-2 block">Premium Bot Plans</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Discord Bot Hosting<span className="text-brand-500">.</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-6">
              Host your Discord bots with maximum reliability and performance. Our servers are optimized for Python, Node.js, and Java bots with instant setup and 24/7 uptime.
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
              src="https://img.icons8.com/isometric/512/bot.png"
              alt="Bot Hosting"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {botPlans.map((plan, index) => (
          <div key={index} className="p-6 rounded-lg border border-slate-800 bg-slate-900 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://img.icons8.com/isometric/48/bot.png" alt="Bot" className="w-6 h-6" />
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{plan.specs}</p>
            <div className="text-2xl font-bold mb-6">₹{plan.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
            <a href="https://billing.renderbyte.site">
              <GlowingButton className="w-full py-2 mt-auto">Deploy Bot</GlowingButton>
            </a>
          </div>
        ))}
      </div>
    </div>
    
    <FAQ />
  </div>
);

export default BotHostingPage;
