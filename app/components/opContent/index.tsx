'use client'
import React from "react"
import TextTrans from "../fontTrans"
import Image from "next/image"
import Card from "../card"

const OpContent = () => {

return (
    <div className="w-full min-h-screen pb-10">
        <div className="h-full m-auto mt-12 ">
    <TextTrans time="1000"  text={
    <div className="h-full items-center text-white flex flex-col justify-evenly gap-20 z-0">
        <div  className="text-center items-center w-5/6 gap-2 flex grid grid-rows-2 ">
            <p className="text-2xl">WELCOME TO THE SUPERCHAIN</p>
            <div className="m-auto">
            <Image       
              src="/Optimism-Red-48.svg"
              alt="Optimism word logo"
              width={600}
              height={200}
              priority
            />
            </div>
        </div>
        <div className="m-auto">
                <div className="flex flex-row items-center max-lg:flex-col z-0 gap-36">
                <a  href="https://optimism.io/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card label={"GET STARTED WITH OPTIMISM"} src="/OP-Logo.svg" width={180} rounded="full"/>
                </a>
                <a  href="https://app.optimism.io/bridge/deposit"
                    target="_blank"
                    rel="noopener noreferrer">
                <Card label={"BRIDGE ETH TO OPTIMISM"} src="/optimism-city.png"  width={270} rounded="none"/>
                </a>
                <a href="https://www.optimism.io/dapps">
                <Card label={"OPTIMISM ECOSYSTEM"} src="/tuxNft.jpeg" width={190} rounded="full"/>
                </a>
                </div>
        </div>
    </div>
      }/>
      </div>
      </div>
    )
}

export default OpContent;