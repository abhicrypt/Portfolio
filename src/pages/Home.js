import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import DevTree from '../components/DevTree';
import TechStack from '../components/TechStack';

import { skills } from '../assets/SKILLS';
import { PROJECTS } from '../assets/PROJECTS';
import Projects from '../components/Projects';

function MainPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <DevTree />
      <TechStack techStack={skills} />
      <Projects projects={PROJECTS} />
    </>
  );
}

export default MainPage;
