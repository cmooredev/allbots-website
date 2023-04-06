import React, { useState } from 'react';
import Head from 'next/head';
import BackgroundSection from '../components/BackgroundSection';
import Navbar from '../components/Navbar.js';


// Add setFormSubmitted as an argument
const handleSubmit = async (e, setFormSubmitted) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      alert(result.message);
      e.target.reset();
      setFormSubmitted(true);
    } else {
      alert('There was an error submitting the form.');
    }
  } catch (error) {
    alert('There was an error submitting the form.');
  }
};

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  return (
    <div>
      <Head>
        <title>discord bots</title>
        <meta name="description" content="Hire us to build a Discord bot for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <Navbar />
    <BackgroundSection id="section1" imgSrc="/1.png">
      <div className="section-content">
        <h1>allbots</h1>
        <p>Unleash the Ultimate Discord Experience with Custom Bots Tailored to You!</p>
      </div>
    </BackgroundSection>


    <BackgroundSection id="section2" imgSrc="/4.png">
      <div className="section-content">
        <h2 className="bsection">Our Spectacular Services</h2>
        <div className="services-grid">
          <div className="service">
            <h3>Exquisite Custom Bots</h3>
            <p>
              Empower your digital presence with our state-of-the-art custom bots, meticulously crafted to fit your vision. Experience a new realm of possibilities with cutting-edge features, interactive user engagement, and seamless automation, all tailored to elevate your server to new heights.
            </p>
          </div>
          <div className="service">
            <h3>Premium Advanced Features</h3>
            <p>
              Supercharge your Discord server with our arsenal of advanced features. Gain full control with robust moderation tools, automate user onboarding with dynamic auto-roles, and enrich interactions with custom commands. Our unparalleled solutions are designed to propel your server into a league of its own.
            </p>
          </div>
          <div className="service">
            <h3>Seamless API Integrations</h3>
            <p>
              Unlock limitless potential with our seamless API integrations. Enhance your server with real-time data from popular platforms, receive instant notifications, and create immersive experiences. Our expertise in API integrations brings a world of information to your fingertips, transforming your server into a hub of connectivity.
            </p>
          </div>
        </div>
      </div>
    </BackgroundSection>


    <BackgroundSection id="section3" imgSrc="/3.png">
  <div className="section-content">
    <h2>Why Choose Us</h2>
    <div className="reasons-list">
      <div className="reason">
        <i className="icon-expertise"></i>
        <h3>Expertise</h3>
        <p>
          Our team of expert developers has a wealth of experience crafting
          custom bots that are specifically designed to meet the unique
          requirements of each client. Our proficiency ensures high-quality
          results every time.
        </p>
      </div>
      <div className="reason">
        <i className="icon-customization"></i>
        <h3>Customization</h3>
        <p>
          We offer a wide range of customizable features that empower you to
          create a bot that aligns perfectly with your server's needs. Whether
          it's automation, moderation, or user engagement, we provide solutions
          tailored to your goals.
        </p>
      </div>
      <div className="reason">
        <i className="icon-support"></i>
        <h3>Support</h3>
        <p>
          We are committed to providing outstanding customer support. Our team
          is readily available to assist you with any questions or issues that
          may arise, ensuring that your custom bot continues to function
          optimally and adapt to the growing needs of your server.
        </p>
      </div>
    </div>
  </div>
</BackgroundSection>



        <BackgroundSection id="section4" imgSrc="/2.png">
        <div className="section-content bsection">
  <h2>Popular Discord Bot Ideas</h2>
  <div className="bot-ideas bsection">
    <div className="bot-idea">
      <h3>Game Coordinator</h3>
      <p>Organize gaming sessions, tournaments, and events with ease.</p>
    </div>
    <div className="bot-idea">
      <h3>Music Master</h3>
      <p>Bring the party to your server with a fully featured music bot.</p>
    </div>
    <div className="bot-idea">
      <h3>Role Manager</h3>
      <p>Automate role assignments and server access for members.</p>
    </div>
    <div className="bot-idea">
      <h3>Giveaway Guru</h3>
      <p>Create, manage, and announce giveaways to engage your community.</p>
    </div>
    <div className="bot-idea">
      <h3>Trivia Champ</h3>
      <p>Challenge your community with fun and engaging trivia questions.</p>
    </div>
    <div className="bot-idea">
      <h3>Moderation Pro</h3>
      <p>Keep your server clean and organized with advanced moderation tools.</p>
    </div>
  </div>
</div>

</BackgroundSection>
        <BackgroundSection id="section5" imgSrc="/5.png">
          <div id="contact-section" className="section-content ">
            <h2>Contact Us</h2>
            {formSubmitted ? (
              <div>
                <p>We will contact you shortly!</p>
              </div>
            ) : (
              <div>
                <p>Share your bot ideas and requirements, and let's build something amazing together!</p>
                <form className="contact-form" onSubmit={(e) => handleSubmit(e, setFormSubmitted)}>
                  <label htmlFor="email">Your Email:</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  {/* Other fields */}
                  <label htmlFor="botIdea">Bot Idea</label>
                  <textarea id="botIdea" name="botIdea" placeholder="Describe your bot idea..." />

                  <label htmlFor="hosting">Hosting</label>
                  <select id="hosting" name="hosting">
                    <option value="none">No hosting required</option>
                    <option value="basic">Basic hosting plan</option>
                    <option value="advanced">Advanced hosting plan</option>
                  </select>

                  <label htmlFor="additionalInfo">Additional Information</label>
                  <textarea id="additionalInfo" name="additionalInfo" placeholder="Any other important details?" />

                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
        </BackgroundSection>
      </main>
    </div>
  );
}