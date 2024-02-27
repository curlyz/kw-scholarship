import educationImage from '@/image/tumblr_inline_owhce7SlQ81rgfgmu_1280.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'


export default function UndergraduateInformationCard() {

    const [gender, setGender] = useState<string>("male")

    return (
        <motion.div

            className="flex flex-col sm:flex-row rounded-lg overflow-hidden h-auto"
        >


            <div
                className=" bg-blue-600 w-full sm:w-1/2 h-auto p-8 text-white"
            >
                <h3 className='mb-6 text-2xl font-bold'>3. Description of currently undergraduated education</h3>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Subject name`}</h3>
                    <input
                        className="bg-blue-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Subject">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Currently Studying Academic Year`}</h3>
                    <input
                        className="bg-blue-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="1st">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Class Serial No.`}</h3>
                    <input
                        className="bg-blue-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Class Roll No.">
                    </input>
                </div>


            </div>

            <div
                className=" bg-blue-700 w-full sm:w-1/2 h-auto p-8 text-white"
            >
                <h3 className='mb-6 text-4xl font-bold'></h3>


                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Admission Academic Year`}</h3>
                    <input
                        className="bg-blue-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Department of Education`}</h3>
                    <input
                        className="bg-blue-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>



                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Name of Educational Institution`}</h3>
                    <input
                        className="bg-blue-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>



            </div>

        </motion.div>
    )
}