import Navbar from './Navbar';
import Hero from './Hero';

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  return (
    <header>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
    </header>
  );
};

export default Header;
