import PrimeBankScholarship from '@/image/prime_bank_foundation1.png'
import Image from 'next/image'


export default function TopNavigationBar() {
    return (
        <nav
            className="fixed left-0 right-0 top-0 z-50 flex h-[54px] items-center justify-between border-b-2 border-neutral-950 bg-white px-2 transition-colors duration-300"
        >  
            <div
                className="flex items-center gap-4"
            >
                <img
                    src={PrimeBankScholarship.src}
                    alt="Prime Bank Scholarship"
                    height={32}
                />
            </div>
            <div
                className="flex items-center"

            >
                <div
                    className="flex"

                >
                    <button className='border-b border-neutral-950 bg-transparent px-4 py-2 font-medium text-neutral-900 transition-colors hover:bg-neutral-200'>
                        Sign in
                    </button>
                </div>
            </div>


        </nav>
    )
}