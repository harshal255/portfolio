import React from 'react'
import { createClient } from "next-sanity";
import PortableText from 'react-portable-text';


const Resume = ({ resume }) => {
    // console.log(resume.name);



    return (
        <div className='container w-11/12 mx-auto flex justify-center items-center h-[100vh]'>
            <div className="max-w-7xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg rounded-md">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">Harshal Kahar{`'`}s Technical Resume</h3>

                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{resume.name}</dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Education</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{resume.metadesc}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Academic Projects</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <br />
                                <PortableText

                                    content={resume.content}
                                    projectId="puehhpql"
                                    dataset="production"


                                />
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="mailto:harshalskahar389@gmail.com" className='hover:text-purple-700'>{resume.email}</a></dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Skills</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{resume.skills}</dd>
                        </div>

                        <div className="bg-white-50 px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-semibold text-gray-500">Open For Positions</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                I am open for following positions :-<br /><br />
                                <PortableText

                                    content={resume.openforposition}
                                    projectId="puehhpql"
                                    dataset="production"


                                />

                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Resume

export async function getServerSideProps() {
    const client = createClient({
        projectId: "puehhpql",
        dataset: "production",
        useCdn: false
    });

    const Resumequery = `*[_type == "resume"][0]`;
    const resume = await client.fetch(Resumequery);




    return {
        props: {
            resume

        }
    }
}