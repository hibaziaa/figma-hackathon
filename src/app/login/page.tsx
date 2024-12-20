import React from 'react'
import BrandsImg from '../components/brands'

const MyAccount = () => {
  return (
    <div>
       <div className="bg-[#F6F5FF]">
        <div className="container mx-auto px-4 md:px-6 lg:px-16 pt-6 pb-6 md:pt-[50px] md:pb-[50px]">
          <h2 className="text-blue font-josefin text-3xl md:text-4xl leading-[36px] md:leading-[42.19px]">
            My Account
          </h2>
          <div className="flex gap-2 font-lato text-sm md:text-base font-medium mt-2">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink">. My Account</h4>
          </div>
        </div>
      </div>
        


        <div className='lg:container lg:px-[1.3rem] flex justify-center lg:mt-28 mt-12 mb-12 lg:mb-28'>
                <div className='shadow-primary w-[550px] lg:p-12 p-3'> 

                        <div className='text-center'>
                            <h2 className='font-josefin font-extrabold text-[28px] md:text-[34px]'>Login</h2>
                            <p className='text-[#9295AA] text-[14px] md:text-[16px]'>Please login using account detail bellow.</p>
                        </div>
                        <div className='lg:mt-9 mt-4'>
                            <input className='w-full border-gray-300 border-2 mb-6 p-2' placeholder='Email Address' type="email" name="" id="" />
                            <input className='w-full border-gray-300 border-2 p-2' placeholder='Password' type="password" name="" id="" />
                        </div>
                        <h5 className='text-[17px] text-[#9295AA] mt-3 mb-6  md:text-[14px] font-lato font-normal'>Forgot your password?</h5>
                        <button className='w-full bg-pink text-white text-[14px] md:text-[17px] md:px-11 px-8 md:py-3 py-2 rounded-sm font-josefin font-medium'>Sign In</button>
                          <h5 className='text-[17px] text-[#9295AA] text-center mt-7 md:text-[14px] font-lato font-normal'>Don’t have an Account?Create account</h5>
                </div>
        </div>

       <BrandsImg />

    </div>
  )
}

export default MyAccount;