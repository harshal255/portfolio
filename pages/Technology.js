import React from 'react'
import { Tooltip } from '@nextui-org/react';
import Tilt from 'react-tilt'

const Technology = () => {
    return (
        <div className='m-5' id='Technology'>

            {/* <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 ' /> */}
            <section className="">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h1 className="sm:text-3xl text-2xl title-font text-center mb-10  font-semibold">Technology Used</h1>
                    <div className="grid grid-cols-6 gap-3 text-gray-500 sm:gap-10 dark:text-gray-400">
                        <Tilt className="flex justify-center items-center rounded-[50%] overflow-clip">
                            <Tooltip content={"Next.js"}>
                                <img src="images/skills/next.png" alt="Next js" />
                            </Tooltip>

                        </Tilt>
                        <Tilt className="flex justify-center items-center rounded-[50%] overflow-clip">
                            <Tooltip content={"Sanity.io"}>
                                <img src="images/skills/sanity.png" alt="Next js" />
                            </Tooltip>

                        </Tilt>

                        <Tilt className="flex justify-center items-center rounded-[50%] overflow-clip">
                            <Tooltip content={"Tailwind CSS"}>
                                <img src="images/skills/tailwind.png" alt="Tailwind" />
                            </Tooltip>
                        </Tilt>

                        <Tilt className="flex justify-center items-center ">
                            <Tooltip content={"Next UI"}>
                                <img src="images/skills/nextui.png" alt="Next js" />
                            </Tooltip>
                        </Tilt>
                        <Tilt className="flex justify-center items-center rounded-[50%] overflow-clip">
                            <Tooltip content={"React.js"}>
                                <img src="images/skills/react.png" alt="Next js" />
                            </Tooltip>
                        </Tilt>
                        <Tilt className="flex justify-center items-center rounded-[50%] overflow-clip">
                            <Tooltip content={"Node.js"}>
                                <img src="images/skills/node.png" alt="Next js" />
                            </Tooltip>
                        </Tilt>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technology