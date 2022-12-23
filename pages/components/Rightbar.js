import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { createClient } from "next-sanity";
import Tilt from 'react-tilt'

import Link from 'next/link';

const Rightbar = () => {



  const iconsyle = " hover:scale-125 transition-transform bg-purple-100 hover:text-purple-100 text-purple-700 hover:bg-purple-700  lg:text-4xl text-3xl rounded-full  border-gray-300 p-1"
  return (
    <div className='w-1/12 flex justify-center lg:mt-[18rem] sm:mt-[10rem] ml-3 z-20'>
      <div className='flex flex-col  my-5 text-2xl '>
        <Tilt className='lg:my-4 my-2 mx-auto  '>

          <Link href="https://github.com/harshal255" target='blank' className='' >
            <AiFillGithub className={iconsyle}></AiFillGithub>
          </Link>

        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>

          <Link href="https://www.instagram.com/undefined_harshal" target='blank' >
            <AiOutlineInstagram className={iconsyle}></AiOutlineInstagram>

          </Link>

        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>

          <Link href="https://www.linkedin.com/in/harshal-kahar-4115a321b" target='blank' >
            <AiFillLinkedin className={iconsyle}></AiFillLinkedin>

          </Link>

        </Tilt>

        <Tilt className='lg:my-4 my-2 mx-auto'>

          <Link href="https://twitter.com/harshalkahar389" target='blank' >
            <AiOutlineTwitter className={iconsyle}></AiOutlineTwitter>

          </Link>

        </Tilt>
      </div>
    </div>
  )
}

export default Rightbar

