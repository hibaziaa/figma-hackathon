import React from 'react'
import DemoProduct from './demoProduct'
import ShippingInfo from './shippingInfo'

const Demo = () => {
  return (
    <div>

      <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            Hekto Demo
          </h2>
        </div>
      </div>
      <div className=' lg:px-20 px-10 lg:flex justify-center gap-8 lg:mb-32'>
            <div className=' lg:w-[770px]'>
                <ShippingInfo/>
            </div>

            <div className='lg:w-[400px] '>
                <DemoProduct/>
            </div>
        </div>
    </div>
  )
}

export default Demo;