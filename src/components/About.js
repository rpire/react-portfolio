import { IoIosArrowDropright } from 'react-icons/io';
import AboutLists from './AboutLists';

const About = () => (
  <section className="about">
    <div>
      <h2 id="about">About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ea eiusmod.
      </p>
      <a
        href="./resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="body-btn"
      >
        Get my CV
        <IoIosArrowDropright className="arrow-right" />
      </a>
    </div>
    <AboutLists />
  </section>
);

export default About;
