import React from 'react'
import Link from 'next/link'

const LatestNews = () => {
    return (
        <>
            <div className='p-2 flex justify-center gap-8'>
                {/* column 1 */}

                <div data-aos="fade-up" className='p-1 flex flex-col gap-[1.85rem] rounded'>
                    <div className='img img1 px-4 pt-24 leading-normal'>
                        <div>
                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-6'>Darts</button>
                            <span>JULY 1/15/2024</span>
                        </div>
                        <h2 className='text-[#ffffff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>
                            CLASH OF TITANS IN THE UPCOMING
                            BASKETBALL BATTLE MATCH
                        </h2>
                        <Link href={'/darts/news1'}>
                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#940F0F]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>

                    <div className='img img2 px-4 pt-24 leading-normal'>
                        <div>
                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-6 bt'>Darts</button>
                            <span>JULY 1/15/2024</span>
                        </div>
                        <h2 className='text-[#fff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>
                            CLASH OF TITANS IN THE UPCOMING
                            BASKETBALL BATTLE MATCH
                        </h2>
                        <Link href={'/darts/news2'}>
                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#940F0F]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>

                {/* Column 2 */}
                <div className='p-1'>
                    <div data-aos="fade-up" className='w-[357px] h-[526px] img3 px-4 pt-48 leading-normal'>
                        <div className='text-[#fff]'>
                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-6'>Darts</button>
                            <span>JULY 1/15/2024</span>
                        </div>
                        <h2 className='text-[#fff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>
                            CLASH OF TITANS IN THE UPCOMING
                            BASKETBALL BATTLE MATCH
                        </h2>
                        <Link href={'/darts/news3'}>
                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#940F0F]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>

                {/* Column 3 */}
                <div data-aos="fade-up" className='p-1 flex flex-col gap-[1.85rem]'>
                    <div className='img img1 px-4 pt-24 leading-normal'>
                        <div>
                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-6'>Darts</button>
                            <span>JULY 1/15/2024</span>
                        </div>
                        <h2 className='text-[#fff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>
                            CLASH OF TITANS IN THE UPCOMING
                            BASKETBALL BATTLE MATCH
                        </h2>
                        <Link href={'/darts/news4'}>
                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#940F0F]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>

                    <div className='img img2 px-4 pt-24 leading-normal'>
                        <div>
                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-6'>Darts</button>
                            <span>JULY 1/15/2024</span>
                        </div>
                        <h2 className='text-[#fff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>
                            CLASH OF TITANS IN THE UPCOMING
                            BASKETBALL BATTLE MATCH
                        </h2>
                        <Link href={'/darts/news5'}>
                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#940F0F]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews