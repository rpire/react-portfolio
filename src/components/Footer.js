import { IoIosArrowDropright } from 'react-icons/io';
import {
  BsGithub, BsTwitter, BsLinkedin,
} from 'react-icons/bs';
import { FaMedium, FaAngellist } from 'react-icons/fa';
import FooterLinkList from './FooterLinkList';

const Footer = () => (
  <footer>
    <a href="sdf.com" rel="noopener noreferrer">
      Get my Resume
      <IoIosArrowDropright className="arrow-right" />
    </a>
    <FooterLinkList>
      <BsGithub key="github" link="https://github.com/rpire" />
      <BsTwitter key="twitter" />
      <BsLinkedin key="linkedin" link="https://www.linkedin.com/in/ruben-d-pire/" />
      <FaMedium key="Medium" />
      <FaAngellist key="Angellist" />
    </FooterLinkList>
  </footer>
);

export default Footer;
