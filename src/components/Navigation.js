import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import Navbar from './Navbar';

const Navigation = () => {
  const isMediumScreen = () => {
    if (window.innerWidth < 769) {
      return false;
    }
    return true;
  };

  const [visibility, setVisibility] = useState(isMediumScreen);

  const handleToggle = () => {
    if (!isMediumScreen() || visibility) {
      setVisibility(!visibility);
    }
  };

  return (
    <>
      <Navbar
        visibility={visibility}
        toggleMenu={handleToggle}
      />
      <IoMenuSharp className={`burger ${visibility ? 'invisible' : ''}`} onClick={handleToggle} />
    </>
  );
};

export default Navigation;
