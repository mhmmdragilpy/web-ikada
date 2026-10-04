import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Manifesto from './components/Manifesto';
import CrewSection from './components/CrewSection';
import WorkflowSection from './components/WorkflowSection';
import PillarsSection from './components/PillarsSection';
import IdeaBankSection from './components/IdeaBankSection';
import RulesAndSchedule from './components/RulesAndSchedule';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-ikada-light-bg dark:bg-ikada-bg text-zinc-900 dark:text-zinc-100 flex flex-col font-body selection:bg-ikada-volt selection:text-black transition-colors duration-200">
        <Header />
        <Navigation />
        <main className="flex-1">
          <Manifesto />
          <CrewSection />
          <WorkflowSection />
          <PillarsSection />
          <IdeaBankSection />
          <RulesAndSchedule />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
