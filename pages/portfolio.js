import React from 'react';
import dynamic from 'next/dynamic';
import BackgroundSection from '../components/BackgroundSection';
import Navbar from '../components/Navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define dynamic import components for each icon
const MusicIcon = dynamic(() => import('@fortawesome/free-solid-svg-icons/faMusic').then(module => ({ default: () => <FontAwesomeIcon icon={module.faMusic} className="portfolio-icon" /> })), { ssr: false });
const UsersIcon = dynamic(() => import('@fortawesome/free-solid-svg-icons/faUsers').then(module => ({ default: () => <FontAwesomeIcon icon={module.faUsers} className="portfolio-icon" /> })), { ssr: false });
const PlugIcon = dynamic(() => import('@fortawesome/free-solid-svg-icons/faPlug').then(module => ({ default: () => <FontAwesomeIcon icon={module.faPlug} className="portfolio-icon" /> })), { ssr: false });
const ListIcon = dynamic(() => import('@fortawesome/free-solid-svg-icons/faList').then(module => ({ default: () => <FontAwesomeIcon icon={module.faList} className="portfolio-icon" /> })), { ssr: false });


const Portfolio = () => {
    return (
      <>
        <Navbar />
        <BackgroundSection 
          id="section-portfolio"
          imgSrc="/3.png"
          mobilePosition="left top"
          className="fixed-background" // Apply the fixed-background class
        >
        <div className="section-content">
          <h2>Our Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
            <h3>
            <MusicIcon/> Music Role Bot
                </h3>
                <p>
                    Our Music Role Bot enhances user engagement by assigning roles based on music genre preferences. Users provide their favorite song, and the bot dynamically assigns a role based on the genre. Additionally, the bot provides a feature to list all users with a specific genre role, fostering interaction and connection between users with similar music tastes.
                </p>
                <p>
  <strong>Key Features:</strong>
                </p>
                    <ul>
                    <UsersIcon/>
                    <li>
                        <div className="portfolio-feature">
                        <span>
                            Dynamic Role Assignment: Automatically assign roles to users based on their music genre preferences. Our bot analyzes the genre of a user's favorite song and assigns a matching role, allowing users to connect with others who share similar music tastes.
                        </span>
                        </div>
                    </li>
                    <PlugIcon/>
                    <li>
                        <div className="portfolio-feature">
                        <span>
                            User Listing by Genre: Discover and connect with members who have the same music interests. The bot provides a command to display a list of all users with a specific genre role, encouraging interaction and discussions around common music preferences.
                        </span>
                        </div>
                    </li>
                    <ListIcon/>
                    <li>
                        <div className="portfolio-feature">
                        <span>
                            Integration with Spotify and YouTube APIs: Enhance your server's music experience with real-time data from popular music platforms. Our bot integrates with Spotify and YouTube to fetch song information, genre details, and more, providing an immersive music experience for your community.
                        </span>
                        </div>
                    </li>
                    </ul>
              <a className="github-link" href="https://github.com/cmooredev/discord-music-mood" target="_blank" rel="noopener noreferrer">View on GitHub
              </a>
            </div>
            {/* Other portfolio items can be added here */}
          </div>
        </div>
      </BackgroundSection>
    </>
  );
};

export default Portfolio;
