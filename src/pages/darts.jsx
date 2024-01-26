import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import SliderNews from '@/Components/SliderNews';
import LatestNews from '@/Components/LatestNews';
import Blog from '@/Components/Blog';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Darts = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 }, { delay: 2000 })
  }, [])

  return (
    <>
      <div className='container mx-auto'>
        <div className='w-[100%] p-4 mb-4'>
          {/* LatestNews*/}

            <div className='animate__animated animate__fadeInDown w-[100%] head text-[#000000] flex flex-col items-center'><h2 className='p-4 line'>LATEST NEWS</h2></div>
         
            <LatestNews />

          <Link href={'/darts/news1'}>
            <div className='flex justify-center w-[100%]'>
              <div className='text-center border-2 border-[#940F0F] px-6 btn py-3 mt-[40px] rounded-[4px] family hover:bg-[#940F0F] transition-all duration-700'>
                <button className='text-[18px] text-[#940F0F] font-extrabold bg-transparent outline-none hover:text-[#FFF] transition-all duration-300'>READ MORE</button>
              </div>
            </div>
          </Link>

          {/* Trending News */}

          <div data-aos="fade-down" className='w-[100%] head text-[#000000] mt-8 flex flex-col items-center'>
            <h2 className='p-4 line'>TRENDING NEWS</h2>
          </div>
          <SliderNews />


          {/* Blog Post */}

          <div className='mx-auto py-6 my-12 text-[#000]'>
            <div data-aos="fade-down" className='w-[100%] head text-[#000000] flex flex-col items-center'>
              <h2 className='p-4 line'>BLOG POST</h2>
            </div>
            <Blog />
          </div>

        </div>
      </div>

    </>
  )
}

export default Darts