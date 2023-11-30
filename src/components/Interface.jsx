import Lottie from 'lottie-react'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'typed.js';
import Construction from "../assets/Animation - 1695487090776.json"
const Section = (props) => {
    const { children } = props;
  
    return (
      <motion.section
        className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        {children}
      </motion.section>
    );
  };
const AboutSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const initializeTyped = () => {
      // Initialize Typed.js for the first typing animation
      const options1 = {
        strings: ["Hi, I&rsquo;m Aziz Kefi, welcome to my portfolio."],
        typeSpeed: 30, // Typing speed in milliseconds
        onComplete: () => {
          // Start the second typing animation after the first one ends
          const options2 = {
            strings: [
              "I&rsquo;m a FullStack Developer and I love creating appealing websites. Let&rsquo;s dive in my world.",
            ],
            typeSpeed: 30, // Typing speed in milliseconds
          };
          const typed2 = new Typed(".typing-animation2", options2);
        },
      };
      const typed1 = new Typed(".typing-animation1", options1);

      // Cleanup the Typed.js instances when component unmounts
      return () => {
        typed1.destroy();
      };
    };

    // Animate the entire UI (scale and opacity) and then initialize Typed.js
    controls.start({ scale: 1, opacity: 1, transition: { duration: 0.8 } }).then(initializeTyped);
  }, [controls]);

  return (
    <>
      <Section bgColor="bg-blue-200">
        <motion.div className="flex justify-between items-center sm:ml-8 w-full sm:w-1/2 bg-gray-200 p-2 rounded-t-lg">
          <p className="text-black font-bold">TERMINAL</p>
          <div className="flex space-x-2">
            <button className="w-4 h-4 bg-red-500 rounded-full"></button>
            <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
            <button className="w-4 h-4 bg-green-500 rounded-full"></button>
          </div>
        </motion.div>
        <motion.div className="flex flex-col w-full sm:w-1/2 sm:ml-8 rounded-b-xl bg-black p-8">
          <h1 className="font-bold text-4xl font-secondary text-green-500">
            SYS32 &gt; <span className="typing-animation1"></span>
          </h1>
          <h3 className="font-bold text-2xl font-secondary text-green-500 mt-8">
            <span className="typing-animation2"></span>
          </h3>
        </motion.div>
      </Section>
    </>
  );
};


export const Interface = () => {
    return <>
     
 <AboutSection/>

 <SkillsSection />
<Section>
<Lottie animationData={Construction} style={{ width:400,height:400 }} className='mt-72'/> 
<div className='bg-yellow-500 p-4  mb-8 font-secondary w-full'><h1 className='text-5xl  font-bold '>The Advertising Signs for our projects display are under construction , please wait for it.</h1></div>

</Section>
<ContactSection/>
    </>
}
const skills = [
    {
      title: "WebGL ",
      level: 70,
    },
    {
      title: "Frontend Development",
      level: 90,
    },
    {
      title: "Backend Development",
      level: 82,
    },
    {
      title: "Mobile App Development",
      level: 70,
    },
    {
      title: "Blender",
      level: 40,
    },
    {
      title: "Unity",
      level: 60,
    },
  ];
  const languages = [
    {
      title: "French",
      level: 90,
    },
    {
      title: "English",
      level:90,
    },
    {
      title: "Arab",
      level: 80,
    },
   
  ];
  
  const SkillsSection = () => {
    return (
      <Section >
        <motion.div whileInView={"visible"} className='ml-12'>
          <h2 className="text-5xl font-bold font-secondary">Skills</h2>
          <div className=" mt-8 space-y-4 font-secondary ">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-2xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full border-solid border-2 border-white bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full   bg-red-400 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-5xl font-bold mt-10 font-secondary">Languages</h2>
            <div className=" mt-8 space-y-4 font-secondary">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-2xl font-bold text-gray-800"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full border-solid border-2 border-white bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-red-400 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </motion.div>
      </Section>
    );
  };
 const ContactSection = () => {
  return (
    <Section >
       
      <div className=" w-1/4 ml-16 mt-8 ">
        <div className="iphone-header bg-black w-full h-8 rounded-t-xl shadow-2xl"></div>
        <div className="iphone-content p-8  bg-white  shadow-2xl border-8 border-black">
          <h2 className="text-5xl font-bold font-secondary text-black">Contact me</h2>
          <form>
            <label htmlFor="name" className="font-semibold font-secondary text-xl text-gray-900 block mb-1 mt-8">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full font-secondary text-lg rounded-md text-gray-900 border-2 shadow-md border-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="email" className="font-semibold font-secondary text-xl text-gray-900 block mb-1 mt-8">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full font-secondary text-lg rounded-md text-gray-900 border-2 shadow-md border-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label htmlFor="message" className="font-semibold font-secondary text-xl text-gray-900 block mb-1 mt-8">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block  font-secondary text-lg w-full rounded-md border-2 shadow-lg border-red-400 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <button className="bg-red-400 shadow-lg font-secondary text-xl text-white py-2 px-8 rounded-lg font-bold mt-8 mx-auto block">
              Submit
            </button>
          </form>
        </div>
        <div className=" bg-black w-full shadow-2xl flex justify-center py-2 rounded-b-xl h-16">
          <div className=" bg-gray-800 w-10 h-10 rounded-full"></div>
        </div>
      </div>
     
    </Section>
  );
};