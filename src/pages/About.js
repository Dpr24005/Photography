import React from 'react';
// import women image
import WomenImage from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
//import framer motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';


const About = () => {
  return(
  <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y:0}}
    exit={{ opacity: 0, y:'100%' }}
    transition={transition1}
    className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & image wrapper */}
      <div className='flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24
      text-center lg:text-left lg:pt-16'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <img src={WomenImage} alt=''/>
        </div>
        {/* text */}
        <motion.div
        initial={{ opacity: 0, y: '80%' }}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0, y:'80%' }}
        transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0
        lg-w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
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

             <Link to={'/portfolio'} className="btn" > View my work </Link>
        </motion.div>

      </div>
    </div>
  </motion.section>
  );
};

export default About;
