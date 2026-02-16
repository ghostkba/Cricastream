export enum ViewState {
  HOME = 'HOME',
  LIVE = 'LIVE',
  SCHEDULE = 'SCHEDULE',
  AI_CHAT = 'AI_CHAT'
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
  group: string;
  status: 'UPCOMING' | 'LIVE' | 'COMPLETED';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
}