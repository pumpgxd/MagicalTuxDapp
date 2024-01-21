'use client'
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

import { Web3Button } from "@web3modal/react";
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
            className={props.borderRadius}
             src={props.src}
             alt="Tux cat"
             width={500}
             height={500}
             priority
          />
        </div>
    </Transition> 

    
    )


}

export default ImageContent;