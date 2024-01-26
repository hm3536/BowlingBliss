import React from 'react'
import Link from 'next/link'

const aboutUs = () => {
    return (
        <>
            <div className='w-[100%] h-[100vh] px-24 about flex justify-end items-center container mx-auto'>
                <div className='animate__animated animate__fadeInUp w-[670px] h-[690px] bg-[#363636cc] p-8 text-[#fff]'>
                    <div className='w-[100%] head text-[#fff]'><h2 className='p-4'>About Us</h2></div>
                    <p className='text-[#fff] text-[16px] p-4 tracking-[0.8px] leading-10'>
                        Dartsbowshoot is a website that aims to introduce darts and
                        archery equipments to players and professionals alike. It helps
                        people in spending their money on products that is worth it.
                        Chris John created this site because he realized that most of
                        the online reviews are paid as well as not genuine and that is
                        why the darts and archery components he bought after
                        reading online reviews never live up to them.
                        His first wish is to provide you with a better solution to
                        solve your problem. So, kindly if you don&apos;t get any solution
                        then mention it in the comment section.
                    </p>

                    <div className='flex gap-4 h-10 mt-12 hv'>
                        <Link href={'https://www.facebook.com/profile.php?id=61552170716710'} target="_blank"><i className="fa-brands fa-facebook-f px-[0.90rem] py-[0.63rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                        <Link href={'https://www.LinkedIn.com'}><i className="fa-brands fa-linkedin-in px-[0.80rem] py-[0.63rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                        <Link href={'https://www.instagram.com/linkbuilder295'} target="_blank"><i className="fa-brands fa-instagram px-[0.70rem] py-[0.60rem] text-[1.40rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                        <Link href={'https://twitter.com/bilalbilla009'} target="_blank"><i className="fa-brands fa-x-twitter py-[0.70rem] px-[0.75rem] text-[1.25rem] text-[#000] bg-[#fff] rounded-[50%]"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default aboutUs