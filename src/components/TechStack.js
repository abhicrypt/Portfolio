import React from 'react';

import classes from './TechStack.module.scss';
import { motion } from 'framer-motion';

const TechStack = ({ techStack }) => {
  console.log(techStack);
  return (
    <div className={classes.skills}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className={classes.caption}>MY KNOWLEDGE OF</p>
        <h1 className={classes.title}>Technologies.</h1>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        initial="hidden"
        whileInView="visible"
        className={classes['tech-stack']}
      >
        {techStack.map((stack) => {
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -200 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              key={stack.tech}
              className={classes.tech}
            >
              <div>
                <img src={stack.icon} alt="tech" />
                <p>{stack.tech}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechStack;
