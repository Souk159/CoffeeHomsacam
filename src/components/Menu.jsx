import React from 'react'
import Img1 from '../assets/blackcoffee.png'
import Img2 from '../assets/Caramel.png'
import Img3 from '../assets/lemontea1.png'
import Img6 from '../assets/mocha4.png'
import Img5 from '../assets/greentea.png'
import Img4 from '../assets/thaitea2.png'
import Img7 from '../assets/Coco2.png'
import Img8 from '../assets/Hochi.png'
import Img9 from '../assets/espresso.png'
import { motion } from 'framer-motion'

const MenuData = [
    {
      id: 1,
      img: Img1,
      name: "Black Coffee",
      price:"29.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 2,
      img: Img2,
      name: "Caramel macchiato",
      price:"29.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 3,
      img: Img3,
      name: "Lemon Tea",
      price:"25.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 4,
      img: Img6,
      name: "Mocha",
      price:"29.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 5,
      img: Img5,
      name: "Green Tea",
      price:"33.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 6,
      img: Img4,
      name: "Thai Tea",
      price:"33.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 7,
      img: Img7,
      name: "Coco",
      price:"33.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 8,
      img: Img8,
      name: "Hochi Tea",
      price:"35.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
    {
      id: 9,
      img: Img9,
      name: "Espresso",
      price:"29.000 kip",
      iceprice:"32.000 kip",
      icestatus:"Ice",
      description:
        "Hot",
    },
  ];

const Menu = () => {
  return (
    <div id='menu' className='py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading section */}
        <div className='text-center mb-20'>
            <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-4xl font-bold font-cursive text-amber-900'>Best Coffee for You</motion.h1>
        </div>
        {/* menu card section */}
        <motion.div 
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.5, delay:0.5}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {MenuData.map((menu)=> (
                <div className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                    <div className='h-[122px]'>
                        <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                    </div>
                    <div className='p-4 text-center'>
                        <div className='w-full'></div>
                        <h1 className='text-xl font-bold'>{menu.name}</h1>
                        
                        <div className='flex justify-between mt-5 px-6 items-center'>
                            <p className='text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2'>{menu.description}</p>
                            <p className='text-lg font-semibold'>{menu.price}</p>
                            
                            
                        </div>
                        
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
