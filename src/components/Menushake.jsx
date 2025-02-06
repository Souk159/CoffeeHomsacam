import React from "react";
import Img1 from "../assets/masalate1.png";
import Img2 from "../assets/shakegreen.png";
import Img3 from "../assets/shake1.png";
import Img4 from "../assets/shake2.png";
import Img5 from "../assets/shake3.png";
import Img6 from "../assets/shake4.png";
import Img7 from "../assets/shake5.png";
import Img8 from "../assets/shake6.png";
import Img9 from "../assets/shake7.png";
import Img10 from "../assets/shake8.png";
import Img18 from "../assets/shakecaramel2.png";

import { motion } from "framer-motion";

const menushakeData = [
  {
    id: 1,
    img: Img1,
    name: "Matcha Latte",
    price: "42.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 2,
    img: Img2,
    name: "Matcha ",
    price: "55.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 3,
    img: Img3,
    name: "Oreo",
    price: "55.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 4,
    img: Img4,
    name: "Strawberry yogurt",
    price: "55.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 5,
    img: Img5,
    name: "Milk",
    price: "55.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 6,
    img: Img6,
    name: "Straberry Matcah Latte",
    price: "40.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 7,
    img: Img7,
    name: "Black Pink",
    price: "40.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 8,
    img: Img8,
    name: "Coco Lava",
    price: "40.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 9,
    img: Img9,
    name: "Cocomint",
    price: "40.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 10,
    img: Img10,
    name: "Coco Matcha",
    price: "69.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
  {
    id: 18,
    img: Img18,
    name: "Caramel macchiato",
    price: "42.000 kip",
    iceprice: "32.000 kip",
    icestatus: "Ice",
    description: "Shake",
  },
];

const Menushake = () => {
  return (
    <div id="menusmoothie" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl font-bold  text-amber-900"
          >
            ເມນູ ປັ່ນ
          </motion.h1>
        </div>
        {/* menu card section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center"
        >
          {menushakeData.map((menu) => (
            <div className="rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[122px]">
                <img
                  src={menu.img}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{menu.name}</h1>
                <div className="mt-5 px-6 items-center">
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {menu.description}
                  </p>
                  <p className="text-lg font-semibold">{menu.price}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menushake;
