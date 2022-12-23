import React from 'react'

import Link from 'next/link';

const Header = () => {

    const listyle = "listyle m-1 md:m-3 hover:text-purple-600 flex flex-col font-semibold";


    return (
        <div className="fixed w-[100%] z-50 bg-[#020917] flex items-center justify-between px-[2rem] md:px-[5rem] py-[0.6rem] text-white h-[5rem] invisible sm:visible bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20  border-purple-100 border-b-2 ">



            <Link href='/'><div className='flex items-center gap-3 md:-ml-[2rem]'><img src="/logo.png" alt="H K" className='h-14 w-14'/>  <h1 className='font-semibold text-2xl md:text-3xl hover:cursor-pointer'> Harshal Kahar</h1></div></Link>





            <ul className='menu flex  justify-between  text-center ml-10 '>
                <li className={listyle}><Link href="/"> Home</Link></li>
                <li className={listyle}><a href="#About" > About</a></li>

                <li className={listyle}><a href="#Skills" > Skills</a></li>
                <li className={listyle}><a href="#Experience" >Experience</a></li>
                <li className={listyle}><a href="#Projects"> Projects</a></li>
                <li className={listyle}><a href="#blogs"> Blogs</a></li>

                <li className={listyle}><a href="#Contact"> Contact</a></li>



            </ul>





        </div>
    )
}

export default Header