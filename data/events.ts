// data/events.ts

export interface Event {
  title: string;
  date: string; // ISO format better
  location: string;
  link: string;
}

export const events: Event[] = [
  {
    title: 'Zomi Nam Ni - KUM 76 CIN',
    date: '2024-05-17T13:00:00', // Feb 17, 2024 at 1 PM
    location: '12003 NE Shaver St, Portland, OR 97220 (Parkrose High School)',
    link: '#',
  },
  {
    title: 'Zomi Harvest Festival',
    date: '2025-04-15T12:00:00', // Oct 15, 2023 (past event)
    location: 'Gresham Main Park, OR',
    link: '#',
  },
];
