"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { heroes } from "@/data/heroes";

export type Hero = (typeof heroes)[number];

interface AppContextType {
  heroes: Hero[];
  currentHero: Hero | null;
  setCurrentHeroById: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentHero, setCurrentHero] = useState<Hero | null>(null);

  const setCurrentHeroById = (id: string) => {
    const hero = heroes.find((h) => h.id === id) || null;
    setCurrentHero(hero);
  };

  return (
    <AppContext.Provider value={{ heroes, currentHero, setCurrentHeroById }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
