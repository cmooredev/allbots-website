import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const BackgroundSection = ({ id, imgSrc, children }) => {
  const style = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Element name={id}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={style}
      >
        {children}
      </motion.div>
    </Element>
  );
};

export default BackgroundSection;
