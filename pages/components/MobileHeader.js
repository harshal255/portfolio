import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link';


import { RiMenu5Line, RiCloseFill } from 'react-icons/ri';

const MobileHeader = () => {
    return (
        <Popover className=" visible sm:invisible bg-[#020917] z-50 fixed w-full top-0 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6  ">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">

                        <Link href={"/"}> <h1 className='font-semibold text-2xl md:text-4xl hover:text-purple-600 hover:cursor-pointer'>Harshal Kahar</h1></Link>


                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset ">


                            <RiMenu5Line className='animate-waving-hand'></RiMenu5Line>
                        </Popover.Button>
                    </div>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 flip-up"
                enterFrom="opacity-0 scale-0"
                enterTo="opacity-100 scale-100"
                leave="duration-100 flip-up"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Group focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden   bg-black h-[95.5vh] ">
                    <div className="rounded-lg shadow-lg  ">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>

                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className=" rounded-md  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none  ">
                                        <RiCloseFill></RiCloseFill>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">

                            <div>
                                <Link href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-500">
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link href="/About" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] bg-gradient-to-r from-cyan-500 to-blue-500">
                                    About
                                </Link>
                            </div>
                           
                            <div>
                                <Link href="/Skills" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] delay-400 bg-gradient-to-r from-cyan-500 to-violet-500 hover:bg-indigo-700">
                                    Skills
                                </Link>
                            </div>
                            <div>
                                <Link href="/Experience" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] delay-800 bg-gradient-to-r from-cyan-500 to-violet-500 hover:bg-indigo-700">
                                    Experience
                                </Link>
                            </div>
                            <div>
                                <Link href="/More_Projects" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] delay-800 bg-gradient-to-r from-cyan-500 to-violet-500 hover:bg-indigo-700">
                                    Projects
                                </Link>
                            </div>
                            <div>
                                <Link href="/Contact" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white animate-[wiggle_1s_linear_infinite] delay-100 bg-gradient-to-r from-cyan-500 to-violet-500 hover:bg-indigo-700">
                                    Contact
                                </Link>
                            </div>


                        </div>
                    </div>
                </Popover.Group>
            </Transition>
        </Popover>
    )
}

export default MobileHeader