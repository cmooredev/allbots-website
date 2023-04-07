// BackgroundSection.js

const BackgroundSection = ({ children, imgSrc, id, mobilePosition = 'left top', className }) => {
  return (
    <div
      id={id}
      className={`background-section desktop-background-section mobile-background-section ${mobilePosition} ${className}`}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: mobilePosition,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        /* Remove overflowY: 'auto' */
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>{children}</div>
    </div>
  );
};

export default BackgroundSection;
