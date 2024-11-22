import React from 'react';
import { allBlog } from './Function';
const Blog = () => {
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
                <div>MY BLOG</div>                
            </div>
            <h1 className='mb-8 font-[700] text-[44px] leading-[57.2px] text-center my-2'>LATEST BLOG</h1>
            <div className="flex items-center gap-4">
                {
                    allBlog.map((blog)=>(
                        <div key={blog.id} className='h-[517px] border-2 border-[#FFE2D1] rounded-md'>
                            <img src={blog.img} alt={blog.author} className='mb-2 h-[300px] w-[100%] object-cover object-center'/>
                            <div className='p-4 ml-2'>
                                <span className='leading-[26px] text-[#6F6B80]'>{blog.date}</span>
                                <h1 className='font-[500] text-[24px] leading-[31.2px] my-6'>{blog.title}</h1>
                                <button className='font-[600] text-[16px] leading-[26px] text-[#FF6B00]'>Read More &#8594;</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;