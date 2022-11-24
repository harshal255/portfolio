
import { Link } from '@nextui-org/react';
import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  const iconsyle = "hover:animate-waving-hand  hover:scale-125 transition-transform  hover:bg-purple-600 bg-purple-100 hover:text-purple-100 text-purple-600  lg:text-4xl text-3xl rounded-full  border-gray-300 p-1 mx-1"
  return (
    <footer className=" body-font border-t-[1px] bg-black">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href='/' className="flex title-font font-semibold items-center md:justify-start justify-center ">

          <span className="ml-3 text-xl text-white hover:text-purple-600">Harshal Kahar</span>
        </Link>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©2022
          <span className=" ml-1" rel="noopener noreferrer" target="_blank">All rights reserved</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-5">
          <Link href='https://github.com/harshal255' target='blank' className="">
            <AiFillGithub className={iconsyle}></AiFillGithub>
          </Link>
          <Link href='https://www.instagram.com/harshal_kahar1230/' target='blank' className="ml-3 ">
            <AiOutlineInstagram className={iconsyle}></AiOutlineInstagram>
          </Link>
          <Link href='https://www.linkedin.com/in/harshal-kahar-4115a321b' target='blank' className="ml-3 ">
            <AiFillLinkedin className={iconsyle}></AiFillLinkedin>
          </Link>
          <Link href='https://twitter.com/harshalkahar389' target='blank' className="ml-3 ">
            <AiOutlineTwitter className={iconsyle}></AiOutlineTwitter>
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer