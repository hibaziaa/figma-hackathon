import Image from "next/image";
import React from "react";

export default function BrandsImg(){
    return(
        <div className="flex items-center justify-center mt-10">
        <Image src={'/images/componentImage.png'} width={904} height={93} alt="brands-banner" />
        </div>
    )
}