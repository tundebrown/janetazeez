// import images
import Hero_person from "./assets/images/Hero/person.png";

import administration from "./assets/images/Skills/administration.png";
import communication from "./assets/images/Skills/communication.png";
import content_marketing from "./assets/images/Skills/content_marketing.png";
import coordination from "./assets/images/Skills/coordination.png";
import project_management from "./assets/images/Skills/project_managment.png";
import social_media_management from "./assets/images/Skills/social_media_managment.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Stellar Virtual Assistant",
    firstName: "JANET",
    LastName: "AZEEZ",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        // count: "8+",
        // text: "Years of Experinse in Web development",
      },
      {
        // count: "20+",
        // text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Administration",
        para: "",
        logo: administration,
      },
      {
        name: "Project Management",
        para: "",
        logo: project_management,
      },
      {
        name: "Social Media Mangement",
        para: "",
        logo: social_media_management,
      },
      {
        name: "Content Marketing",
        para: "",
        logo: content_marketing,
      },
      {
        name: "Coordination/Organization",
        para: "",
        logo: coordination,
      },
      {
        name: "Communication",
        para: "",
        logo: communication,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Administrative Support",
        para: "which involves managing calendars, scheduling meetings, organizing email inboxes, preparing documents, and generating reports to streamline daily operations.",
        logo: services_logo1,
      },
      {
        title: "Customer Relationship Management",
        para: "where I provide professional email and chat support, handle inquiries and complaints, manage CRM tools like HubSpot or Salesforce, and assist with customer onboarding to enhance client satisfaction",
        logo: services_logo2,
      },
      {
        title: "Content and Social Media Coordination",
        para: "creating and scheduling engaging social media posts, drafting and formatting blog content, and building newsletters or email campaigns to maintain a consistent and professional online presence.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Asana",
        image: project1,
      },
      {
        title: "Trello",
        image: project2,
      },
      {
        title: "Jira",
        image: project3,
      },
      // {
      //   title: "Google Workspace",
      //   image: project3,
      // },
      // {
      //   title: "Email Management",
      //   image: project3,
      // },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Janet has been a game-changer for my business. She handles my scheduling, emails, and reports seamlessly, allowing me to focus on strategy. Her attention to detail and efficiency are unmatched!”",
        // img: avatar1,
        name: "Tunde Adewale, CEO, VisionTech Solutions",
      },
      {
        review:
          "“Janet has been a reliable virtual assistant, always proactive and efficient in managing our daily tasks. From handling complex projects to managing CRM tools, she has proven to be an indispensable asset.”",
        // img: avatar2,
        name: "Ifeoma Nwosu, Operations Manager, PrimeWave Logistics,"
      },
    ],
  },
  Hireme: {
    title: "About Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person,
    para: "I'm a certified virtual assistant with extensive experience in administrative tasks, email management, project coordination, google Workspace, and social media content creation. I'm committed to helping you achieve your business goals by managing time-consuming tasks, streamlining processes, and providing efficient administrative support. I ensure that your day-to-day operations run smoothly, saving you time and energy. I provide solutions that lead to greater productivity, better time management, and a smoother path to success. The goal is to empower business owners by taking the hassle out of daily operations,  allowing you to focus on what truly matters and growing your business.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "azeezjumaioyiza@gmail.com",
        icon: GrMail,
        link: "mailto:azeezjumaioyiza@gmail.com",
      },
      {
        text: "+234 706 198 8278",
        icon: MdCall,
        link: "https://wa.me/2347061988278",
      },
      {
        text: "Janet Azeez",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/janet-azeez/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
