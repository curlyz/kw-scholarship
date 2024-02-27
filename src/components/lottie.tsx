import Lottie from "react-lottie";
import animationData from '@/lottie/lotus.json';
import { motion } from 'framer-motion'
import {cn} from '@/app/utils'

export default function Lott({animationData, className, size}: {animationData: any, className?: string, size?: number}) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            whileHover={{
                opacity: 1,
                scale: 1.05
            }}
            className={cn('', className)}

            
        >
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}
                height={size || 200}
                width={size || 200}

            />

        </motion.div>
    )
}