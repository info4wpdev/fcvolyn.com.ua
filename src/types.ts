export type AgeGroup = 'Всі' | 'Ю19' | 'Ю17' | 'Ю16' | 'Ю15' | 'Ю14' | 'Ю12' | 'Ю11' | 'Ю10' | 'Ю9' | 'Ю8';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  highlightTag: string;
  description: string;
  image: string;
  video?: string;
  poster?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  dateBadge?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Матчі' | 'Клуб' | 'Набір' | 'Турніри';
  date: string;
  readTime: string;
  image: string;
  author: string;
  isFeatured?: boolean;
}

export interface Player {
  id: string;
  name: string;
  position: 'Воротар' | 'Захисник' | 'Півзахисник' | 'Нападник';
  number: number;
  birthYear: number;
  ageGroup: AgeGroup;
  photo?: string | null;
  games?: number;
  goals?: number;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  category: 'head' | 'senior' | 'youth' | 'specialist';
  photo: string;
  avatarBg?: string;
  license: string;
  experience: string;
  teams: string;
  ageGroups?: AgeGroup[];
  phone: string;
  email?: string;
  bio: string;
  achievements: string[];
  careerHighlights: string[];
  education: string;
  philosophy: string;
}

export interface TeamInfo {
  id: string;
  ageGroup: AgeGroup;
  name: string;
  team_name: string;
  coach: string;
  coachRole?: string;
  players_count: number;
  league: string;
  photo: string;
  trainingSchedule: string;
  standing: string;
  description: string;
  keyPlayers: Player[];
  stats: {
    games: number;
    wins: number;
    draws: number;
    losses: number;
    goalsScored: number;
    goalsConceded: number;
    cleanSheets: number;
  };
}

export interface Match {
  id: string;
  status: 'upcoming' | 'finished' | 'live';
  homeTeam: {
    name: string;
    isVolyn: boolean;
    logoText: string;
    logoColor?: string;
  };
  awayTeam: {
    name: string;
    isVolyn: boolean;
    logoText: string;
    logoColor?: string;
  };
  date: string; // YYYY-MM-DD
  dateFormatted: string; // e.g. "Субота, 5 вересня 2026"
  time: string; // e.g. "14:00"
  ageGroup: AgeGroup;
  competition: string;
  venue: string;
  venueType: 'Home' | 'Away';
  score?: string | null; // e.g. "3:1"
  streamAvailable?: boolean;
  ticketsAvailable?: boolean;
  ticketPrice?: string;
}

export interface TournamentRow {
  place: number;
  team: string;
  games: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor?: number;
  goalsAgainst?: number;
  points: number;
  isVolyn?: boolean;
  form?: ('W' | 'D' | 'L')[];
}

export interface TournamentScheduleItem {
  ageGroup: string; // e.g. "U-11"
  dates: string; // e.g. "08.05 - 10.05"
  birthYear: number; // e.g. 2015
  format: string; // e.g. "9x9"
  ballSize: number; // e.g. 4
  pitchSize: string; // e.g. "65x45"
}

export interface ClubBanner {
  id: string;
  type: 'tournament' | 'matchday' | 'results' | 'scouting';
  title: string;
  subtitle: string;
  badge: string;
  accentColor?: string;
  dateInfo?: string;
  locationInfo?: string;
  contactInfo?: {
    name: string;
    phone: string;
  };
  matches?: {
    tour?: string;
    homeTeam: string;
    awayTeam: string;
    category: string;
    time?: string;
    score?: string;
    isFinished?: boolean;
    homeWon?: boolean;
    draw?: boolean;
  }[];
  tournamentData?: {
    memorialName: string;
    tournamentTitle: string;
    year: string;
    schedule: TournamentScheduleItem[];
    registrationContact: string;
    partners: string[];
  };
  scoutingData?: {
    birthYears: string;
    date: string;
    time: string;
    location: string;
    description: string;
  };
  details: string;
}
