import React, { useRef } from 'react'
import Slider from "react-slick";
import Link from 'next/link';

const SliderNews = () => {
    const slider = useRef(null)

    var settings = {
        accessibility: true,
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    var news = [
        { img: '/Images/Group 16.png', date: '16 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news6' },
        { img: '/Images/Group 15.png', date: '18 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news7' },
        { img: '/Images/Group 14.png', date: '19 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news8' },
        { img: '/Images/Group 37.png', date: '20 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news9' },
        { img: '/Images/Group 16.png', date: '16 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news10' },
        { img: '/Images/Group 15.png', date: '18 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news11' },
        { img: '/Images/Group 14.png', date: '19 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news12' },
        { img: '/Images/Group 37.png', date: '20 JULY, 2024', heading: 'CLASH OF TITANS IN THE UPCOMING BASKETBALL BATTLE MATCH', href: '/darts/news13' },
    ]

    return (
        <>
            <div className='max-w-[1680px] mx-auto'>
                <div className='w-[100%] flex justify-end px-20 mt-4'>
                    <i onClick={() => slider.current.slickPrev()} className="fa-solid fa-chevron-left bg-[#940F0F] text-[#fff] p-2 cursor-pointer"></i>&nbsp;
                    <i onClick={() => slider.current.slickNext()} className="fa-solid fa-chevron-right bg-black text-[#fff] p-2 cursor-pointer"></i>
                </div>

                <div className='py-6 px-16'>
                    <Slider ref={slider} {...settings} className='gap-2'>
                        {news.map((v, i) => {
                            return (
                                <div key={i} className='blog'>
                                    <img className='w-[100%]' src={v.img} alt="image" />
                                    <div className='content'>
                                        <div>
                                            <button className='bg-[#940F0F] px-5 text-[14px] font-bold py-1 mr-4'>Darts</button>
                                            <span>{v.date}</span>
                                        </div>
                                        <h2 className='text-[#fff] font-bold text-[20px] font-[Lalezer,system-ui] py-2 mb-2'>{v.heading}</h2>
                                        <Link href={v.href}>
                                            <span className='text-[15px] text-[#fff] font-semibold py-2 read hover:text-[#000]'>READ MORE &nbsp;<i className="fa-solid fa-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SliderNews