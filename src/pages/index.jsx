import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import SliderNews from '@/Components/SliderNews';
import LatestNews from '@/Components/LatestNews';
import Blog from '@/Components/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainPage = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 }, { delay: 2000 })
  }, [])


  return (
    <div className='container mx-auto'>
      <div className='background pl-[75px] pt-[122px] mx-auto'>

        <p className='animate__animated animate__fadeInDown text-[#940F0F] text-[18px] font-medium family'>Bowling</p>

        <h2 data-text='DISCOVER THE WORLD OF' className='text-[#FFFFFF] text-[35px] font-bold lineAnimation'>DISCOVER THE WORLD OF</h2>
        <h2 data-text='DART AND ARCHERY' className='text-[#FFFFFF] text-[35px] font-bold nextlineAnimation'>DART AND ARCHERY</h2>

        <p className='animate__animated animate__zoomInUp text-[22px] font-medium text-[#817e7e] w-[430px] h-[102px] mt-[22px]'>
          Discover the world of darts and archery
          with us! From expert tips to fascinating
          facts,
        </p>

        <div className='bg-[#940F0F] cursor-pointer border-2 border-[#940F0F] w-[156px] h-[51px] pt-[8px] rounded-[3px] pl-[9px] mt-[15px] hover:text-[#940F0F] hover:bg-transparent transition-all duration-700'>
          <button className='bg-transparent text-[19px] font-medium border-none text-[#FFFFFF]'>Discovery Now</button>
        </div>
      </div>

      <div className='w-[100%] p-4 mb-4'>
        {/* LatestNews*/}

        <div data-aos="fade-down" className='w-[100%] head text-[#000000] flex flex-col items-center'><h2 className='p-4 line'>LATEST NEWS</h2></div>
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
        <div className='bg-[#000] mx-10 py-10 my-16 text-[#fff] rounded-2xl shadow-xl'>
          <div data-aos="zoom-out" className='text-center text-[#940F0F] text-[20px] font-bold mt-8'><span className='pr-4'>BLOG POST</span></div>
          <div data-aos="zoom-in" className='w-[100%] head text-[#fff] flex flex-col items-center'><h2 className='p-4 line'>EXPLORE ARCHREY&apos;S WORLD</h2></div>
          <Blog />
        </div>
      </div>

      {/* Reviews */}

      <div id='reviews'>

        <div data-aos="fade-down" className='flex justify-center'>
          <span className='line'><p className='text-[#000000] text-[44px] font-extrabold pt-[26px] text-center family'>EXPERT&apos;S REVIEWS</p></span>
        </div>
        <div className='flex justify-center gap-[60px] mt-[63px] mb-[40px]'>
          <img className='w-[650px] h-[500px]' src="/Images/review.png" alt="" />
          <div className='leading-none family'>
            <h3 className='text-[#000] text-[75px] w-[390px] font-extrabold family'>Best <span className='text-[#940F0F] text-[75px] font-extrabold family'>fun</span><br />
              <i className='text-[55px]'>in</i> town</h3>
            <p className='text-[#363535] text-[18px] pt-[25px] w-[320px] leading-normal'>
              From which we spring citizens of distant
              epochs made in the interiors of collapsing
              stars vastness is bearable only through love
              globular star cluster invent the universe.
            </p>
            <div className='border-2 border-[#940F0F] w-[96px] btn py-2 px-4 mt-[40px] rounded-[4px] family hover:bg-[#940F0F] transition-all duration-700'>
              <button className='text-[15px] text-[#940F0F] font-normal bg-transparent outline-none hover:text-[#FFF] transition-all duration-300'>View ALL</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <p className='text-[#940F0F] text-[20px] text-center mt-[120px] family font-extrabold'>MAKE AN APPOINTMENT</p>
      <div className='flex justify-center gap-[62px] items-center my-[30px] mb-9'>
        <img src="/Images/contact.png" alt="" />
        <div>
          <p className='text-[55px] text-[#000] font-extrabold family'>CONTACT US</p>
          <div className='flex gap-[32px] mt-[24px]'>
            <div className='bg-[#CCC] place w-[295px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
              <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Your Name' />
            </div>
            <div className='bg-[#CCC] place mb w-[295px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
              <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Email Address' />
            </div>
          </div>
          <div className='bg-[#CCC] place w-[622px] mt-[25px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
            <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Subject' />
          </div>
          <div className='bg-[#CCC] w-[622px] mt-[25px] h-[177px] rounded-[5px] pt-[15px] pl-[11px] place'>
            <textarea className='bg-transparent outline-none text-[17px] text-[#000] family' name="" id="" cols="74" rows="6" placeholder='Message'></textarea>
          </div>
          <div className='bg-[#940F0F] border-4 border-[#940F0F] w-[165px] h-[52px] pt-[10px] mt-[34px] pl-[17px] mb-[20px]  rounded-[5px] hover:bg-[#20222B] transition-all duration-700 cursor-pointer'>
            <button className='text-[16px] text-[#FFF] bg-transparent outline-none transition-all duration-300'>Submit Message</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MainPage