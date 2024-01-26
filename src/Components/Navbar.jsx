import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='navbar bg-[#000000] min-w-[1280px] max-w-[100%] h-[100px] flex justify-around items-center'>
                <Link href={'/'}>
                    <Image className='p-2' width={160} height={159} src={"/Images/MainLogo.svg"}></Image>
                </Link>
                <ul className='list-none text-[#FFFFFF] family font-extrabold text-[20px] flex justify-center gap-[37px]'>
                    <li className='simple'><Link href={"/"}>Home</Link></li>
                    <li className='simple'><Link href={"/darts"}>Darts</Link></li>
                    <li className='simple'><Link href={"#reviews"}>Reviews</Link></li>
                    <li className='simple'><Link href={"/aboutUs"}>About US</Link></li>
                    <li className='simple'><Link href={"/contactUs"}>Contact US</Link></li>
                </ul>
                <div className='border-2 border-[#940F0F] w-[243px] h-[46px] rounded-[4px] pt-[10px] pl-[8px]'>
                    <input className='bg-transparent text-[#FFFFFF] outline-none border-none' type="text" placeholder='Search' />
                    <i className="fa-solid fa-magnifying-glass text-[#FFFFFF] pl-[20px] cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar 