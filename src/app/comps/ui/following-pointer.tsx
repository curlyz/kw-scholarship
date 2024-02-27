import React, { useEffect, useState, useRef } from 'react'

import { motion, AnimatePresence, useMotionValue, MotionValue } from 'framer-motion'
import { cn } from '@/app/utils'


export const FollowerPointerCard = ({
    children, className, title
}: {
    children: React.ReactNode;
    className?: string;
    title?: string | React.ReactNode
}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const ref = useRef<HTMLDivElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)
    const [isInside, setIsInside] = useState<boolean>()

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect())
        }
    }, [])

    function handleMouseMovement(e: React.MouseEvent<HTMLDivElement>) {
        if (rect) {
            const scrollX = window.scrollX
            const scrollY = window.scrollY

            x.set(e.clientX - rect.left + scrollX)
            y.set(e.clientY - rect.top + scrollY)
        }
    }
    function handleMouseLeave() {
        setIsInside(false)
    }
    function handleMouseEnter() {
        setIsInside(true)
    }
    return (
        <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMovement}
            style={{
                cursor: 'none'
            }}
            ref={ref}
            className={cn(
                'relative',
                className
            )}
        >
            <AnimatePresence mode="wait">
                {isInside && <FollowerPointer x={x} y={y} title={title} />}
            </AnimatePresence>
            {children}
        </div>
    )
}

export const FollowerPointer = ({
    x, y, title,
}: { x: MotionValue<number>, y: MotionValue<number>, title?: string | React.ReactNode }) => {
    
    const colors = [
        "var(--sky-500)",
        "var(--neutral-500)",
        "var(--teal-500)",
        "var(--green-500)",
        "var(--blue-500)",
        "var(--red-500)",
        "var(--yellow-500)",
    ];

    return (
        <motion.div
            className={cn(
                'h-4 w-4 rounded-full absolute z-50'
            )}
            style={{
                top: y,
                left: x,
                pointerEvents: 'none'
            }}
            initial={{
                scale: 1,
                opacity: 1
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}
            exit={{
                scale: 0,
                opacity: 0
            }}
        >
            <h1>+++</h1>
        </motion.div>
    )
}


