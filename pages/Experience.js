import React from 'react';
import Tilt from 'react-tilt';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


const Experience = ({ experience }) => {

  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  const iconstyle = "w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0 p-4 cursor-pointer "
  return (
    <div id="Experience" className='sm:pt-[6rem] pt:5 rounded-b-[5rem] overflow-x-hidden'>
      <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
      <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
      <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
        <h1 className=' text-[2rem] font-semibold title-font xl:text-start' data-aos="fade-right">Experience</h1>
        <hr className=' sm:w-3/4 w-2/5 border-2  xl:inline' data-aos="fade-left" />
      </div>

      <section className=" body-font">
        <div className="container px-4 md:px-20 py-24 m-auto">

          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {experience.map((item) => {
              return (
                <div className="md:p-10 p-4 lg:w-1/3 flex flex-col text-center items-center h-[25rem] border border-gray-200  rounded-lg overflow-y-scroll" key={item.title}>
                  <Tilt className={iconstyle}>
                    <img src={builder.image(item.icon).width(500).url()} alt={item.title} />
                  </Tilt>
                  <div className="flex-grow">
                    <h2 className=" text-lg title-font mb-3 font-semibold">{item.title} <br /> Year & Month: {item.launchAt.slice(0,7)}</h2>
                    <p className="leading-relaxed text-base text-gray-500">{item.description}</p>

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

export default Experience

export async function getServerSideProps() {
  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });

  const Experiencequery = `*[_type == "experience"]`;
  const experience = await client.fetch(Experiencequery);




  return {
    props: {
      experience

    }
  }
}