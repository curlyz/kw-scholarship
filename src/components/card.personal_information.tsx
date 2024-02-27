import educationImage from '@/image/tumblr_inline_owhce7SlQ81rgfgmu_1280.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {useState} from 'react'
import { cn } from '@/lib/utils'


export default function PersonalInformationCard() {

    const [gender, setGender] = useState<string>("male")

    return (
        <motion.div

            className="flex flex-col sm:flex-row rounded-lg overflow-hidden h-auto"
        >


            <div
                className=" bg-teal-600 w-full sm:w-1/2 h-auto p-8 text-white"
            >
                <h3 className='mb-6 text-4xl font-bold'>1. Pesonal Information</h3>
                
                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Hello, my name is ...`}</h3>

                    <input
                        className="bg-teal-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Your name"></input>


                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`My father'name is ...`}</h3>

                    <input
                        className="bg-teal-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Your father's name"></input>


                </div>


                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`and my mother's name is ...`}</h3>

                    <input
                        className="bg-teal-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Your mother's name"></input>


                </div>

                
                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`I was born in ...`}</h3>

                    <input
                        className="bg-teal-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="date"></input>
                    


                </div>


                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`and I am proud to be`}</h3>

                    <div className="w-fit overflow-hidden rounded border-[1px] border-white font-medium">
                        <button className="text-violet-600 relative px-3 py-1.5 text-sm transition-colors duration-[750ms]"
                            onClick={() => { setGender("male") }}
                        >
                            Male
                        </button>
                        <button className={cn("text-violet-600 relative px-3 py-1.5 text-sm transition-colors duration-[750ms]")}
                            onClick={() => { setGender("female") }}

                        >
                            Female
                        </button>
                    </div>


                </div>
                
                
            </div>

            <div
                className=" bg-teal-700 w-full sm:w-1/2 h-auto p-8 text-white"
            >
                <h3 className='mb-6 text-4xl font-bold'>Addresses</h3>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Current address`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`House number`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Village/Area`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Thana`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`District`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>

                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Sector`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>


                <div className='_field mb-6'>
                    <h3 className='mb-2 text-2xl'>{`Source of scholarship information`}</h3>
                    <input
                        className="bg-teal-600 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text">
                    </input>
                </div>


                
            </div>

        </motion.div>
    )
}