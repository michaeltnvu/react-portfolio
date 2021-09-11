import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Tien Vu's Portfolio", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tien Vu',
  subtitle: 'I am a Full-Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "After graduation from San Jose State University in 2017, I became an accountant in Silicon Valley. My partner and I relocated to South Florida in 2019 so that she could attend medical school. Along with the move, I decided to pursue something different for myself. Although I excelled in accounting, my passion has always been in tech. I completed Thinkful's coding bootcamp, and I am now seeking a new role as a Full-Stack Engineer.",
  paragraphTwo: 'Tech Stack: JavaScript, HTML5, CSS3, jQuery, React.js, Node.js, Express, PostgreSQL, Python (in progress)',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1AriRipcL6zxMwUjDRtIL9sEryuE1uKadrOANFQwv2d0/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'restaurant.png',
    title: 'Restaurant Reservation',
    info: "This application was developed as part of my capstone project for Thinkful's Flex Software Engineering course. It is a reservation and table manager to be used by a restaurant that allows tracking of reservations as well as seating tables. This application was made to meet the specifications laid out by user stories provided by Thinkful.",
    info2: 'Skills used: JavaScript, React, React Router, Bootstrap/CSS, Node.js, Knex, PostgreSQL',
    url: 'https://restaurant-reservation-app-five.vercel.app/dashboard',
    repo: 'https://github.com/michaeltnvu/restaurant-reservation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pomodoro.png',
    title: 'Pomodoro',
    info: 'Timer application developed with adjustable work and break periods to help users study efficiently.',
    info2: 'Skills used: JavaScript, React, React Hooks, Bootstrap',
    url: 'https://pomodoro-pi-six.vercel.app/',
    repo: 'https://github.com/michaeltnvu/project_pomodoro_timer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flashcard.png',
    title: 'Flashcard-o-matic',
    info: 'This is a front-end application of a flashcard studying app. Using a provided back-end API, the user can list, display, edit, and create study cards and/or deck of cards.',
    info2: 'Skills used: JavaScript, React, React Router, React Hooks, and Bootstrap',
    url: 'https://project-flashcard-app.vercel.app/',
    repo: 'https://github.com/michaeltnvu/project_flashcard_app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vu.michaeltien@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://linkedin.com/in/vutien',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://github.com/michaeltnvu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
