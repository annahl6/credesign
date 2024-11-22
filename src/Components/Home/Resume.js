import React from 'react';
import { allresume } from './Function';

const Resume = () => {
    return (
        <div className='h-[1054px] px-8 sm:px-12 py-[90px] bg-gradient-to-t from-[#FFC398] to-[#FFEABE]'>
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
                <div>MY RESUME</div>
            </div>
            <h1 className='font-[700] text-[44px] leading-[57.2px] text-center my-2'>10+ YEARS OF EXPERIENCE</h1>
            <div className='my-12 flex flex-col gap-y-12'>
                {
                    allresume.map((resume) => (
                        <div key={resume.id}>
                            <h1 className='font-[500] text-[24px] leading-[31.2px] mb-4'>{resume.headline}</h1>
                            <div className='flex gap-4 items-center'>
                                {
                                    resume.details.map((detail) => (
                                        <div key={detail.key} className='bg-[#FFF] flex flex-col w-[424px] h-[189px] rounded-md p-7 gap-y-2'>
                                            <h1 className='font-[500] text-[21px] leading-[20px]'>{detail.degree}</h1>
                                            <h2 className='text-[#606060] font-[400] text-[16px] leading-[27.2px]'>{detail.university}</h2>
                                            <p className='text-[#606060] font-[400] text-[16px] leading-[27.2px]'>
                                                {detail.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Resume;