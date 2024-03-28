import React, { useEffect } from 'react';

import TagCloud from 'TagCloud';

import classes from './Chart.module.scss';

const Chart = () => {
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'React Router',
      'React Redux',
      'Git',
      'TypeScript',
      'Tailwind',
      'Firebase',
      'Bootstrap',
      'Framer-motion',
    ];

    const options = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className={classes.charts}>
      <span className="tagcloud"></span>
    </div>
  );
};

export default Chart;
