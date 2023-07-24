"use client"
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import Skill from "./Skill";
import Link from "next/link";


const Aboutme=() => {
  return (
    <motion.section
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className=" flex md:flex-row flex-col items-center md:min-h-screen  mt-32 md:mt-20 justify-between mx-auto w-full"
    
    >
        {/*resim alanı*/}
     <div className="md:w-1/4 w-full  bg-slate-100 rounded-md">
      <Image 
      className="rounded-md"
      src={`/coderman.jpg`}
      width={800}
      height={800}
      alt="coding"
      />
     </div>

        {/*icerik alanı*/}
     <div className="md:w-3/4 w-full flex md:flex-row flex-col p-3   rounded-lg">
        <div className="flex flex-col   w-full md:w-1/2">
          <div className="mb-4 p-3 bg-slate-100 rounded-md">
            <div>
            <h1 className="text-3xl font-bold" >About Me</h1>
            </div>
           <div>
           <span className="text-base font-light">What am I doing?</span>
            <span role="img" aria-label="sheep" className="text-2xl">🤔</span>
           </div>
          </div>
          <div className="flex bg-slate-100 rounded-lg p-8  text-lg flex-col ">
            <p>
                
Hello , I am Ahmet. First of all, welcome to my portfolio. I am an active student in the Computer Engineering undergraduate program at Selçuk University. Due to my strong interest in web development, I can describe myself as a software engineer proficient in web technologies.
            </p>
            <br/>
            <p>
            As a person who is open to technological advancements and constantly seeks self-improvement, I am delighted to share my projects in the field of web development, which I am passionate about, with you.
            </p>
        </div>
        <div className=" mt-4 mb-2 p-3 bg-slate-100 rounded-md">
            <div className="w-full flex flex-row items-center justify-center">
            <Link
                  href={'https://github.com/ahmetkfi'}
                  target="_blank"
                  >
                    <Image src={`/github.svg`} width={40} height={40} alt="github"/>
                  </Link>
                  <Link
                  href={'https://www.linkedin.com/in/muhammet-ahmet-ko%C3%A7yi%C4%9Fit-5b9028161/'}
                  target="_blank"
                  >
                    <Image src={`/linkedin.svg`} width={40} height={40} alt="github"/>
                  </Link>
                  <Link
                  href={`mailto:ahmetkcygt58@gmail.com`}
                 
                  >
                    <Image src={`/envelope.svg`} width={40} height={40} alt="github"/>
                  </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  md:ml-3 md:w-1/2 w-full mt-2">
            <div className="w-full flex flex-col p-6  bg-slate-100 rounded-lg">
                <div className="w-full flex items-center justify-center flex-col">
                    <h1 className="text-xl font-bold">Skills</h1>
                    <div>
                        <span className="text-base font-light">My technical level</span>
                    </div>
                </div>
                <Skill
                skillname="javascript"
                skillrate={65}
                />
                <Skill
                skillname="node.js"
                skillrate={52}
                />
                <Skill
                skillname="next.js"
                skillrate={26}
                />
                <Skill
                skillname="c#"
                skillrate={82}
                />
                <Skill
                skillname="sql"
                skillrate={56}
                />
                
                
                
            </div>
            
        </div>
      

     </div>
    </motion.section>
  );
};

export default Aboutme;
