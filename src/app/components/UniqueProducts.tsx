import React from 'react'

const UniqueProducts = () => {
  return (
    <div className='mt-10  bg-[#F1F0FF] px-6 lg:px-20'>
        <div className=' md:flex pb-10 md:pb-0'>
            <div>
                <img src="/images/unique1.png" alt="sofa" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-blue mb-8 font-josefin'>
                      Unique Features Of Latest &<br/>Trending Products
                    </h2>
                    <ul>
                      <li className='font-lato text-[#ACABC3] list-inside'>
                        <span className='inline-block w-2 h-2 bg-red-500 rounded-full mr-2'></span> 
                        All frames constructed with hardwood solids and laminates
                      </li>
                      <li className='font-lato text-[#ACABC3] list-inside'>
                        <span className='inline-block w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
                        Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
                      </li>
                      <li className='font-lato text-[#ACABC3] list-inside'>
                        <span className='inline-block w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                        Arms, backs and seats are structurally reinforced
                      </li>
                    </ul>
                    
                    <div className='flex gap-x-5 mt-10'>
                        <button className='bg-pink text-white px-4 py-2 font-josefin hover:bg-[#d1236e] rounded-sm'>Add To Cart</button>

                        <div>
                            <h5 className='text-blue font-semibold font-josefin'>B&B Italian Sofa</h5>
                            <h5>$32.00</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default UniqueProducts;
