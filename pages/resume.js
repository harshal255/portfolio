import React from 'react'


const Resume = () => {
    return (
        <div className='container w-11/12 mx-auto py-[6rem] '>
            <div className="max-w-7xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg rounded-md">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">Harshal Kahar{`'`}s Technical Resume</h3>

                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Harshal Sureshchandra Kahar</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Experience</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <br />
                                <ul className='text-purple-700'>
                                    <li>~ Frontend Web Dev</li>
                                    <li>~ Web dev with framework like React/Next.js </li>
                                    <li>~ UI Design in Figma</li>
                                    <li>~ Image or Video Editing</li>
                                </ul>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Education</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Pursuing Computer Engineering at L.D. College Of Engineering,Ahmedabad</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Academic Projects</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <br />
                                <ul className='text-purple-700'>
                                    <li>~ Frontend Web Dev</li>
                                    <li>~ Web dev with framework like React/Next.js </li>
                                    <li>~ UI Design in Figma</li>
                                    <li>~ Image or Video Editing</li>
                                </ul>
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="mailto:harshalskahar389@gmail.com" className='hover:text-purple-700'>harshalskahar389@gmail.com</a></dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Skills</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Frontend Web Developer, MERN Stack Web Dev, UI/UX Designer, Video & Image editor(Pro level)</dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Open For Positions</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                I am open for following positions :-<br /><br />
                                <ul className='text-purple-700'>
                                    <li>~ Frontend Web Dev</li>
                                    <li>~ Web dev with framework like React/Next.js </li>
                                    <li>~ UI Design in Figma</li>
                                    <li>~ Image or Video Editing</li>
                                </ul>
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Resume