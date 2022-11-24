import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Rightbar from './components/Rightbar'
import Link from 'next/link'

const About = () => {
  const buttonStyle = 'lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-purple-500 border rounded-[10px] hover:border-white border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-60'
  return (
    <div id='About' className='sm:pt-[6rem] pt:5 rounded-b-[5rem]'>
      <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
      <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
      <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
        <h1 className='sm:text-[4rem] text-[2rem] font-semibold title-font   xl:text-start ' data-aos="fade-right">About Me</h1>
        <hr className=' sm:w-3/4 w-2/5 border-2  xl:inline' data-aos="fade-left" />
      </div>
      <div className=' flex '  >
        <div className='hidden xl:inline pl-5 '><Rightbar></Rightbar></div>





        <div className=" body-font">
          <div className="container flex justify-between py-12 xl:flex-row flex-col items-center ">

            <div className="mb-10 md:mb-0 md:ml-20 xl:w-1/3">
              <div className="   sm:my-8">

               <img src="/images/about.png" alt="About" />



              </div>
             

            </div>
            <div className="lg:flex-grow xl:w-1/2 px-5 lg:px-10 flex flex-col md:items-start md:text-left items-center text-center py-16 ">
              <h1 className="title-font sm:text-3xl text-xl mb-4 font-semibold ">I love to listen music with doing code from scratch, and enjoy bringing ideas to life in the browser.
              </h1>
              <p className="mb-8 leading-relaxed sm:text-[1.25rem] text-gray-600">A passionate Frontend Although MERN Stack Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with Modern JavaScript / Reactjs / Nextjs and some other cool libraries and frameworks..</p>
              <p className='mb-8'>⚡Coding is like maths,the only way to learn it is practice. You can`t memorize it.⚡</p>

              <Link href={'/More_about'}> <button className={buttonStyle}>View More</button></Link>

            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default About