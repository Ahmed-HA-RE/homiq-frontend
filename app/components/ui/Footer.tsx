import { Link } from 'react-router';

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className='w-full bg-gray-800 text-foreground py-6 mt-auto h-fit '>
      <div className='max-w-6xl mx-auto flex flex-wrap justify-center gap-8'>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className='relative group text-lg transition-colors duration-300 text-white hover:text-cyan-500'
          >
            {link.name}
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full'></span>
          </Link>
        ))}
      </div>
      <p className='text-center text-white text-sm  mt-4'>
        © 2025 Homiq. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
