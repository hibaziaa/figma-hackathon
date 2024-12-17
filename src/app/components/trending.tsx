import React from 'react'

const Trending = () => {
    const trending = [
        {
            pic: "/images/trending1.png",
            title: "Cantilever chair",
            offerPrice: "$26.00",
            regularPrice: "$42.00"
        },
        {
            pic: "/images/trending2.png",
            title: "Cantilever chair",
            offerPrice: "$26.00",
            regularPrice: "$42.00"
        },
        {
            pic: "/images/trending3.png",
            title: "Cantilever chair",
            offerPrice: "$26.00",
            regularPrice: "$42.00"
        },
        {
            pic: "/images/trending4.png",
            title: "Cantilever chair",
            offerPrice: "$26.00",
            regularPrice: "$42.00"
        },
    ]

    const executiveData = [
        {
            pic: "/images/execute1.png",
            title: "Executive Seat chair",
            price: "$32.00"
        },
        {
            pic: "/images/execute2.png",
            title: "Executive Seat chair",
            price: "$32.00"
        },
        {
            pic: "/images/execute3.png",
            title: "Executive Seat chair",
            price: "$32.00"
        },
      ]


  return (
    <div className='md:mt-32 md:mb-32 px-6 lg:px-20 max-w-screen-lg mx-auto'>
    <h1 className='text-3xl font-bold text-center text-blue mb-8 font-josefin'>Trending Products</h1>
    <div className='md:flex gap-6'>
        {trending.map((item) => {
            return <div className='shadow-[#E7E6EF] h-[350px] md:w-[270px] p-3 mb-8 md:mb-0'>
                <div>
                    <div className='bg-[#F5F6F8] grid justify-center items-center h-[227px]'>
                        <img src={item.pic} alt="trending product" />
                    </div>
                    <div className='text-center text-blue mt-5'>
                        <div>
                            <h4 className='font-bold'>{item.title}</h4>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <h5 className='font-semibold'>{item.offerPrice}</h5>
                            <h6 className='text-xs font-semibold text-[#1518754D] line-through'>{item.regularPrice}</h6>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>

    <div className='md:flex gap-6 mt-7'>
        <div className='bg-[#FFF6FB] md:w-[420px] h-[270px] p-6 mb-8'>
            <h3 className='text-blue font-josefin'>23% off in all products</h3>
            <h4 className='text-pink font-lato font-semibold'>Shop Now</h4>
            <div className='grid justify-end'>
                <img src="/images/sale23-1.png" alt="sale item" />
            </div>
        </div>

        <div className='bg-[#EEEFFB] md:w-[420px] h-[270px] p-6 mb-8'>
            <h3 className='text-blue font-josefin'>23% off in all products</h3>
            <h4 className='text-pink font-lato font-semibold'>View Collection</h4>
            <div className='grid justify-end'>
                <img src="/images/sale23-2.png" alt="sale item" />
            </div>
        </div>

        <div className=''>
            {executiveData.map((item) => {
            return <div className=''>
                <div className='flex items-center pb-6'>
                <div className='bg-[#F5F6F8] h-[74px] w-[107px] mr-[9px] grid justify-center gap-y-4 items-center'>
                    <img src={item.pic} alt="chair" />
                </div>
                <div className='flex items-center h-full'>
                    <div>
                        <h5 className='text-blue font-josefin font-semibold'>{item.title}</h5>
                        <h6 className='text-blue font-josefin font-medium text-sm'>{item.price}</h6>
                    </div>
                </div>
                </div>
            </div>
            })}
        </div>
    </div>
</div>


  )
}

export default Trending;