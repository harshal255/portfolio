import Link from 'next/link';
import React from 'react'
import Tilt from 'react-tilt'
// import AllProjects from './AllProjects';
const AllProjectsmap = ({ data }) => {
  return (
    <div id='AllProjectsmap'>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((Projects, index) => {
              return (
                <div className="p-4 md:w-1/3 " data-aos="zoom-in" key={Projects.id}>

                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Tilt>
                      <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={`/images/Projects/${Projects.image}.png`} alt="blog" />
                    </Tilt>

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project Name</h2>
                      <h1 className="title-font text-lg text-white font-semibold mb-3">{Projects.name}</h1>
                      <p className="leading-relaxed mb-3">{Projects.desc}</p>
                      <div className="flex items-center flex-wrap ">
                        <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2" href={`${Projects.links.livedemo}`} target="_blank">Live Demo
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2" target="_blank" href={`${Projects.links.code}`} >Get Code
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          Year
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          {Projects.Year}
                        </span>
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

export default AllProjectsmap

