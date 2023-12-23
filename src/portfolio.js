/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Soham Singhal",
  title: "Hi all, I'm Soham",
  subTitle: emoji(
    "An AI enthusiast deeply exploring the field during my undergrad studies. Welcome to my portfolio! 🚀 Thriving on challenges, I see them as chances to expand my AI knowledge. With a pragmatic problem-solving approach, I aim for innovative solutions. 💡"
  ),
  resumeLink:
    "https://docs.google.com/document/d/12hwg8x81mWgq-Pe9M2TlaG4BKE8mZPvNNMKt6tIMzGs/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SohamSinghal",
  linkedin: "https://www.linkedin.com/in/soham-singhal-8a8b9a214/",
  gmail: "sohamsinghal32@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An AI Engineering Student Passionate About Diffusion Models and Excited to Dive into CV and IoT Domains",
  skills: [
    emoji(
      "⚡ Develops and applies ML models for understanding complex systems"
    ),
    emoji("⚡ Excited about exploring Computer Vision (CV) applications"),
    emoji(
      "⚡ Eager to delve into Internet of Things (IoT) projects"
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "JavaScrip",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Mobile App Dev",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "ML models",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mukesh Patel School of Technology Management & Engineering",
      logo: require("./assets/images/mpstme.jpg"),
      subHeader: "Bachelor of Technology in Artificial Intelligence",
      duration: "September 2020 - Present",
      cgpa: "3.4/4",
    },
    {
      schoolName: "Pace Junior Science College",
      logo: require("./assets/images/Pace.png"),
      subHeader: "High School",
      duration: "September 2018 - May 2020",
      cgpa: "83%",
    },
    {
    schoolName: "Gundecha Education Academy",
    logo: require("./assets/images/school_logo.png"),
    subHeader: "Middle/High School",
    duration: "April 2006 - June 2018",
    cgpa: "92%",
  },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CV",
      progressPercentage: "75%"
    },
    {
      Stack: "NLP",
      progressPercentage: "75%"
    },
    {
      Stack: "Arduino Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++ programming", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Iot and CV intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/sparks.png"),
      date: "February 2021 - March 2021",
      desc: "At the Sparks Foundation, I worked as an IoT and Computer Vision intern from February 2022 to March 2022. During my internship, I was assigned various tasks related to Computer Vision (CV) and Artificial Intelligence (AI) that needed to be accomplished. The first task involved utilizing machine learning (ML) techniques to identify the set of colors present in a given image. Another task required the detection of faces in an image and the development of a deep learning (DL) model capable of determining whether or not a face in the image was wearing a mask.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IET Botson 4.0",
      subtitle:
        "Built a bluetooth RC car using Arduino Uno.",
      image: require("./assets/images/iet.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KOxb_LEX-hKTEULtBHkjfzEUkM72Veth/view?usp=share_link"
        },
      ]
    },
    {
      title: "IET Hack - N - Code 4.0",
      subtitle:
        "Developed a website showcasing climate change and how to curb it",
      image: require("./assets/images/hackncode.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/17-_JVad3lnuvkjYU0ABsqkJVwa1hIXHa/view"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/standard-deviation-formula/",
      title: "Standard Deviation Formula",
      description:
      "Standard deviation gauges data dispersion around the mean, revealing value deviation and overall dataset spread."
    },
    {
      url: "https://www.geeksforgeeks.org/process-capability-cp-formula/",
      title: "Process Capability Cp Formula",
      description:
        "Process Capability is the statistical measure of a process's consistent production of parts meeting specified requirements."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sohamsinghal32@gmail.com",
  display:true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
