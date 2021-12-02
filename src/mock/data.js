import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Trinh | Student', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'My passion for programming can be traced back to middle school, where I was first exposed to it. Whether it be learning a new programming language or using Java to make Minecraft mods, I always knew programming would be a future career for me. In the present, I am currently an honors university student majoring in Computer Science at the University of Connecticut, seeking to enter the industry as a software engineer after graduation.',
  paragraphTwo: 'Outside of academics, I\'m commited to being a lifetime learner through reading books, travelling, and improving my language skills for countries that I want to visit.',
  paragraphThree: 'Enjoy looking through the rest of my website, and feel free to contact me if you want to talk!',
  resume: 'static/Website_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'burrows.jpg',
    title: 'Burrows Delta Study',
    info: 'June 2020 - August 2020',
    info2: 'Conducted initial research and experiments involving Authorship Attribution. Worked on modifying feature selection of the Burrows Delta algorithm to see effects on classification performanceacross multiple media types (Tweets, Emails, Articles). Developed and wrote pipeline to test and run experiments efficiently',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatbot.jpg',
    title: 'Question Chat Bot',
    info: 'September 2019 - October 2019',
    info2: 'Used BaBi dataset, released by Facebook, to train a neural network model that could answer a yes/no question, based on a story the user provided. Utilized Keras to create a function that vectorized sentences, so that they can be read by the model.',
    url: '',
    repo: 'https://github.com/andyttrinh/Chat-Bot', // if no repo, the button will not show up
  },
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hello.andytrinh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andyttrinh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andyttrinh/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

export const TimeLineData = [
  {
    id: 1,
    title: 'Entered College',
    company: 'University of Connecticut',
    location: "Storrs, Connecticut",
    description: "Entered the University of Connecticut as a Computer Science Major, minoring in Mathematics",
    buttonText: "View Frontend Projects",
    date: "August 2019 - present",
    icon: "school"
  },
  {
    id: 2,
    title: 'Web Development Specialist',
    company: 'University of Connecticut',
    location: "Storrs, Connecticut",
    description: "Designed, wrote, tested, and implemented web applications for UConn Avery Point’s campus website. Participated in staff committee meetings to discuss the design plan for current or new web pages.",
    buttonText: "View Frontend Projects",
    date: "January 2020 - May 2020",
    icon: "work"
  },
  {
    id: 3,
    title: 'Research Intern',
    company: 'Sonalysts Human-Autonomy Interaction Laboratory',
    location: "Waterford, Connecticut",
    description: "Led two end-to-end experiments (initial research, experimental design, code implementation, data collection, analysis, and report writing) to explore the effects of feature selection on classification performance of the Burrows Delta algorithm, for Authorship Attribution (AA) across multiple media types.",
    buttonText: "View Frontend Projects",
    date: "June 2020 - August 2020",
    icon: "work"
  },
  {
    id: 4,
    title: 'Software Engineer Intern',
    company: 'Sonalysts Human-Autonomy Interaction Laboratory',
    location: "Waterford, Connecticut",
    description: "Worked alongside senior software engineers to build multiple web applications involving the usage of React, NodeJS, and mySQL. Wrote javascript code to build the front end and backend of multiple company projects, and built a user interface that dynamically renders data from backend to front end.",
    buttonText: "View Frontend Projects",
    date: "June 2021 - August 2021",
    icon: "work"
  },
  {
    id: 5,
    title: 'Undergraduate Research Assistant',
    company: 'University of Connecticut',
    location: "Storrs, Connecticut",
    description: "Currently performing GPU and Machine Learning research with Dr. Caiwen Ding of the Department of Computer Science.Developing algorithms in C++ to optimize the node allocation for tasks ran on the Titan supercomputer of Oak Ridge Leadership Computing Facility.",
    buttonText: "View Frontend Projects",
    date: "August 2021 - present",
    icon: "work"
  }
];
