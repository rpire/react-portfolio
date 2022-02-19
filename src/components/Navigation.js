import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import Navbar from './Navbar';

const Navigation = () => {
  const isOpen = () => {
    if (window.innerWidth < 769) {
      return false;
    }
    return true;
  };

  const [visibility, setVisibility] = useState(isOpen);

  const handleToggle = () => {
    setVisibility(!visibility || isOpen());
  };

  return (
    <>
      <Navbar
        visibility={visibility}
        toggleMenu={handleToggle}
        isOpen={isOpen}
      />
      <IoMenuSharp className={`burger ${visibility ? 'invisible' : ''}`} onClick={handleToggle} />
    </>
  );
};

export default Navigation;
