// data/events.ts

export interface Event {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  link: string;
  image?: string;
  template?: string;
}

export const events: Event[] = [
  // {
  //   title: 'Zomi Nam Ni - KUM 76 CIN',
  //   startDate: '2024-05-17T13:00:00', // Feb 17, 2024 at 1 PM
  //   location: '12003 NE Shaver St, Portland, OR 97220 (Parkrose High School)',
  //   link: '#',
  // },
  // {
  //   title: 'Zomi Harvest Festival',
  //   date: '2025-04-15T12:00:00', // Oct 15, 2023 (past event)
  //   location: 'Gresham Main Park, OR',
  //   link: '#',
  // },
  {
    title: 'Zomi Community Sports Day 2025',
    startDate: '2025-07-31T18:00:00',
    endDate: '2025-08-02T17:00:00',
    location: 'Parklane Park, SE 155th Ave & SE Main St, Portland, OR 97233',
    link: '/events/sports-day',
  },
  {
    title: 'Khuado Pawi 2025',
    startDate: '2025-10-11T16:00:00',
    endDate: '2025-10-11T21:00:00',
    location: 'MHCC Theatre, 26000 SE Stark St, Gresham, OR 97030',
    link: '/events/khuado-2025',
    image: '/images/events/khuado_25.jpg',
    template: 'festival',
  },
];
