import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="fixed bg-white  top-0 right-0 left-0 flex z-30 flex-row justify-between py-4 px-4 ">
        <div>
          <Link to="/">
            {' '}
            <img src={logo} alt="logo" className='h-7 w-24' />
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Service</NavLink> */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }} // Bouncing effect
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <NavLink
              to="https://wa.me/2349064831310"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-800 text-white rounded-full font-bold shadow-lg"
            >
              Hire Us
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
