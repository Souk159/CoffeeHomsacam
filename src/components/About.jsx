import React from 'react'
import Bg from '../assets/Bg.png'
import Lottie from 'lottie-react';
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'; 

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};

const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <motion.h1 
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1.5, delay:0.5}}
      className='text-amber-900 text-5xl text-center'>ກ່ຽວກັບຮ້ານ</motion.h1>
      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>
        {/* image section */}
        <motion.div
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1.5, delay:0.5}}
        >
            <Lottie animationData={coffee} className='md:w-[600px]'/>
        </motion.div>
        {/* text section */}
        <div className='space-y-4 px-4 md:px-0'>
            <motion.h1 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.5}}
            className='text-2xl text-amber-900'>ຮ້ານ ກາເຟ ຮົ່ມສາແຄມ ເປີດທຸກໆມື້ ຕັ້ງແຕ່ ວັນຈັນ ຫາ ວັນອາທິດເລີຍ</motion.h1>
            <motion.p 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.6}}
            >ສະບາຍດີ ລູກຄ້າທີ່ໜ້າຮັກທຸກທ່ານ ຮ້ານ ກາເຟຮົ່ມສາແຄມ ຕັ້ງຢູ່ທີ່ບ້ານ ຄຳຮຸ່ງ ເມືອງ ໄຊທານີ ແຂວງນະຄອນຫຼວງວຽງຈັນ ຍິນດີທີ່ໄດ້ໃຫ້ບໍລິການ ກັບລູກຄ້າທຸກທ່ານ ຂອບໃຈທີ່ມາ ອຸດໜູນທາງຮ້ານເຮົາເດີ້</motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
