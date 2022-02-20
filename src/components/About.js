import { IoIosArrowDropright } from 'react-icons/io';

const About = () => (
  <section className="about">
    <div>
      <h2 id="about">About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ea eiusmod.
      </p>
      <a href="sdf.com" rel="noopener noreferrer" className="centered-btn">
        Get my CV
        <IoIosArrowDropright className="arrow-right" />
      </a>
    </div>
    <div className="about-lists">
      <ul className="languages">
        <h3>Languages</h3>
        <li>JavaScript (ES6)</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Ruby</li>
      </ul>
      <ul className="frameworks">
        <h3>Frameworks</h3>
        <li>React</li>
        <li>Ruby on Rails</li>
        <li>Bootstrap</li>
        <li>RSpec</li>
        <li>Jest</li>
      </ul>
      <ul className="skills">
        <h3>Skills</h3>
        <li>Pair Programming</li>
        <li>Remote Collaboration</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Terminal</li>
      </ul>
    </div>
  </section>
);

export default About;
