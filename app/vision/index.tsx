'use client'
import React from "react"
import ImageContent from "../components/imageContent";
import TextTrans from "../components/fontTrans";
const Vision = () => {
    return (
        <div id="vision" className="m-auto flex flex-col w-full h-svh">
            <div className="flex max-md:flex-col flex-row items-center text-center justify-between h-full">
                <div className="w-1/2 h-full max-md:hidden text-xl text-center flex flex-col items-center text-white text-pretty">
                    <div className="m-auto w-3/4 flex-col flex">
                        <p className="text-4xl pb-10">ROADMAP</p>   
                        <p>ROADMAPPP HEREEEEEE!!!!</p>
                    </div>
                </div>
                <div className="h-full w-1/2 max-md:w-full rounded-lg shrink flex overflow-hidden">
                    <div className="flex flex-col items-center text-center m-auto h-5/6 py-6 justify-between">
                    <p className="text-3xl z-40 [text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]">VISION</p>
                    <div>
                        <div className="relative">
                        <div className="w-1/2 rounded-full h-1/4 absolute top-36 ml-[110px] bg-[#FF0420] overflow-hidden -z-10"></div>
                        <ImageContent src="/main-cat.svg" borderRadius="rounded-full shadow-[0_0_0_1000px_rgba(255,4,32,1.0)]"/>
                        </div>
                    </div>   
                    <div className="w-3/4 flex-col z-50 flex gap-2">
                        <p className="[text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]">Embracing the power of humor and creativity, Tux aims to connect Optimism users through memes and art, transcending traditional boundaries in the crypto space.</p>
                        <p className="[text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]">By infusing joy and expression into community-building efforts, Tux ensures that everyone feels a sense of belonging on the superchain.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Vision;