import React from 'react';

const About = () => {
    return (
        <div className='h-[770px] px-8 sm:px-12 mt-[100px] flex items-center gap-24 mb-[100px]'>
            <div className='w-[560px]'>
                <img src='/img/about.jpg' alt='About' className='h-[770px] w-[560px] object-cover object-center' />
            </div>
            <div className='w-[645px]'>
                <div className='mb-2 flex gap-4 items-center'>
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
                    <div className=''>ABOUT ME</div>
                </div>
                <div>
                    <h1 className='font-[700] text-[44px] leading-[57.2px] mb-4'>I can Design Anything You Want</h1>
                    <p className='leading-[27.2px] text-[#606060] mb-8'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                </div>
                <div className='flex items-center mb-8 gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src='/img/tick.png' alt='tick'/>
                        <h1><span className='text-[#FF6B00] text-[21px] font-[700]'>350+</span>Complete Project</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src='/img/clock.png' alt='Experience'/>
                        <h1><span className='text-[#FF6B00] text-[21px] font-[700]'>16+</span>Years of Experience</h1>
                    </div>
                </div>
                <div>
                    <div className='flex items-center mb-2 gap-2'>
                        <img src='/img/check.png' alt='Check'/>
                        <span>Work simple and clean design</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src='/img/check.png' alt='Check'/>
                        <span>New idea and user friendly design</span>
                    </div>
                </div>
                <button className='mt-8 bg-[#FF6B00] text-[21px] text-white px-[32px] py-[15px] rounded-[6px]'>Download My CV</button>
            </div>
        </div>
    );
};

export default About;