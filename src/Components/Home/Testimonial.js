import React from 'react';
import { allTestimonial } from './Function';
const Testimonial = () => {
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
                <div>TESTIMONIAL</div>
            </div>
            <h1 className='mb-8 font-[700] text-[44px] leading-[57.2px] text-center my-2'>CLIENT FEEDBACK</h1>
            <div className='flex items-center gap-4'>
                {
                    allTestimonial.map((test) => (
                        <div key={test.id} className='bg-[#FFF5EF] w-[32.4%] h-[279px] rounded-md flex items-center justify-center'>
                            <div className='w-[90%]'>
                            <div className='mb-4 flex items-center gap-4'>
                                <img src={test.img} alt={test.name} />
                                <div>
                                    <h1 className='font-[500] text-[24px] leading-[31.2px]'>{test.name}</h1>
                                    <h2 className='leading-[27.2px] text-[#606060]'>{test.designation}</h2>
                                </div>
                            </div>
                            <p className='leading-[27.2px] text-[#606060]'>
                                {test.comment}
                            </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;