'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 pointer-events-none" />

    <div
      className={`${styles.innerWidth} mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center gap-4`}
    >
      {/* Title */}
      <h2 className="font-extrabold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[30.24px] text-white text-center sm:text-left flex-1">
        Coaching Classes
      </h2>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919109919775"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full sm:w-auto h-fit py-3 px-4 sm:py-4 sm:px-6 bg-[#25D366] rounded-[32px] gap-[8px] sm:gap-[12px] hover:bg-[#20b358] transition duration-200"
      >
        <img
          src="/whatsapp.png"
          alt="whatsapp"
          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
        />
        <span className="font-normal text-[14px] sm:text-[16px] text-white">
          Contact Now
        </span>
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
