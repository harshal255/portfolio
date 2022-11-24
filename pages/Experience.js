import React from 'react'
import Tilt from 'react-tilt'


const Experience = () => {

  const iconstyle = "w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0 p-4 cursor-pointer "
  return (
    <div id="Experience" className='sm:pt-[6rem] pt:5 rounded-b-[5rem]'>
      <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
      <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
      <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
        <h1 className='sm:text-[4rem] text-[2rem] font-semibold title-font xl:text-start' data-aos="fade-right">Experience</h1>
        <hr className=' sm:w-3/4 w-2/5 border-2  xl:inline' data-aos="fade-left" />
      </div>

      <section className=" body-font">
        <div className="container px-5 py-24 m-auto">

          <div className="flex flex-wrap sm:-m-4  -mb-10 -mt-4 justify-between ">

            <div className="md:p-10 p-4  md:w-1/3 flex flex-col text-center items-center h-[25rem] border border-gray-200  rounded-lg overflow-y-scroll">
              <Tilt className={iconstyle}>
                <img src="images/Experience/lakshya.jpg" alt="Lakshya" />
              </Tilt>
              <div className="flex-grow">
                <h2 className=" text-lg title-font  mb-3 font-semibold">Web-O-Then at Lakshya 2022</h2>
                <p className="leading-relaxed text-base text-gray-500">I{`'`}ve Participated in web-o-then at lakshya-2022 : {`"`}ANAGATA, Divulging the unprocedented event{`"`} is a national level edu-tech Fest Organized by team robocon ldce & <span className='text-white'>Secured 3rd Position🎉</span></p>

              </div>
            </div>


            <div className="p-4 md:p-10 md:w-1/3 flex flex-col text-center items-center h-[25rem]  border border-gray-200  rounded-lg overflow-y-scroll">
              <Tilt className={iconstyle}>
                <img src="images/Experience/SIH2022.jpg" alt="Smart India Hackathon" />
              </Tilt>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-semibold mb-3">SSIP HACKTHON 2022</h2>
                <p className="leading-relaxed text-base  text-gray-500">I participated in SSIP HACKTHON AZADI KA AMRIT MAHOTSAV at L.D. College of Engineering in Ahmedabad. & worked as a frontend web developer to made react application with bootstrap css for our problem <span className='text-white'> story of the startups.</span></p>

              </div>
            </div>


            <div className="p-4 md:p-10 md:w-1/3 flex flex-col text-center items-center h-[25rem]  border border-gray-200  rounded-lg overflow-y-scroll">
              <Tilt className={iconstyle}>
                <img src="images/Experience/innovator-club.jpg" alt="Innoator Club" />
              </Tilt>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-semibold mb-3">Innovator Club 2022</h2>
                <p className="leading-relaxed text-base  text-gray-500">I joined the innovator club as a ui designer. I{`'`}ve made a ui design for innovator club website. As a part of the project,I{`'`}ve mainly worked on the ui design which creating in Figma Software.</p>

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Experience