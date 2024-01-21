'use client'
import React from "react"
import TextTrans from "../fontTrans"
import { useState } from "react"

const OpContent = () => {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);

return (
    <div className="m-auto items-center text-white flex grid sm:grid-rows-2 gap-20">
        <TextTrans time="1000" triggerNext={()=> setShowOne(true)} text={
        <div  className="m-10 text-center max-h-8">
            <p className="text-2xl">GET STARTED WITH THE SUPERCHAIN</p>
        </div>}/>
        <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-3 gap-20">
            { showOne &&
            <TextTrans time="1000" triggerNext={()=> setShowTwo(true)}text={
               <p>GET STARTED WITH OPTIMISM</p>
               }/>
            }
            { showTwo && 
            <TextTrans time="1000" triggerNext={()=> setShowThree(true)}text={
            <p>BRIDGE ETH TO OPTIMISM</p>
            }/>
            }
            { showThree && 
            <TextTrans time="1000" triggerNext={() => null} text={
            <p>OPTIMISM AND NFTS</p>
            }/>
            }
        </div>
    </div>
    )
}

export default OpContent;