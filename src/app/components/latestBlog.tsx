import React from 'react';

const LatestBlog = () => {

    const blogData = [
        {
            pic: "/images/blog1.png",
            des: "SaberAli",
            des2: "21 August,2020",
            title: "Top essential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"
        },
        {
            pic: "/images/blog2.png",
            des: "Surfauxion",
            des2: "21 August,2020",
            title: "Top essential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"
        },
        {
            pic: "/images/blog3.png",
            des: "SaberAli",
            des2: "21 August,2020",
            title: "Top essential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"
        },
    ];

  return (
    <div className='md:mt-32 md:mb-32 px-20 '>
        <h2 className='text-3xl font-bold text-center text-blue mb-8'>Latest Blog</h2>
        <div className='lg:flex justify-center'>
            {blogData.map((item, index) => {
                return (
                    <div className='w-full lg:w-[350px] lg:h-[450px] mb-8 m-auto rounded-[5px] shadow-lg overflow-hidden' key={index}>
                        <div>
                            <div className='flex justify-center'>
                                <img src={item.pic} alt={item.title} className='w-full h-[255px] object-cover' />
                            </div>
                            <div className='flex justify-between px-5 my-2'>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/pen.png" alt="pen" />
                                    <h6 className='text-blue font-medium font-lato'>{item.des}</h6>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src="/images/calendar.png" alt="calendar" />
                                    <h6 className='text-blue font-medium font-lato'>{item.des2}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='ml-4 font-lato'>
                            <h3 className='text-blue font-josefin hover:text-pink'>{item.title}</h3>
                            <h4 className='mt-4 text-[#72718F]'>{item.info}</h4>
                            <h4 className='text-blue text-sm mt-4 underline hover:text-pink'>{item.footer}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default LatestBlog;
