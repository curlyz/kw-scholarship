'use client'

import { cn } from '@/app/utils'
import Image from 'next/image'
import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
    Dispatch,
    SetStateAction,
    ReactNode,
    MouseEvent,
} from 'react'

const MouseEnterContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null)

export const CardContainer = ({
    children, className, containerClassName
}: {
    children?: ReactNode,
    className?: string,
    containerClassName?: string
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)

    function handleMouseMovement(e: React.MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25
        containerRef.current.style.transform = `rotate(${x}deg) rotate(${y}deg)`

    }
    function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return
        setIsMouseEntered(true)
    }
    function handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
        if (!containerRef.current) return
        setIsMouseEntered(false)
        containerRef.current.style.transform = `rotate(0deg) rotate(0deg)`
    }

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn('py-20 flex items-center justify-center', containerClassName)}
                style={{ perspective: '1000px' }}
            >
                <div
                    ref={containerRef}
                    className={cn('flex items-center justify-center relative transition-all duration-200 ease-linear', className)}
                    onMouseMove={handleMouseMovement}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    )
}


export const CardBody = ({
    children,
    className
}: {
    children: ReactNode,
    className?: string
    }) => {
    
    //! lmao
    return (
        <div
            className={cn(
                'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
                className
        )}>
            {children}
        </div>
    )
}


