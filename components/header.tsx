import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='w-full h-[90px] lg:h-[120px] flex items-center justify-between px-5 lg:px-20 font-[inter] absolute z-50 top-0 left-0'>
        <div className='w-[60px] h-[30px] lg:h-[39px] bg-[url(/logo.svg)] bg-center bg-contain bg-no-repeat' />

        <nav className='md:flex items-center  gap-10 text-sm hidden'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Solution</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"/privacy-policy"}>Privacy policy</Link>
        </nav>

        <div>
            <button className='w-fit bg-black invert-75 px-4  h-[35px] rounded-full'>
              <p className='text-white text-sm'>Get started</p>
            </button>
        </div>
    </header>
  )
}

export default MainHeader;