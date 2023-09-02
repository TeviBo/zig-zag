import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import HeroBg from '../../../assets/images/zz-hero.jpg';

const Hero = () => (
  <section className="hero">
  {/* Background container */}
  <div
    className="hero-background"
   />

  {/* Content container */}
  <div className="hero-content">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-4xl font-bold ">
        <span className='text-red-500'>Z</span>
        <span className='text-blue-600'>ig</span>{" "}
        <span className='text-red-500'>Z</span>
        <span className='text-blue-600'>ag</span> - Tienda de Alimentos</h1>
        <p className="text-lg mt-4">Desde 1995 ofreciendo la mejor atencion.</p>
    </motion.div>
  </div>
</section>
  );

export default Hero;

<section className="hero">
  {/* Background container */}
  <div
    className="hero-background absolute top-0 left-0 w-full h-full opacity-70"
    style={{ backgroundImage: `url(${HeroBg})`, backgroundRepeat: 'no-repeat' }}
   />

  {/* Content container */}
  <div className="hero-content">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-4xl font-bold ">
        <span className='text-red-500'>Z</span>
        <span className='text-blue-600'>ig</span>{" "}
        <span className='text-red-500'>Z</span>
        <span className='text-blue-600'>ag</span> - Tienda de Alimentos</h1>
        <p className="text-lg mt-4">Desde 1995 ofreciendo la mejor atencion.</p>
    </motion.div>
  </div>
</section>