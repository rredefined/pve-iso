import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    name: "Minecraft",
    price: 30,
    image: "https://img.icons8.com/color/512/minecraft-main-character.png",
    category: "Survival",
    href: "/minecraft",
  },
  {
    id: 2,
    name: "Custom Games",
    price: 59,
    image: "https://img.icons8.com/isometric/512/controller.png",
    category: "Custom",
    href: "/custom-plans", // We will create a new route for this or handle it here
  },
];

const GamesHero = () => (
  <div className="bg-slate-950 border-b border-slate-800/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
      <div className="flex flex-col items-start max-w-2xl">
        <span className="text-brand-500 text-sm font-medium mb-2">
          Premium Game Servers
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Choose Your Game.
          <br />
          Deploy Instantly<span className="text-brand-500">.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Select from our wide range of optimized game servers. Get started in
          minutes with our instant deployment system.
        </p>
      </div>
    </div>
  </div>
);

const GameFilter = ({ onFilterChange, selectedFilter }) => {
  const filters = ["All Games", "Survival", "Custom"];

  return (
    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors
            ${
              selectedFilter === filter
                ? "bg-brand-500 text-black"
                : "bg-slate-800/50 text-gray-400 hover:bg-slate-800"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const GameCard = ({ game }) => (
  <Link 
    to={game.href}
    className="group relative rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800/50 transition-all duration-300 hover:border-brand-500/50"
  >
    <div className="aspect-square relative flex items-center justify-center p-12">
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
          {game.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">Starting at ₹{game.price}/mo</p>
        <div className="flex items-center text-brand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View Server Options <ChevronRight className="ml-1 w-4 h-4" />
        </div>
      </div>
    </div>
  </Link>
);

const GamesPage = () => {
  const [filter, setFilter] = useState("All Games");

  const filteredGames = games.filter(
    (game) => filter === "All Games" || game.category === filter
  );

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>Games | Renderbyte</title>
      </Helmet>
      <GamesHero />
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
        <GameFilter selectedFilter={filter} onFilterChange={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
