import educationImage from '@/image/tumblr_inline_owhce7SlQ81rgfgmu_1280.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lott from './lottie'
import lotusAnimation from '@/lottie/lotus.json'

export default function WelcomeCard() {
    return (
        <motion.div
            // initial={{
            //     scale: 0.95,
            //     opacity: 0
            // }}
            // animate={{
            //     opacity: 1,
            //     scale: 1
            // }}
            // whileHover={{
            //     opacity: 1,
            //     scale: 1.01
            // }}

            className="flex flex-col sm:flex-row rounded-lg overflow-hidden">
            <div
                className="relative bg-indigo-600 w-full sm:w-2/5  h-full p-8 text-white"
            >  
                
                <Lott
                    className="absolute top-0 right-2 z-50"
                    animationData={lotusAnimation}
                    size={100}
                />
                
                
                <h3 className='mb-6 text-4xl font-bold'>Welcome back</h3>
                <div className='mb-6'>
                    <h3 className='mb-2 text-2xl'>Hi 👋! My name is...</h3>

                    <input
                        className="bg-indigo-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="text" placeholder="Your name"></input>


                </div>
                <div
                    className="mb-6"
                >
                    <h3 className='mb-2 text-2xl'>Phone number</h3>

                    <input
                        className="bg-indigo-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="tel" placeholder="Mobile phone"></input>

                </div>
                <div
                    className="mb-6"
                >
                    <h3 className='mb-2 text-2xl'>Password</h3>

                    <input
                        className="bg-indigo-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0"
                        type="password" placeholder="Click to show"></input>

                </div>


                <div
                    className="mb-6"
                >
                    <h3 className='mb-2 text-2xl'>{`Guardian's number`}</h3>

                    <input
                        className="bg-indigo-700 w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0 "
                        type="tel" placeholder="For emergency"></input>

                </div>

                <button className='bg-white text-violet-600 w-full rounded-lg py-3 text-center text-lg font-semibold transition-colors duration-[750ms]'>
                    Next
                </button>
            </div>


            <div className="sm:w-3/5 hidden sm:visible overflow-hidden sm:block"
            >
                <Image src={educationImage} className="w-full h-full" alt="edu" width={0} height={0} sizes='100vw'  />
            </div>

            
        </motion.div>
    )
}