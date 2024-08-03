import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn(",", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Skilled and Driven Front-End Developer with a Passion for Innovation
I am a highly motivated Front-End Developer specializing in developing innovative web applications. My skill set includes proficiency in both Front-End Development and Front-End Frameworks, such as ReactJs. Additionally, I have a background in Agile and Scrum, giving me a comprehensive understanding of the entire software development life cycle. With a solid foundation in programming languages, frameworks, and databases, I excel at turning complex requirements into efficient and user-friendly solutions. Currently, I am also expanding my expertise by gaining knowledge and experience in backend development using Node.js and Express, aiming to become a more versatile developer.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-between">
        {services.map((service, index) => {
         return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About,'about');
