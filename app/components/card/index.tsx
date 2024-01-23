import React from "react";
import { FunctionComponent } from 'react';
import Image from "next/image";

const Card: FunctionComponent<{ label: string, src: string, rounded: string, width: number}> = (props) => {
    return (
            <div className="h-60 shrink text-center items-center flex hover:scale-105 hover:text-[#FF0420] flex-col">
            <Image        
              className={`m-auto rounded-${props.rounded}`}
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