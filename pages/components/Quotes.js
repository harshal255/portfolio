import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-tilt'

const Quotes = () => {
    return (
        <div id='Quotes' className=''>
            <section className="text-gray-600 body-font">

                {/* <img src="/images/color-sharp2.png" alt="" className='absolute -z-30 -mt-64  opacity-60 right-0 ' /> */}
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4">
                        {/* <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1> */}
                        <div className="p-4 md:w-3/4 w-full mx-auto hover:shadow-2xl ">
                            <div className=" bg-gray-100 p-8 rounded xl:h-[15rem] h-[20rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <div className="leading-relaxed mb-6 xl:h-[4rem] h-[6rem] text-1xl md:text-2xl">
                                    <TypeAnimation
                                        sequence={['Given long time in any task, it can be achive with guaranteed,weather there is anything skills about it or not...', 1000, 'Make Your Weakness as Strength...', 1000, 'Don`t Reinvent the Wheel,just realign it...', 1000, 'Success is the best revenge for anything...', 1000, 'Next Stop the Top...', 1000]}
                                        speed={75}
                                        wrapper="h2"
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className='flex justify-between flex-col sm:flex-row'>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="/images/logo.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Harshal Kahar</span>
                                            <span className="text-gray-500 text-sm">WEB DEVELPER</span>
                                        </span>
                                    </a>

                                    <a className="inline-flex items-center">
                                        Check More Quotes in instagram (2021-22)
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Quotes