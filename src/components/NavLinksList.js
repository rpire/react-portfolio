import propTypes from 'prop-types';

const NavLinkList = (props) => {
  const navLinks = [
    {
      id: 'hello',
      path: '#hello',
      text: 'Hello',
    },
    {
      id: 'portfolio',
      path: '#portfolio',
      text: 'Projects',
    },
    {
      id: 'about',
      path: '#about',
      text: 'About',
    },
    {
      id: 'contact',
      path: '#contact',
      text: 'Contact',
    },
  ];

  const { toggleMenu } = props;

  return (
    <ul>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.path}
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="nav-link"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavLinkList.propTypes = {
  toggleMenu: propTypes.func.isRequired,
};

export default NavLinkList;
