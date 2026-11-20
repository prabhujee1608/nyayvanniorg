import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DocumentAnalyzer from './components/DocumentAnalyzer';
import ScamDetector from './components/ScamDetector';
import IpcBnsConverter from './components/IpcBnsConverter';
import LegalDrafter from './components/LegalDrafter';
import VersionDiff from './components/VersionDiff';
import LegalChat from './components/LegalChat';
import RightsAndHelplines from './components/RightsAndHelplines';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang} 
      />

      {/* Hero Section */}
      <Hero 
        onStartAnalyze={() => setActiveTab('analyzer')}
        onStartScamCheck={() => setActiveTab('scam')}
        onStartBns={() => setActiveTab('converter')}
        onStartChat={() => setActiveTab('chat')}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'analyzer' && <DocumentAnalyzer />}
        {activeTab === 'scam' && <ScamDetector />}
        {activeTab === 'converter' && <IpcBnsConverter />}
        {activeTab === 'drafter' && <LegalDrafter />}
        {activeTab === 'diff' && <VersionDiff />}
        {activeTab === 'chat' && <LegalChat />}
        {activeTab === 'rights' && <RightsAndHelplines />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
