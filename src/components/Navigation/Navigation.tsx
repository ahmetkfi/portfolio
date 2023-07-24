"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/components/Navigation/style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'


const Navigation = () => {

  return (
    <>
    <motion.div className={`fixed justify-between text-[#111] flex-row top-0 w-full z-50 shadow-md bg-white  p-7 mb-8`} 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    >
       <div className='flex flex-row justify-between'>
       <div className='flex flex-row justify-between items-center text-2xl font-bold  '>
            <Image src={`/me.jpg`} alt='me' width={70} height={70} className='rounded-full'/>
            <div className='flex flex-col ml-2'>
            <a href='/'>kocyigit</a>
            <span className='text-sm font-light'>software developer</span>
            </div>
        </div>
        <div className='flex flex-row justify-between  items-center md:items-end'>
          <Link href={`https://github.com/ahmetkfi`} target='_blank'>
            <Image src={`/github.svg`} width={30} height={30} alt='github'/>
          </Link>
          <Link href={`https://www.linkedin.com/in/muhammet-ahmet-ko%C3%A7yi%C4%9Fit-5b9028161/`} target='_blank'>
            <Image src={`/linkedin.svg`} width={30} height={30} alt='linkedin'/>
          </Link>
        </div>
       </div>
    </motion.div>
    </>
  )
}
export default Navigation
function OpenMenu(){
  const menu= document.getElementById('mobilemenu');
  const iconSrc= document.getElementById('btnicon');
  const isopen=menu?.classList.contains('left-0');
  if(!isopen){
    
    iconSrc?.removeAttribute('src');
    iconSrc?.setAttribute('src','/close.svg');
    menu?.classList.replace('-left-full','left-0');
  }else{
    iconSrc?.removeAttribute('src');
    iconSrc?.setAttribute('src','/menu.svg');
    menu?.classList.replace('left-0','-left-full');
  }

}