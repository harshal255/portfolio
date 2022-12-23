import React from 'react'

import { createClient } from "next-sanity";
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import Tilt from 'react-tilt'
import Head from 'next/head';

const MBlogs = ({ blogs }) => {

    const client = createClient({
        projectId: "puehhpql",
        dataset: "production",
        useCdn: false
    });
    // console.log(blogs);

    const builder = imageUrlBuilder(client);

    const buttonStyle = "flex mx-auto lg:text-xl text-[1rem] text-white hover:text-purple-500 hover:border-white border py-2 px-8 focus:outline-none rounded text-lg border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100";


    return (
        <>
            <Head>
                <title>Harshal Kahar | Blogs</title>


            </Head>
            <div id='blogs' className=" pt:5 sm:p-16 xs:p-8 px-6 py-12 relative z-10 sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-black">
                <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
                    <h1 className='sm:text-[4rem] text-[2rem] font-semibold title-font xl:text-start ' data-aos="fade-right">Blogs</h1>
                    <hr className=' sm:w-3/4 w-2/3  border-2  xl:inline' data-aos="fade-left" />
                </div>

                {blogs.map((item) => {
                    return (
                        <div key={item.slug.current}> <div

                            className="flex md:flex-row flex-col border rounded-lg my-5 p-10 md:px-28 justify-center items-center"

                        >
                            <a href={"/blog/" + item.slug.current}>
                                <img
                                    src={builder.image(item.blogimage).width(200).url()}
                                    alt="planet-01"
                                    className="w-[170px] h-[150px] rounded-[32px] object-cover "
                                />
                            </a>

                            <div className="w-full flex justify-between items-center text-center">
                                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                    <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                                        {item.title}
                                    </h4>
                                    <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white ">
                                        {item.caption}
                                    </p>
                                </div>
                                <Link href={"/blog/" + item.slug.current}>
                                    <Tilt>

                                        <div
                                            className="md:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
                                        >

                                            {/* href={"/blog/" + item.slug.current} */}


                                            <img
                                                src="/arrow.svg"
                                                alt="arrow"
                                                className="w-[40%] h-[40%] object-contain z-10"
                                            />
                                        </div>
                                    </Tilt>
                                </Link>



                            </div>
                        </div>
                        </div>
                    )
                })
                }



            </div>
        </>
    )
}

export default MBlogs

export async function getServerSideProps() {
    const client = createClient({
        projectId: "puehhpql",
        dataset: "production",
        useCdn: false
    });
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);

    // const profileQuery = `*[_type == "profile"][0]`;
    // const profile = await client.fetch(profileQuery);

    return {
        props: {
            blogs

        }
    }
}