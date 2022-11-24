import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { SiBuymeacoffee } from 'react-icons/si';
import Tilt from 'react-tilt'
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const Rightbar = () => {
  const iconsyle = " hover:scale-125 transition-transform  hover:bg-purple-600 bg-purple-100 hover:text-purple-100 text-purple-600  lg:text-4xl text-3xl rounded-full  border-gray-300 p-1"
  return (
    <div className='w-1/12 flex justify-center lg:mt-[18rem] sm:mt-[10rem] ml-3 z-20'>
      <div className='flex flex-col  my-5 text-2xl '>
        <Tilt className='lg:my-4 my-2 mx-auto  '>
          <Tooltip content={"harshal255"}>
            <Link href='https://github.com/harshal255' target='blank' className='' >
              <AiFillGithub className={iconsyle}></AiFillGithub>
            </Link>
          </Tooltip>
        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>
          <Tooltip content={"harshal_kahar_1230"}>
            <Link href='https://www.instagram.com/harshal_kahar1230/' target='blank' >
              <AiOutlineInstagram className={iconsyle}></AiOutlineInstagram>

            </Link>
          </Tooltip>
        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>
          <Tooltip content={"harshal-kahar-4115a321b"}>
            <Link href='https://www.linkedin.com/in/harshal-kahar-4115a321b' target='blank' >
              <AiFillLinkedin className={iconsyle}></AiFillLinkedin>

            </Link>
          </Tooltip>
        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>
          <Tooltip content={"harshalkahar"}>
            <Link href='https://www.buymeacoffee.com/harshalkahar' target='blank' >
              <SiBuymeacoffee className={iconsyle}></SiBuymeacoffee>

            </Link>
          </Tooltip>
        </Tilt>
        <Tilt className='lg:my-4 my-2 mx-auto'>
          <Tooltip content={"harshalkahar389"}>
            <Link href='https://twitter.com/harshalkahar389' target='blank' >
              <AiOutlineTwitter className={iconsyle}></AiOutlineTwitter>

            </Link>
          </Tooltip>
        </Tilt>
      </div>
    </div>
  )
}

export default Rightbar