import Link from 'next/link';
import React from 'react'



import { FiExternalLink, FiCode } from 'react-icons/fi'

import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


const Pro = ({ project }) => {

    const client = createClient({
        projectId: "puehhpql",
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client)






    return (
        <div id='Projects' className='sm:pt-[6rem] pt:5 rounded-b-[5rem]'>
            <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
            <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
            <div className="flex flex-col text-center w-full ">
                <h1 className="text-3xl font-medium title-font mb-4 ">All Projects✨✌</h1>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {project.map((item) => {

                            return (
                                <div className="p-4 md:w-1/3 sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black bg-black " key={item.title}>

                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <div>
                                            <img className="lg:h-64 md:h-36 w-full object-cover object-center hover:scale-110 duration-150" src={builder.image(item.imgUrl).width(1500).url()} alt={item.title} />
                                        </div>

                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project Name</h2>
                                            <h1 className="title-font text-lg text-white font-medium  mb-3">{item.title}</h1>
                                            <p className="leading-relaxed mb-3 h-[10rem] overflow-y-scroll">{item.description}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2" href={`${item.projectLink}`} target="_blank">Live Demo
                                                    <FiExternalLink className='mx-2'></FiExternalLink>

                                                </Link>
                                                <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2 " target="_blank" href={`${item.codeLink}`} >Get Code
                                                    <FiCode className='mx-2'></FiCode>



                                                </Link>
                                                {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    Year
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    {Projects.Year}
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>



            </section>
        </div>
    )
}

export default Pro

export async function getServerSideProps() {
    const client = createClient({
        projectId: "puehhpql",
        dataset: "production",
        useCdn: false
    });

    const Projectquery = `*[_type == "project"]`;
    const project = await client.fetch(Projectquery);




    return {
        props: {
            project

        }
    }
}
