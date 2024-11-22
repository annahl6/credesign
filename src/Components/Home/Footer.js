import React from 'react';

const Footer = () => {
    return (
        <>
        <div className='px-8 sm:px-12 py-[80px] flex justify-between bg-black text-white'>
            <div className='w-[23%]'>
                <img src="/img/Logo (1).png" alt="Logo" className='mb-5'/>
                <p className='mb-4'>
                    At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati
                </p>
                <h1 className='font-[500] text-[24px] leading-[31.2px]'>credesign@gmail.com</h1>
            </div>
            <div className=''>
                <div>
                    <h1 className='mb-8 font-[500] text-[21px] leading-[20px]'>Explore Links</h1>
                    <ul className='flex flex-col gap-y-5'>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <div>
                    <h1 className='mb-8 font-[500] text-[21px] leading-[20px]'>My Services</h1>
                    <ul className='flex flex-col gap-y-5'>
                        <li>UI/UX Design</li>
                        <li>Mobile App</li>
                        <li>Graphics Design</li>
                        <li>Web Developer</li>
                    </ul>
                </div>
            </div>
            <div className=' flex flex-col gap-y-8'>
                <h1 className='font-[500] text-[21px] leading-[20px]'>Follow Me</h1>
                <div className='flex items-center gap-4'>
                    <img src="/img/fb.png" alt="fb" />
                    <img src="/img/twitter.png" alt="tw" />
                    <img src="/img/dribbble.png" alt="dr" />
                    <img src="/img/behance.png" alt="bh" />
                </div>
                <div className='flex items-center gap-4'>
                    <img src="/img/location.png" alt="lc" />
                    <h1>202 Dog Hill Lare Beloit, KS 67420</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <img src="/img/phone.png" alt="pn" />
                    <h1>1-800-915-6270</h1>
                </div>
            </div>
        </div>
        <hr/>
        <div className='px-8 sm:px-12 flex gap-20 py-[30px] bg-black text-white'>
            <h1 className='flex-1'>All rights reserved © 2023 Credesign</h1>
            <h1>Terms & Condition</h1>
            <h1>Privacy policy</h1>
        </div>
        </>
    );
};

export default Footer;