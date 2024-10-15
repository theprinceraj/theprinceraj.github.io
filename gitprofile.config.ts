// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'theprinceraj', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'My Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['theprinceraj/Profile-Cards-API', 'theprinceraj/Markshify'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
       header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
       {
          title: 'Cruise Booking System',
          description:
            'A comprehensive full-stack web application using React and Node.js, capable of handling up to 100 bookings per month implemented with robust user authentication using session-based cookie management, ensuring a secure login process. It also has optimized backend integration for 20% faster real-time booking and profile management, resulting in a smoother user experience.',
          imageUrl:
            'https://i.ibb.co/b6ttqS1/image-2024-10-16-005231068.png',
          link: 'https://lenincruise.vercel.app',
        },
      {
          title: 'OCR-based Marksheet Scanner and CSV Converter Tool',
          description:
            'A web-based OCR application using Tesseract.js to automate the scanning and conversion of semester marksheets into CSV files, capable of processing 150+ mark sheets per day. It has custom utility functions to extract relevant data, ensuring accuracy in the converted CSV format. Its made to streamline the process of marksheet conversion, reducing manual workload by 50% and improving efficiency by 20%.',
          imageUrl:
            'https://i.ibb.co/P5dXkqp/image-2024-10-16-010359333.png',
          link: 'https://github.com/theprinceraj/Markshify',
        },
        {
          title: 'Profile Cards Generator',
          description:
            'A scalable API that dynamically generates personalized profile cards based on user inputs with optimized performance for input handling, reducing the load on backend server by 20%. Deployed on Vercel for efficient and reliable profile rendering, achieving a 99.95% uptime rate',
          imageUrl:
            'https://i.ibb.co/SX43LVw/image-2024-10-16-010742777.png',
          link: 'https://prince.is-a.dev/Profile-Cards-API/', 
        }
      ],
    },
  },
  seo: {
    title: 'Prince Raj',
    description: 'A person who likes to code.',
    imageURL: 'https://i.ibb.co/JcWbK36/Untitled-design.png',
  },
  social: {
    linkedin: 'theprinceraj',
    twitter: 'theprinceraj',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://prince.is-a.dev',
    phone: '',
    email: 'profile.princeraj@gmail.com',
  },
  resume: {
    fileUrl:
      'https://prince.is-a.dev/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'ReactJS',
    'Node.js',
    'Git',
    'CSS',
    'Vercel',
    'MongoDB',
    'Google Firebase',
    'Bootstrap',
    'Discord.js',
    'ElectronJS',
    'Tailwind CSS',
    'Selenium Webdriver',
    'C++',
    'C'
  ],
  experiences: [
    {
      company: 'Hacktoberfest',
      position: 'Open Source Contributions (Part-time)',
      from: 'October 2023',
      to: 'October 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'What is Generative AI?',
      body: 'Linkedin',
      year: 'July 2023',
      link: 'https://www.linkedin.com/learning/certificates/d8a630b23c5bea262084872e2f4d7ff19ed86efb65d03e7a2eb2703afb53d0cd',
    },
  ],
  educations: [
    {
      institution: 'Narula Institute of Technology',
      degree: 'Bachelor of Technology in Computer Science with specialization',
      from: '2023',
      to: '2027',
    },
  ],
  publications: [
    /*{
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 1, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by Prince Raj with ❤️`,

  enablePWA: true,
};

export default CONFIG;
