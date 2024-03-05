'use client'

import { Transition } from "@headlessui/react";
import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import { FunctionComponent } from 'react';


const ImageContent: FunctionComponent<{ src: string, borderRadius: string}> = (props) => {
    const [isShowing, setIsShowing] = useState(true)

    return (
    <Transition appear={true}
        show={isShowing}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
    <div>
          <Image
            className={props.borderRadius + " w-full h-auto"}
             src={props.src}
             alt="Tux cat"
             sizes="100vw"
             height="0"
             width="0"
             priority
             
          />
        </div>
    </Transition> 

    
    )


}

export default ImageContent;