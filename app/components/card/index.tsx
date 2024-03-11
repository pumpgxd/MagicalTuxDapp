import React from "react";
import { FunctionComponent } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion'

const Card: FunctionComponent<{ label: string, src: string, rounded: string, width: number}> = (props) => {
    return (
      <motion.div initial={{x: 0}} 
                  whileHover={{ y: -50 }}>
            <div className="h-60 shrink m-auto text-center items-center mt-5 gap-5 flex hover:scale-105 hover:text-[#FF0420] hover:shadow-${props.shadowColor} flex-col">
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
            </motion.div>

    )
}

export default Card;