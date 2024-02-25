import React from "react";
import { FunctionComponent } from 'react';
import Image from "next/image";

const Card: FunctionComponent<{ label: string, src: string, rounded: string, width: number, shadowColor: string, shadowSize: string}> = (props) => {
    return (
            <div className="h-60 shrink m-auto text-center items-center mt-5 gap-5 flex hover:scale-105 hover:text-[#FF0420] flex-col">
            <Image        
              className={`m-auto hover:shadow-${props.shadowColor} hover:shadow-${props.shadowSize} rounded-${props.rounded}`}
              src={props.src}
              alt="Optimism city"
              width={props.width}
              height={400}
              priority
            />
            <p className="text-sm shrink">{props.label}</p>
      
            
            </div>

    )
}

export default Card;