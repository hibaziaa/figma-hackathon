import React from 'react'

const UniqueProducts = () => {
  return (
    <div className='mt-16 bg-[#F1F0FF] px-6 lg:px-20'>
        <div className=' md:flex pb-10 md:pb-0'>
            <div>
                <img src="/images/unique1.png" alt="sofa" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h2 className='text-blue font-josefin font-extrabold text-[28px] md:text-[34px] '>
                      Unique Features Of Latest &<br/>Trending Products
                    </h2>
                    <ul>
                      <li className='text-[16px] font-medium text-[#ACABC3] my-4'>
                        <span className='inline-block w-2 h-2 bg-red-500 rounded-full mr-2'></span> 
                        All frames constructed with hardwood solids and laminates
                      </li>
                      <li className='text-[16px] font-medium text-[#ACABC3] my-4'>
                        <span className='inline-block w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                        Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                      </li>
                      <li className='text-[16px] font-medium text-[#ACABC3] my-4'>
                        <span className='inline-block w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                        Arms, backs and seats are structurally reinforced
                      </li>
                    </ul>
                    
                    <div className='flex gap-x-5 mt-10'>
                        <button className='bg-pink text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium hover:bg-[#e02977] text-white'>Add To Cart</button>

                        <div>
                            <h5 className='text-blue text-[10px] md:text-[14px] font-lato font-normal'>B&B Italian Sofa</h5>
                            <h5 className='text-[10px] md:text-[14px] font-lato font-normal'>$32.00</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default UniqueProducts;
