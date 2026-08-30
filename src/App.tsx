/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutClubSection } from './components/AboutClubSection';
import { NewsSection } from './components/NewsSection';
import { TeamsSection } from './components/TeamsSection';
import { MatchesSection } from './components/MatchesSection';
import { CoachesSection } from './components/CoachesSection';
import { MediaAndPartnersSection } from './components/MediaAndPartnersSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import {
  ScoutingModal,
  MatchModal,
  ArticleModal,
  TeamModal,
  CoachModal,
} from './components/Modals';
import { NewsItem, TeamInfo, Match, Coach } from './types';
import { MATCHES_DATA } from './data/clubData';

export default function App() {
  // Modal states
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialInitialAge, setTrialInitialAge] = useState<string | undefined>(undefined);
  const [selectedTeamAge, setSelectedTeamAge] = useState<string | undefined>(undefined);

  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamInfo | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketMatchTarget, setTicketMatchTarget] = useState<Match | null>(null);

  // Handlers
  const handleOpenTrial = (ageGroup?: string) => {
    setTrialInitialAge(ageGroup);
    setTrialModalOpen(true);
  };

  const handleOpenTickets = (match?: Match) => {
    if (match) {
      setTicketMatchTarget(match);
    } else {
      // Default to next upcoming match
      setTicketMatchTarget(MATCHES_DATA[0]);
    }
    setTicketModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-zinc-900 selection:bg-[#A31E24] selection:text-white flex flex-col font-sans">
      {/* 1. Header with Transparent Sticky Header matching KIDI reference */}
      <Header
        onOpenTrialModal={(age) => handleOpenTrial(age)}
        onOpenTicketsModal={() => handleOpenTickets()}
        onSelectTeamAge={(age) => setSelectedTeamAge(age)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Full-Width Hero Slider */}
        <HeroSlider
          onOpenTrialModal={() => handleOpenTrial()}
          onOpenTicketsModal={() => handleOpenTickets()}
        />

        {/* 3. About Club Section (#about, #history, #infrastructure, #achievements) */}
        <AboutClubSection
          onOpenTrialModal={() => handleOpenTrial()}
        />

        {/* 4. Teams & Academy Section (#teams, U-19 to U-8) */}
        <TeamsSection
          onSelectTeam={(team) => setSelectedTeam(team)}
          onOpenTrialModal={(age) => handleOpenTrial(age)}
          externalSelectedAge={selectedTeamAge}
        />

        {/* 5. News Section (#news) */}
        <NewsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 6. Matches Section (#matches) */}
        <MatchesSection
          onSelectMatch={(match) => setSelectedMatch(match)}
          onOpenTicketsModal={(match) => handleOpenTickets(match)}
        />

        {/* 7. Coaches & Staff Section (#coaches) */}
        <CoachesSection
          onSelectCoach={(coach) => setSelectedCoach(coach)}
          onOpenTrialModal={(age) => handleOpenTrial(age)}
        />

        {/* 8. Media & Partners Section (#media, #partners) */}
        <MediaAndPartnersSection />

        {/* 9. CTA Section (Signature Volyn Crimson Banner «Червоно-білі назавжди!») */}
        <CTASection
          onOpenTrialModal={() => handleOpenTrial()}
        />
      </main>

      {/* 10. Footer (#contacts) */}
      <Footer />

      {/* Interactive Modals with Light & Crisp Red-and-White Design */}
      <ScoutingModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialAgeGroup={trialInitialAge}
      />

      <MatchModal
        match={selectedMatch || ticketMatchTarget}
        isOpen={Boolean(selectedMatch) || ticketModalOpen}
        onClose={() => {
          setSelectedMatch(null);
          setTicketModalOpen(false);
          setTicketMatchTarget(null);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
      />

      <TeamModal
        team={selectedTeam}
        isOpen={Boolean(selectedTeam)}
        onClose={() => setSelectedTeam(null)}
        onOpenTrialModal={(age) => handleOpenTrial(age)}
      />

      <CoachModal
        coach={selectedCoach}
        isOpen={Boolean(selectedCoach)}
        onClose={() => setSelectedCoach(null)}
        onOpenTrialModal={(age) => handleOpenTrial(age)}
      />
    </div>
  );
}
