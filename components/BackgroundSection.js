import React from 'react';

const BackgroundSection = ({ children, imgSrc, id, mobilePosition = 'left top' }) => {
  return (
    <div
      id={id}
      className={`background-section desktop-background-section mobile-background-section ${mobilePosition}`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: mobilePosition,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default BackgroundSection;
