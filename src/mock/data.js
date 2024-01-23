import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Michael Vu's Portfolio",
  lang: 'en',
  description: 'Welcome!', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Vu',
  subtitle: 'I am a Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a recent web development bootcamp graduate from Ironhack, acquiring the skills and knowledge to build robust and user-friendly applications specializing in the MERN stack, HTML, CSS, Bootstrap, and Tailwind CSS. I'm passionate about coding and problem-solving, and am driven by results and attention to detail. Eager to embark on a fulfilling journey in the world of web development and beyond!",
  paragraphTwo: "I'm equipped with the latest industry knowledge, and am proficient in building robust and scalable applications using MongoDB, Express.js, React.js, and Node.js. I'm committed to writing maintainable and efficient code for optimized application performance. I'm enthusiastic about contributing to and enjoy working collaboratively in cross-functional teams, contributing to a positive and innovative work environment. And I'm committed to continuous improvement and staying abreast of evolving industry trends.",
  paragraphThree: "Tech Stack: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Express.js, Node.js, MongoDB.",
  resume: 'https://docs.google.com/document/d/17tMe-WwcbsV9UMDKfORjcnGAnFPw1dVB/edit?usp=sharing&ouid=110589629632812440972&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Pathfindrr',
    info: "A captivating full-stack social media app tailored for travel enthusiasts. With user authentication, Pathfindr ensures a secure and feature-rich environment. Users can embark on their journeys, sign up, log in, and explore the world of travel.",
    info2: 'Stack used: JavaScript, React.js, Express.js, Node.js, MongoDB, Tailwind CSS',
    url: 'https://pathfindrr.netlify.app',
    repo: 'https://github.com/michaeltnvu/project3-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Task Trove',
    info: "Developed a high-performing Single Page Application (SPA) using React and Bootstrap, offering a user-friendly kanban board experience. Task Trove seamlessly integrates a mock backend,enabling comprehensive CRUD operations.",
    info2: 'Stack used: JavaScript, React.js, Bootstrap',
    url: 'https://task-trove.netlify.app/tasktrove',
    repo: 'https://github.com/michaeltnvu/tasktrove', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Ironhack Samurai',
    info: "An engaging browser-based game combining the power of HTML, CSS, and JavaScript with the principles of Object-Oriented Programming (OOP).",
    info2: 'Stack used: JavaScript, HTML, CSS',
    url: 'https://michaeltnvu.github.io/ironhack-samurai/',
    repo: 'https://github.com/michaeltnvu/ironhack-samurai', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pomodoro.png',
    title: 'Pomodoro',
    info: 'Timer application developed with adjustable work and break periods to help users study efficiently.',
    info2: 'Stack used: JavaScript, React, Bootstrap',
    url: 'https://pomodoro-pi-six.vercel.app/',
    repo: 'https://github.com/michaeltnvu/project_pomodoro_timer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flashcard.png',
    title: 'Flashcard-o-matic',
    info: 'This is a front-end application of a flashcard studying app. Using a provided back-end API, the user can list, display, edit, and create study cards and/or deck of cards.',
    info2: 'Stack used: JavaScript, React, Bootstrap',
    url: 'https://project-flashcard-app.vercel.app/',
    repo: 'https://github.com/michaeltnvu/project_flashcard_app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lyrically.png',
    title: 'Lyrically',
    info: 'This is a lyric search application that simultaneously plays a youtube video of the song selected using two third-party APIs to communicate with each other. A close friend suffered from severe depression. This app was created for her entertainment, and it has since improved her health tremendously.',
    info2: 'Skills used: JavaScript, jQuery, HTML, CSS',
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
