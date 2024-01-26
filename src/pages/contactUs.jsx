import React from 'react'

const contactUs = () => {
    return (
        <>
            <div className='p-4 mb-4 mx-auto container'>
                <div className='animate__animated animate__zoomInUp w-[100%] head text-[#000000]'><h2 className='p-4'>Contact Us</h2></div>
                <div className='min-h-[120vh] w-[100%] flex justify-center gap-24 items-center mb-9'>
                    <div className='flex flex-col gap-10 mt-4'>
                        <img src="/Images/contact1.png" alt="image" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3405.8551248977838!2d73.108655!3d31.390558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIzJzI2LjAiTiA3M8KwMDYnMzEuMiJF!5e0!3m2!1sen!2s!4v1706077000649!5m2!1sen!2s" width="500" height="400" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='border-2 shadow-2xl rounded-xl min-h-[115vh] py-14 px-8 leading-normal'>
                        <h4><span className='text-[#940F0F]'>*</span>Name</h4>
                        <div className='flex gap-[32px] mt-[8px]'>
                            <div className='bg-[#CCC] place w-[295px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
                                <input className='bg-transparent outline-none text-[17px] text-[#000] required' type="text" name="" id="" placeholder='First Name' required/>
                            </div>
                            <div className='bg-[#CCC] place mb w-[295px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
                                <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Last Name' required/>
                            </div>
                        </div>

                        <div className='flex gap-[32px] mt-[24px]'>
                            <div>
                                <h4><span className='text-[#940F0F]'>*</span>Email</h4>
                                <div className='bg-[#CCC] place w-[295px] h-[46px] mt-2 rounded-[5px] pt-[9px] pl-[11px]'>
                                    <input className='bg-transparent outline-none text-[17px] text-[#000]' type="email" name="" id="" placeholder='Email Address' required/>
                                </div>
                            </div>

                            <div>
                                <h4><span className='text-[#940F0F]'>*</span>Number</h4>
                                <div className='bg-[#CCC] place w-[295px] h-[46px] rounded-[5px] mt-2 pt-[9px] pl-[11px]'>
                                    <input className='bg-transparent outline-none text-[17px] text-[#000]' type="number" name="" id="" placeholder='Phone #' required/>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h4><span className='text-[#940F0F]'>*</span>Company Name</h4>
                            <div className='bg-[#CCC] place w-[622px] mt-[8px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
                                <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Company Name' required/>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h4><span className='text-[#940F0F]'>*</span>Subject</h4>
                            <div className='bg-[#CCC] place w-[622px] mt-[8px] h-[46px] rounded-[5px] pt-[9px] pl-[11px]'>
                                <input className='bg-transparent outline-none text-[17px] text-[#000]' type="text" name="" id="" placeholder='Subject' required/>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h4><span className='text-[#940F0F]'>*</span>Message</h4>
                            <div className='bg-[#CCC] w-[622px] mt-[8px] h-[177px] rounded-[5px] pt-[15px] pl-[11px] place'>
                                <textarea className='bg-transparent outline-none text-[17px] text-[#000] family' name="" id="" cols="74" rows="6" placeholder='Message'></textarea>
                            </div>
                        </div>

                        <div className='bg-[#940F0F] border-4 border-[#940F0F] w-[165px] h-[52px] pt-[10px] mt-[34px] pl-[17px] mb-[20px]  rounded-[5px] hover:bg-[#20222B] transition-all duration-700 cursor-pointer'>
                            <button type='submit' className='text-[16px] text-[#FFF] bg-transparent outline-none transition-all duration-300'>Submit Message</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contactUs