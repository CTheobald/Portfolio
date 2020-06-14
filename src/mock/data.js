import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Christine Theobald | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Christine Theobald',
  subtitle: 'I am the Developer you need.',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'Full Stack Developer',
  paragraphTwo: 'Building Interactive Applications',
  paragraphThree:
    'Skilled in Front End and Back End development.  Experience with Java, Javascript, React, Python, Django',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'robot.jpg',
    title: 'RoboFriends',
    info: 'React App built with Create-React-App',
    info2: 'Uses Search Tool to filter Robots by Name.',
    url: 'https://ctheobald.github.io/RoboFriends/',
    repo: 'https://github.com/CTheobald/RoboFriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'math.jpg',
    title: 'Math Flashcard App',
    info: 'Addition, Subtraction, Multiplication, and Division Flashcard web app.',
    info2: 'Built with Python and Django. Deployed with Heroku.',
    url: 'https://ctflashcardapp.herokuapp.com/',
    repo: 'https://github.com/CTheobald/django_flashcards', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chtheobald@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/christine-theobald-a63286b3/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/CTheobald',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
