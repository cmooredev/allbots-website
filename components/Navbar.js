import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    // Get the element with the id of 'section1'
    const section1Element = document.getElementById('section1');

    // Check if the element exists before accessing its properties
    if (section1Element) {
      // Get the height of section1 (first page)
      const section1Height = section1Element.offsetHeight;
      // Determine whether to show or hide the navbar based on scroll position
      setShowNavbar(window.pageYOffset < section1Height);
    }
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render the navbar if showNavbar is true
  return showNavbar ? (
    <div className="navbar">
      <div className="navbar-container">
      <a href="#">allbots</a>
        <a href="#contact-section">Contact Us</a>
      </div>
    </div>
  ) : null;
};

export default Navbar;
