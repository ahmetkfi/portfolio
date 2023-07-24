import Aboutme from '@/components/Aboutme'
import Portfoilio from '@/components/Portfoilio'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex w-full  flex-col '>
       <Aboutme/>
    <div className=" w-full flex flex-col p-8 items-center justify-center ">
      <div className="flex w-full flex-col text-center">
        <h1 className="font-bold text-5xl">Portfolio</h1>
        <span className="font-light text-base">My recent works 💻</span>
      </div>
    </div>
    <Portfoilio/>
    </div>
  )
}
