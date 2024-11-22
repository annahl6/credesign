import React from 'react';

const Banner = () => {
    return (
        <div className='h-[850px] flex items-center justify-between gap-4 px-8 sm:px-12
        bg-gradient-to-t from-[#FFC398] to-[#FFEABE]'>
            <div className='w-[678px]'>
                <div className='flex gap-4 items-center'>
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
                    <div>I AM A DESIGNER</div>
                </div>
                <div className='font-[700] text-[70px] leading-[95px] mb-4'>
                    Creative Design and Web Solutions
                </div>
                <div className='text-[18px] leading-[30.6px] mb-8'>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
                </div>
                <div>
                    <button className='bg-[#FF6B00] text-[21px] text-white px-[32px] py-[15px] rounded-[6px]'>Download My CV</button>
                </div>
            </div>
            <div className='w-[606.79px]'>
                <img src='/img/banner.jpg' alt='banner' className='
                w-[606.79px] h-[849px]
                '/>
            </div>
        </div>
    );
};

export default Banner;