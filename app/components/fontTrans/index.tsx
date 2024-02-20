'use client'
import { Transition } from "@headlessui/react";
import { useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';


const TextTrans: FunctionComponent<{ time: string, text: React.ReactNode}> = (props) => {
    const [isShowing, setIsShowing] = useState(true)
    const transTime = "transition-opacity duration-" + props.time;

    return (
        <Transition appear={true}
            show={isShowing}
            enter={transTime}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave={transTime}
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
         {props.text}
    </Transition> 

    )


}

export default TextTrans;