import React, { useEffect } from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Rightbar from './components/Rightbar'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-tilt'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ profile, typingtext ,socialmedia}) => {


  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)


  useEffect(() => {
    AOS.init();
  }, [])

  const buttons = 'my-2 md:flex '
  const buttonStyle = 'lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-purple-500 border rounded-[10px] hover:border-white border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-purple-500 border rounded-[10px] hover:border-white border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-60'



  return (
    <>
      <div className="relative rounded-b-[5rem] pt-[5rem]" id='Hero'>




        <img alt="Harshal" className="-z-50 absolute opacity-20 lg:mt-[-7rem] invisible sm:visible" src="/images/banner-bg.png" />
        <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
        <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 top-0 animate-pulse' />
        <div className='z-10 flex'>
          <Rightbar socialmedia={socialmedia}></Rightbar>


          <div className='flex md:flex-row flex-col-reverse' >

            <div className="headings flex flex-col items-start justify-center text-[1rem] lg:text-[2rem] lg:w-3/5 w-full md:mt-[10rem] lg:ml-[4rem] lg:p-6 md:ml-4">
              <span className='flex'>
                Hey There..!
                <Tilt>👋</Tilt>

              </span>
              <span className='sm:text-[4rem] md:text-[3rem] lg:text-[4rem] text-[2rem] font-extralight'><b>
                {profile.name}
              </b>

              </span>
              <span className='sm:text-xl text-[1rem] flex'> <span className='sm:mr-2 mr-1 '>I am a </span>

                <TypeAnimation
                  sequence={[`${typingtext[0].name}`, 1000, `${typingtext[1].name}`, 1000, `${typingtext[2].name}`, 1000, `${typingtext[3].name}`, 1000]}
                  speed={75}
                  wrapper="h2"
                  repeat={Infinity}
                />


              </span>
              <span className='md:text-[1.25rem] text-gray-500 font-semibold'>
                {profile.homeabout}
              </span>


              <div className={buttons}>

                <Link href="/resume"> <button className={buttonStyle}>View Resume</button></Link>
                <Link href={profile.resume} target="_blank"><button className={buttonStyle}>Download Resume</button></Link>
              </div>

            </div>
            <div className='md:w-2/5 w-4/5 md:mr-[4rem] lg:m-0' >
              <Tilt>
                <img src={builder.image(profile.image).width(1500).url()} alt="Harshal Kahar" className='rounded-full lg:py-[5rem] lg:pr-[9.5rem] p-[3rem] lg:mt-[5rem] lg:pl-0  drop-shadow-2xl md:mt-[10rem] md:p-1 lg:p-6' />
              </Tilt>
            </div>




          </div>

        </div>

      </div>

    </>
  )
}

export default Hero

export async function getServerSideProps() {
  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });
  // const query = `*[_type == "profile"]`;
  const query = `*[_type == "profile"][0]`;
  const profile = await client.fetch(query);
  // console.log(profile[0]);

  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);


  const typingquery = `*[_type == "typingtext"]`;
  const typingtext = await client.fetch(typingquery);

  const socialquery = `*[_type == "socialmedia"][0]`;
  const socialmedia = await client.fetch(socialquery);



  return {
    props: {
      profile, typingtext, socialmedia

    }
  }
}