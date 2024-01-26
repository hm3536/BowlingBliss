import React from 'react'
import Link from 'next/link';

const Blog = () => {

    var blog = [
        { img: '/Images/8136213 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '20 JULY, 2024', href: '/darts/blog1' },
        { img: '/Images/8136269 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '21 JULY, 2024', href: '/darts/blog2' },
        { img: '/Images/8136250 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '22 JULY, 2024', href: '/darts/blog3' },
        { img: '/Images/6860080 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '21 JULY, 2024', href: '/darts/blog4' },
        { img: '/Images/6860130 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '20 JULY, 2024', href: '/darts/blog5' },
        { img: '/Images/6860123 1.png', title: 'BY ADMIN BLISS', heading: 'Profitable business makes to you happy and growth', date: '24 JULY, 2024', href: '/darts/blog6' },
    ]

    return (
        <>
            <div className='w-[100%] flex flex-wrap justify-center gap-8 m-8 mx-auto'>
                {blog.map((v, i) => {
                    return (
                        <div key={i} className='w-[381px] relative hover'>
                            <Link href={v.href}>
                                <img className='w-[381px] h-[320px]' src={v.img} alt="image" />
                                <span className='px-4 py-2 bg-[#940F0F] text-[#fff] absolute bottom-[11.55rem] right-0'>{v.date}</span>
                                <span className='py-4 text-[16px] font-bold'>{v.title}</span>
                                <h2 className='text-[22px] font-extrabold mt-2 font-[Lalezar,system-ui]'>{v.heading}</h2>
                                <button className='text-[18px] font-semibold mt-3 py-6'><span className='bg-[#8d93a0] hover:bg-[#940F0F] transition-all text-[#fff] rounded-[50%] px-[0.80rem] py-2 mr-2'><i className="fa-solid fa-arrow-right"></i></span>READ MORE</button>
                            </Link>
                        </div>
                    )
                })
                }
            </div>

            {/* Here is the numbering of page, I made only 6 blog if you will make furthur more than you will use useState and uncomment this section below */}

            {/* <div className='mt-16 flex justify-center items-center mx-auto'>
                <span className="active px-4 py-2 cursor-pointer font-semibold">1</span>&nbsp;
                <span className="px-4 py-2 cursor-pointer font-semibold">2</span>&nbsp;&nbsp;&nbsp;
                <i className='fa-solid fa-chevron-right'></i>
            </div> */}
        </>
    )
}
export default Blog