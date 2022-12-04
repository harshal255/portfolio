import React from 'react'

import Link from 'next/link';

const Header = () => {

    const listyle = "listyle m-4 hover:text-purple-600 flex flex-col font-semibold";

   
    return (
        <div className="fixed w-[100%] z-50 bg-[#020917] flex items-center justify-between px-[2rem] md:px-[5rem] py-[0.6rem] text-white h-[5rem] invisible sm:visible bg-transparent   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20  border-purple-100 border-b-2">



            <Link href='/'> <h1 className='font-semibold text-2xl lg:text-4xl hover:text-purple-600 hover:cursor-pointer'>Harshal Kahar</h1></Link>





            <ul className='menu flex  justify-between  text-center '>
                <li className={listyle}><Link href="/" > Home</Link></li>
                <li className={listyle}><Link href="/About" > About</Link></li>
               
                <li className={listyle}><Link href="/Skills" > Skills</Link></li>
                <li className={listyle}><Link href="/Experience" >Experience</Link></li>
                <li className={listyle}><Link href="/More_Projects" > Projects</Link></li>

                <li className={listyle}><Link href="/Contact" > Contact</Link></li>



            </ul>





        </div>
    )
}

export default Header