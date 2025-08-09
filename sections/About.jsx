'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Champs Corner" textStyles="text-center" />

    <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
>
  Welcome to <span className="font-extrabold text-white">Champs Corner</span>, 
  the most renowned coaching institute in Om City, proudly serving the community 
  of <span className="font-extrabold text-white">Champa, Chhattisgarh</span>. 
  Known for our excellence and trusted by hundreds of parents, we provide 
  top-quality tuition classes for students from Nursery to Class 6.  
  With highly experienced teachers, innovative teaching methods, and a proven 
  track record of success, we nurture not only academic skills but also 
  confidence and curiosity in every child.  
  At <span className="font-extrabold text-white">Champs Corner</span>, 
  education isn’t just about learning — it’s about shaping bright futures.  
  Join the ranks of our proud achievers and experience why we’re the 
  <span className="font-extrabold text-white"> #1 choice</span> for primary 
  education in the region.  
</motion.p>


      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
