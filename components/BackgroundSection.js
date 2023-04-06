import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const BackgroundSection = ({ id, imgSrc, children }) => {
    const style = {
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Prevent image repetition
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
          className="background-section-container" // Apply the class here
        >
          {children}
        </motion.div>
      </Element>
    );
  };
  

export default BackgroundSection;
