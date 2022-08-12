import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Michael Vu's Portfolio",
  lang: 'en',
  description: 'Welcome to my website', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Vu',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I graduated from San Jose State University in 2017 and became an accountant in the Silicon Valley. In 2019, my fiancée and I relocated to South Florida so that she could attend medical school. Although I excelled in accounting and finance, I decided to pursue a different career following the move across the country.",
  paragraphTwo: "I completed Thinkful's Software Engineer bootcamp, and I am now seeking a new role as a Full-Stack Developer. My goal is to continue growing as a developer while staying current with the latest trends and technologies. I want to work for a passionate team that gets excited about their work and is not afraid to push boundaries.",
  paragraphThree: "Tools I use: HTML5, CSS3, JavaScript, jQuery, React, Gatsby.js, Styled Components, Git, Node.js, Express, and PostgreSQL.",
  resume: 'https://drive.google.com/file/d/1g-xWum8p3dzEchIsTVMUpRkyuTg1Nnm0/view?usp=sharing', // if no resume, the button will not show up
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
  {
    id: nanoid(),
    img: 'lyrically.png',
    title: 'Lyrically',
    info: 'This is a lyric search application that simultaneously plays a youtube video of the song selected using two third-party APIs to communicate with each other. During the nationwide 2020 COVID lockdown, a friend of mine suffered from severe depression. I created this app for her to interact with, and it has since improved her personality tremendously.',
    info2: 'Skills used: JavaScript, jQuery, HTML, and CSS',
    url: 'https://michaeltnvu.github.io/lyrically/',
    repo: 'https://github.com/michaeltnvu/lyrically', // if no repo, the button will not show up
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
      url: 'http://linkedin.com/in/michaeltnvu',
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
