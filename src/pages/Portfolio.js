import React from 'react';
// import image
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
// import link
import {Link} from 'react-router-dom';
//import framer motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';

const Portfolio = () => {
  return (
  <motion.section
  initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y:0}}
    exit={{ opacity: 0, y:'100%' }}
    transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start gap-x-24 text-center
      lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <motion.div
        initial={{ opacity: 0, y: '-80%' }}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0, y:'-80%' }}
        transition={transition1}
        className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>Contrary to popular belief, Lorem Ipsum is not 
            simply random text. It has roots in a piece of 
            <b> classical Latin literature from 45 BC,</b> making it 
            over 2000 years old. Richard McClintock, a Latin 
             <br/>
             <br/>
            professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, 
            consectetur, from a Lorem Ipsum passage, and going 
            through the cites of the word in classical literature,
             discovered the undoubtable source
             </p>

             <Link to={'/contact'} className='btn mbb-[30px] mx-auto 
             lg:mx-0' > Hire me </Link>
        </motion.div>
        {/* image grid */}
        <div className='grid grid-cols-2 lg:gap-2'>
        {/* image */}
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image1} alt="" />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image2} alt="" />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image3} alt="" />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image4} alt="" />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image5} alt="" />
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px]
        lg:h-[220px] bg-accent overflow-hidden'>
          <img
            className='object-cover h-full lg:h-[220px] hover:scale-110
            transition-all duration-500'
            src={Image6} alt="" />
        </div>
            </div>

      </div>
    </div>
  </motion.section>
  );
};

export default Portfolio;
