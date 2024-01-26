import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='container family mx-auto'>
            <div className='bg-[#20222B] flex justify-center gap-[150px] pb-[30px] items-start'>
                <div className='text-[#b8b1b1]'>
                    <Link href={'/'}>            
                        <Image width={160} height={159} src={"/Images/MainLogo.svg"}></Image>
                    </Link>
                    <p className='text-[14px] text-[#b8b1b1] font-normal w-[273px] pl-[22px] leading-relaxed'>
                       &quot;BOWLING BLISS- Navigating the World of
                        Precision Sports: Your go-to hub for top
                        notch darts and archery gear. Unlock
                        Bowling Bliss with every choice!&quot;
                    </p>
                    <i className='fa-regular fa-envelope text-[#fff] text-[18px] font-bold p-4'></i>&nbsp;bilalsaqib445@gmail.com
                </div>

                <div className='pt-[50px] flex gap-40'>
                    <div>
                        <p className='text-[#FFFFFF] text-[24px] font-bold'>About</p>
                        <div className='text-[16px] text-[#b8b1b1] font-normal pt-[10px] list-none leading-loose'>
                            <Link href={'/darts'}><li className='cursor-pointer hover:text-[#940F0F]'>News</li></Link>
                            <Link href={'/contactUs'}><li className='cursor-pointer hover:text-[#940F0F]'>Contact Us</li></Link>
                            <Link href={'/termOfUse'}><li className='cursor-pointer hover:text-[#940F0F]'>Terms Of Use</li></Link>
                            <Link href={'/aboutUs'}><li className='cursor-pointer hover:text-[#940F0F]'>About Us</li></Link>
                            <Link href={'/privacyPolicy'}><li className='cursor-pointer hover:text-[#940F0F]'>Privacy Policy</li></Link>
                            <Link href={'/disclaimer'}><li className='cursor-pointer hover:text-[#940F0F]'>Disclaimer</li></Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#FFFFFF] text-[24px] font-bold'>Follow us</p>
                        <div className='flex items-center gap-5 pt-[20px] hv'>
                            <Link href={'https://www.facebook.com/profile.php?id=61552170716710'} target="_blank"><i className="fa-brands fa-facebook-f px-[0.90rem] py-[0.63rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                            <Link href={'https://www.LinkedIn.com'}><i className="fa-brands fa-linkedin-in px-[0.80rem] py-[0.63rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                            <Link href={'https://www.instagram.com/linkbuilder295'} target="_blank"><i className="fa-brands fa-instagram px-[0.70rem] py-[0.60rem] text-[1.40rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                            <Link href={'https://twitter.com/bilalbilla009'} target="_blank"><i className="fa-brands fa-twitter py-[0.70rem] px-[0.75rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                        </div>
                        <div className='pt-[25px] hv'>
                            <Link href={'https://bilalsaqib445@gmail.com'} target="_blank"><i className="fa-regular fa-envelope py-[0.70rem] px-[0.75rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#FFFFFF] text-[24px] font-bold'>Recent Posts</p>
                        <p className='text-[14px] text-[#b8b1b1] font-normal pt-[10px]'>What Is An Electronic Dartboard? - Complete Information In 2024</p>
                        <p className='text-[14px] text-[#b8b1b1] font-normal pt-[10px]'>What Are The Different Types Of Dartboards? Updated In 2024</p>
                        <p className='text-[14px] text-[#b8b1b1] font-normal pt-[10px]'>What Is The Ideal Age To Start Playing Darts? Updated In 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer