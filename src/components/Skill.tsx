"use client"
import React from 'react'
import {motion} from 'framer-motion'
type SkillProps={
  skillname:string,
  skillrate:number
}
const Skill = ({skillname,skillrate}:SkillProps) => {
  return (
    <div className='w-full flex flex-col justify-between mt-2 '>
        <span className='font-bold'>{skillname}</span>
        <div className='w-full flex border-2 mt-2 p-3 bg-white h-7 rounded-xl items-center'>
            <motion.div className={`
            relative top-0 z-0 left-0 rounded-lg ${ColorForRate(skillrate)} h-3 bottom-0 
            `}
            initial={'width:0'}
            animate={'width:100%'}
            transition={{ duration: 0.2 }}
            style={{
              width:`${skillrate}%`
            }}
            >
            </motion.div>
        </div>
    </div>
  )
}

export default Skill

function ColorForRate(skillrate:number):string{
  switch(true){
    case skillrate>0 && skillrate<=25 : 
      return 'bg-red-500';
    break;
    case skillrate>=26 && skillrate<=50 : 
      return 'bg-orange-500';
    break;
    case skillrate>=51 : 
      return 'bg-green-500';
    break;
    default :
    return '';
    break;
  }
}
