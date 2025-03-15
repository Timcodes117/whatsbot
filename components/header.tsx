import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='w-full h-[120px] flex items-center justify-between px-20 font-[inter] absolute'>
        <div className='w-[60px] h-[39px] bg-[url(/logo.svg)] bg-center bg-contain' />

        <nav className='flex items-center  gap-10 text-sm'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Solution</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Privacy policy</Link>
        </nav>

        <div>
            <button className='w-[100px] bg-black h-[40px] rounded-full'></button>
        </div>
    </header>
  )
}

export default MainHeader;