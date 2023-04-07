import React from 'react';

const BackgroundSection = ({ children, imgSrc, id, mobilePosition = 'left top' }) => {
  return (
    <div
      id={id}
      className={`background-section desktop-background-section mobile-background-section ${mobilePosition}`}
      style={{
        position: 'relative',
        height: '100%',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={imgSrc}
        alt=""
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: mobilePosition,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default BackgroundSection;
