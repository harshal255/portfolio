import React from 'react'
import { useState } from 'react';
import AllProjects from './AllProjects';
import AllProjectsmap from './AllProjectsmap';


const More_Projects = () => {

    const [query, setQuery] = useState("")
    // console.log(query);

    const search = (data) => {
        return data.filter(
            (items) =>
                items.desc.toLowerCase().includes(query) ||
                items.name.toLowerCase().includes(query) ||
                items.languages.languages1.toLowerCase().includes(query) ||
                items.languages.languages2.toLowerCase().includes(query) ||
                items.languages.languages3.toLowerCase().includes(query) ||
                items.languages.languages4.toLowerCase().includes(query) ||
                items.languages.languages5.toLowerCase().includes(query) ||
                items.Year.includes(query) ||
                items.category.toLowerCase().includes(query)
        );
    }



    return (
        <div id='More_Projects' className='pt-[5rem]'>
            <img src="/images/color-sharp.png" alt="" className='absolute -z-30 mt-8 opacity-50  left-0 animate-pulse' />
            <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 animate-pulse' />
            <h1 className='sm:text-[3rem] text-[2rem] font-semibold title-font underline text-center '> All Projects</h1>
            <div className="flex justify-center mx-5 flex-col sm:flex-row space-y-4 my-2 sm:space-x-5" >


                <input type="text" id="hero-field" name="hero-field" placeholder='Search anything related to Project...' value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())} className="h-[3rem] bg-transparent rounded focus:ring-2 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-purple-500 text-base outline-none p-2 mt-3 leading-8 transition-colors duration-200 ease-in-out sm:w-1/2" />


            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <AllProjectsmap data={search(AllProjects)}></AllProjectsmap>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default More_Projects

