'use client'
import React from "react"
import TextTrans from "../fontTrans"
import Image from "next/image"
import Card from "../card"

const OpContent = () => {

return (
    <div className="w-full h-screen">
        <div className="h-full m-auto mt-20">
    <TextTrans time="1000"  text={
    <div className="h-full items-center text-white flex flex-col justify-evenly gap-20 z-0">
        <div  className="text-center items-center flex grid sm:grid-rows-2 ">
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
                <div className="flex flex-col items-center justify-between grid sm:grid-cols-3 z-0 gap-24">
                <a  href="https://app.optimism.io/superchain"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Card label={"GET STARTED WITH OPTIMISM"} src="/OP-Logo.svg" width={180} rounded="full"/>
                </a>
                <a  href="https://app.optimism.io/bridge/deposit"
                    target="_blank"
                    rel="noopener noreferrer">
                <Card label={"BRIDGE ETH TO OPTIMISM"} src="/optimism-city.png"  width={270} rounded="none"/>
                </a>
                <a href="https://www.optimism.io/apps/nfts">
                <Card label={"OPTIMISM AND NFTS"} src="/tuxNft.jpeg" width={190} rounded="full"/>
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