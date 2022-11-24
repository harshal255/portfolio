// import Link from 'next/link';
// import React from 'react'
// import Tilt from 'react-tilt'
// import AllProjects from './AllProjects';
// import { FiExternalLink, FiCode } from 'react-icons/fi'


// const Projects = () => {

//   const buttonStyle = "flex mx-auto lg:text-xl text-[1rem] text-white hover:text-purple-500 hover:border-white border py-2 px-8 focus:outline-none rounded text-lg border-purple-700 hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100";
//   return (
//     <div id='Projects' className='sm:pt-[6rem] pt:5 rounded-b-[5rem]'>
//       <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
//       <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
//       <div className='flex justify-evenly items-center text-center mt-5 sm:mt-0 '>
//         <h1 className='sm:text-[4rem] text-[2rem] font-semibold title-font xl:text-start' data-aos="fade-right">Projects</h1>
//         <hr className=' sm:w-3/4 w-1/2 border-2  xl:inline' data-aos="fade-left" />
//       </div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {AllProjects.map((Projects) => {

//               return <>
//                 <div className="p-4 md:w-1/3 " key={Projects.id}>

//                   <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                     <Tilt>
//                       <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={`/images/Projects/${Projects.image}.png`} alt="blog" />
//                     </Tilt>

//                     <div className="p-6">
//                       <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Project Name</h2>
//                       <h1 className="title-font text-lg text-white font-medium  mb-3">{Projects.name}</h1>
//                       <p className="leading-relaxed mb-3">{Projects.desc}</p>
//                       <div className="flex items-center flex-wrap ">
//                         <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2" href={`${Projects.links.livedemo}`} target="_blank">Live Demo
//                           <FiExternalLink className='mx-2'></FiExternalLink>

//                         </Link>
//                         <Link className="text-purple-500 hover:text-purple-100 inline-flex items-center md:mb-2 lg:mb-0 mx-2 " target="_blank" href={`${Projects.links.code}`} >Get Code
//                           <FiCode className='mx-2'></FiCode>



//                         </Link>
//                         <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                           Year
//                         </span>
//                         <span className="text-gray-400 inline-flex items-center leading-none text-sm">
//                           {Projects.Year}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </>
//             }).slice(0, 3)}






//           </div>
//         </div>
//         <Link href={'/More_Projects'}>  <button class={buttonStyle}>View More Projects</button></Link>


//       </section>
//     </div>
//   )
// }

// export default Projects