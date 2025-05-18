import React from "react";
import bhagwati from "../../assets/bhagwati.jpg";
import dailylife from "../../assets/dailylife.jpg";
import dharahara from "../../assets/dharahara.JPG";
import fire from "../../assets/fire.jpg";
import fire2 from "../../assets/fire2.JPG";
import landscape from "../../assets/landscape.jpg";
import monk from "../../assets/monk.jpg";
import protest from "../../assets/protest.jpg";
import protest2 from "../../assets/protest2.jpg";
import urban from "../../assets/urban.jpg";
import { motion } from "motion/react";
const About = () => {
  return (
    <div  className="w-full h-screen  flex bg-gray-700 overflow-hidden">
      <div className="w-1/2 bg-black text-white flex justify-between items-center">
        <div className="px-50">
          <h1 className="text-5xl font-bold mb-10">About</h1>
          <p>
            Multimedia journalist and documentary maker, renowned for capturing
            the cultural, political, religious, and everyday life of Nepal.
            <br /> <br /> My work has been featured in prominent national and
            international media outlets, as well as in various publications.
            Driven by a strong sense of storytelling, I use my lens to document
            Nepals diverse landscapes and the complexities of its society.
          </p>
        </div>
      </div>

      <div className="w-1/2 overflow-hidden bg-red-500">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-wrap"
        >
          {[
            bhagwati,
            dailylife,
            dharahara,
            fire,
            landscape,
            protest,
            monk,
            urban,
            fire2,
            protest2,
            bhagwati,
            dailylife,
            dharahara,
            fire,
            landscape,
            protest,
            monk,
            urban,
            fire2,
            protest2,
          ].map((src, index) => (
            <img key={index} className="w-1/2" src={src} alt={`img-${index}`} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
