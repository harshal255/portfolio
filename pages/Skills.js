import React from 'react'
import { Tooltip } from '@nextui-org/react';
import Tilt from 'react-tilt'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';



const Skills = ({ skills, technology, programming, development, others }) => {

  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)


  const iconstyle = "w-20 h-20  inline-flex items-center justify-center rounded-full  bg-purple-50  text-purple-600 mb-4 mx-1 md:mx-2  cursor-pointer p-5 "


  return (
    <div id='Skills' className='sm:pt-[6rem] pt:5 rounded-b-[5rem] overflow-x-hidden'>
      <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
        <h1 className='text-[2rem] font-semibold title-font xl:text-start ' data-aos="fade-right">Skills</h1>
        <hr className='sm:w-5/6 w-2/3  border-2  xl:inline' data-aos="fade-left" />
      </div>

      <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
      <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />

      <section className="body-font">
        <div className="container px-5 sm:px-10 lg:px-10 py-16 mx-auto">
          <div className="flex  w-full  mb-20 flex-col items-center text-center text-[1.25rem] ">
            <h1 className="sm:text-3xl text-xl font-semibold title-font mb-2 lg:w-3/4" >{skills.name}</h1>

          </div>
          <div className="flex flex-wrap ">
            <div className="xl:w-1/3  p-2 w-full">
              <div className="border p-2 rounded-lg justify-between h-[25rem] border-gray-200 overflow-y-scroll">
                <h2 className="text-lg  font-semibold title-font my-4 text-center"> Technologys</h2>

                {technology.map((item) => {
                  return (
                    <Tilt className={iconstyle} key={item.name}>
                      <Tooltip content={item.name}>
                        <img src={builder.image(item.icon).width(50).url()} alt={item.name} />
                      </Tooltip>
                    </Tilt>
                  )
                })}

              </div>
            </div>
            <div className="xl:w-1/3  p-2 w-full">
              <div className="border border-gray-200 p-2 rounded-lg justify-between h-[25rem]  overflow-y-scroll">
                <h2 className="text-lg font-semibold title-font my-4 text-center">Programming Languages</h2>
                {programming.map((item) => {
                  return (
                    <Tilt className={iconstyle} key={item.name}>
                      <Tooltip content={item.name}>
                        <img src={builder.image(item.icon).width(50).url()} alt={item.name} />
                      </Tooltip>
                    </Tilt>

                  )
                })}
              </div>
            </div>
            <div className="xl:w-1/3  p-2 w-full ">
              <div className="border border-gray-200 p-2 rounded-lg justify-between h-[25rem] overflow-y-scroll">
                <h2 className="text-lg  font-semibold title-font my-4 text-center"> Development</h2>
                {development.map((item) => {
                  return (
                    <Tilt className={iconstyle} key={item.name}>
                      <Tooltip content={item.name}>
                        <img src={builder.image(item.icon).width(50).url()} alt={item.name} />
                      </Tooltip>
                    </Tilt>

                  )
                })}
                <h2 className="text-lg  font-semibold title-font my-4 text-center">Others Technology</h2>
                {others.map((item) => {
                  return (
                    <Tilt className={iconstyle} key={item.name}>
                      <Tooltip content={item.name}>
                        <img src={builder.image(item.icon).width(50).url()} alt={item.name} />
                      </Tooltip>
                    </Tilt>

                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

export async function getServerSideProps() {
  const client = createClient({
    projectId: "puehhpql",
    dataset: "production",
    useCdn: false
  });

  const query = `*[_type == "skills"][0]`;
  const skills = await client.fetch(query);

  const Technologyquery = `*[_type == "technology"]`;
  const technology = await client.fetch(Technologyquery);

  const Programmingquery = `*[_type == "programming"]`;
  const programming = await client.fetch(Programmingquery);

  const Developmentquery = `*[_type == "development"]`;
  const development = await client.fetch(Developmentquery);

  const Others = `*[_type == "others"]`;
  const others = await client.fetch(Others);


  return {
    props: {
      skills, technology, programming, development, others

    }
  }
}