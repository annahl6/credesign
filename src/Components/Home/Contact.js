import React from 'react';

const Contact = () => {
    return (
        <div className='px-8 sm:px-12 mb-[100px]'>
            <div className='flex gap-4 items-center justify-center'>
                <div className='
                    rounded-full
                    w-[18px] h-[18px]
                    flex items-center
                    justify-center
                    border-2 border-black
                    '>
                    <div className='
                        w-[10px] h-[10px] 
                        rounded-full
                        border-2 border-black
                        '>
                    </div>
                </div>
                <div>MY CONTACT</div>
            </div>
            <h1 className='mb-8 font-[700] text-[44px] leading-[57.2px] text-center my-2'>I WANT TO HEAR FROM YOU</h1>
            <div className='flex gap-20'>
                <div className=''>
                    <form action="">
                        <div className='flex items-center gap-4'>
                            <input type="text" placeholder='Your name' className='border-2 border-[#FFE2D1] py-2 pl-2 pr-44 rounded-md' />
                            <input type="text" placeholder='Your email' className='border-2 border-[#FFE2D1] py-2 pl-2 pr-44 rounded-md' />
                        </div>
                        <br/>
                        <div className='flex items-center gap-4'>
                            <input type="text" placeholder='Your phone' className='border-2 border-[#FFE2D1] py-2 pl-2 pr-44 rounded-md' />
                            <input type="text" placeholder='Subject' className='border-2 border-[#FFE2D1] py-2 pl-2 pr-44 rounded-md' />
                        </div>
                        <br/>
                        <textarea name="" id="" placeholder='Your message' className='border-2 border-[#FFE2D1] py-2 pl-2 pr-[577px] pb-44 rounded-md'/>
                        <br/><br/><input type="submit" value='Send me message' className='bg-[#FF6B00] text-[21px] text-white px-[32px] py-[15px] rounded-[6px]'/>
                    </form>
                </div>
                <div>
                    <div className='flex items-center gap-5 mb-8'>
                        <img src="/img/location.png" alt="location" />
                        <div>
                            <h1 className='font-[500] text-[24px] leading-[31.2px]'>Address</h1>
                            <p className='leading-[27.2px] text-[#606060]'>202 Dog Hill Lane Beloit, KS 67420</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-8'>
                        <img src="/img/phone.png" alt="phone" />
                        <div>
                            <h1 className='font-[500] text-[24px] leading-[31.2px]'>Phone</h1>
                            <p className='leading-[27.2px] text-[#606060]'>+01589634755</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="/img/email.png" alt="" />
                        <div>
                            <h1 className='font-[500] text-[24px] leading-[31.2px]'>Email</h1>
                            <p className='leading-[27.2px] text-[#606060]'>credesign@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;