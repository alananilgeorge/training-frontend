import { Video } from './video';
export interface Match {
  title: string;
  competition: string;
  matchviewUrl: string;
  competitionUrl: string;
  thumbnail: string;
  date: Date;
  videos: Video[];
}
