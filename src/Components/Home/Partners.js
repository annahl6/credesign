import React from 'react';

const Partners = () => {
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
                <div>PARTNERS</div>
            </div>
            <h1 className='mb-8 font-[700] text-[44px] leading-[57.2px] text-center my-2'>REPUTED PARTNERS</h1>
            <div className='flex gap-4 items-center'>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/brainstorm.png" alt="brain"/></div>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/astra.png" alt="astra" /></div>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/happy.png" alt="happy"/></div>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/flower.png" alt="flower"/></div>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/apple.png" alt="apple"/></div>
                <div className='w-[16%] h-[130px] border-2 border-[#FFE2D1] flex items-center justify-center'><img src="/img/brainstorm.png" alt="brain"/></div>
            </div>
        </div>
    );
};

export default Partners;