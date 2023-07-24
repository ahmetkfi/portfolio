"use client"
import React from "react";
import Work from "./Work";
import {motion} from 'framer-motion'
const Portfoilio = () => {
  return (
    <motion.section
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    id="portfolio"
    >

    <div className="max-w-[860px] mx-auto px-4 lg:px-0">
  <div>
    <div className="space-y-2 pt-6 pb-4 md:space-y-5">
      <h1
        className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Projects
      </h1>
    </div>
    <div className="container pb-12 pt-4">
      <div className="-m-4 flex flex-wrap">
        <Work
            projectName="Carla Zoe Beauty"
            projectImgUrl="/projects/carlazoe.png"
            projectUrl="https://www.carlazoebeautycenter.com"
            projectDescription="My first commercial project was built for a beauty center using NextJS, TailwindCSS, and MongoDB"
        />       
         <Work
            projectName="Weather App"
            projectImgUrl="/projects/weatherapp.png"
            projectUrl="https://github.com/ahmetkfi/weather_app"
            projectDescription="It is a project I created to improve myself. It was built using Node.js, Express.js, and TailwindCSS technologies. OpenWeatherMap API was used for weather information."
        />    
         <Work
            projectName="User Authentication System"
            projectImgUrl="/projects/ua.png"
            projectUrl="https://github.com/ahmetkfi/user_authentication_system"
            projectDescription="This project Node.js,Next.js,and JWT It was developed to improve my skills related to their technology and gain more experience."
        />        
      </div>
    </div>
  </div>
</div>

    </motion.section>
  );
};

export default Portfoilio;
