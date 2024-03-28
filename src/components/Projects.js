import React from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import classes from './Projects.module.scss';

const Projects2 = ({ projects }) => {
  const skillColors = ['#ec008c', '#255ad4', '#0d0d0d', '#11998e', '##11998e'];
  const mainProjects = projects.slice(0, 12);
  console.log(mainProjects);
  return (
    <div className={classes.projects} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.info}
      >
        <p className={classes.caption}>MY WORK</p>
        <h1 className={classes.title}>Projects.</h1>
        <p className={classes.description}>
          The goal of the following projects is to showcase my skills and
          experience.Each example is briefly described, and with links to code
          repositories. projects were created some time ago and I am in the
          process of creating something more advanced and refined. Stay tuned!
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="hidden"
        whileInView="visible"
        className={classes['projects-section']}
      >
        {mainProjects.map((project) => {
          console.log(project.techStack);
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              key={project.id}
            >
              <section className={classes.head}>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.source}
                >
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
                <img src={project.img} alt="project" />
              </section>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              {project.disclaimer && (
                <p className={classes.disclaimer}>{project.disclaimer}</p>
              )}
              {project.techStack && (
                <ul>
                  {project.techStack.map((stack) => {
                    const randIndex = Math.floor(
                      Math.random() * skillColors.length
                    );
                    const style = {
                      color: skillColors[randIndex],
                    };
                    return (
                      <li style={style} key={project.techStack.indexOf(stack)}>
                        # {stack}
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects2;
