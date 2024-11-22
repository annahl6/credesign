import React from 'react';
import { allportfolioimgs } from './Function';

const Portfolio = () => {
    return (
        <div className='p-8 sm:p-12'>
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
                <div>MY PORTFOLIO</div>
            </div>
            <h1 className='mb-4 font-[700] text-[44px] leading-[57.2px] text-center my-2'>Visit My Portfolio</h1>
            <div className='flex gap-4 flex-wrap'>
                {
                    allportfolioimgs.map((img)=>(
                        <img key={img.id} src={img.src} alt={img.alt} className='w-[32.4%]'/>
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;