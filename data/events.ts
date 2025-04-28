// data/events.ts

export interface Event {
  title: string;
  date: string;
  location: string;
  link: string;
}

export const events: Event[] = [
  {
    title: 'Zomi Nam Ni - KUM 76 CIN',
    date: 'Feb 17, 2024 | 1:00 PM - 5:00 PM',
    location: '12003 NE Shaver St, Portland, OR 97220 (Parkrose High School)',
    link: '#', // You can update this if you have a Facebook or flyer link
  },
  // You can add more events like this easily later!
];
