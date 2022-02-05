import { IoIosArrowDropright } from 'react-icons/io';

const About = () => (
  <section className="about">
    <div>
      <h2>About Me</h2>
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
    <div className="experience">
      <ul className="languages">
        <h3>Languages</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <ul className="frameworks">
        <h3>Frameworks</h3>
        <li>React</li>
        <li>Ruby on Rails</li>
        <li>Bootstrap</li>
      </ul>
      <ul className="skills">
        <h3>Skills</h3>
        <li>GitHub</li>
        <li>Pair Programming</li>
        <li>Teamwork</li>
      </ul>
    </div>
  </section>
);

export default About;
