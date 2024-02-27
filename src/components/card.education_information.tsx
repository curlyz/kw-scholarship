import educationImage from '@/image/tumblr_inline_owhce7SlQ81rgfgmu_1280.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'


export default function EducationInformationCard() {

    const [gender, setGender] = useState<string>("male")

    return (
        <motion.div

            className="flex flex-col sm:flex-row rounded-lg overflow-hidden h-auto"
        >


            <div
                className=" bg-orange-600 w-full  h-auto p-8 text-white"
            >
                <h3 className='mb-6 text-4xl font-bold'>2. Education Information</h3>
                <span>More information needed regading SSC and HSC meaning</span>



            </div>

        </motion.div>
    )
}