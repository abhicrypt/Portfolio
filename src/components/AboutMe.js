import React from 'react';
import Chart from './UI/Chart';
import waveImg from '../assets/wave2.png';

import classes from './AboutMe.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';

const AboutMe = () => {
  const { scrollY } = useScroll();
  const aboutScale = useTransform(scrollY, [1500, 1700], [1, 0.8]);

  return (
    <>
      <motion.div
        style={{ scale: aboutScale }}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${classes.about}`}
        id="aboutMe"
      >
        <div>
          <p className={classes.caption}>INTRODUCTION</p>
          <h1>Overview.</h1>
          <p className={classes.reference}>
            I am a proficient software developer with a strong background in
            JavaScript and TypeScript, specializing in framework such as React.
            Having successfully completed coding bootcamps, I gained a solid
            foundation in  Node.js, Express, and MongoDB, further
            enriching my capabilities. I'm a quick learner and collaborate
            closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems.
          </p>
        </div>
        <Chart />
      </motion.div>
      <img src={waveImg} alt="wave" className={classes.wave} />
    </>
  );
};

export default AboutMe;
