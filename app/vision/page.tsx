'use client'
import React from "react"
import ImageContent from "../components/imageContent";
import TextTrans from "../components/fontTrans";
const Vision = () => {
    return (
        <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-2 gap-20">
        <TextTrans time="1000" triggerNext={()=>null} text={
        <div className="max-w-sm text-xl text-center text-white text-pretty">
        <p>
        Magical Tux is committed to building a vibrant and inclusive community.
        </p>
        <br/>
        <p>
        Embracing the power of humor and creativity, Tux aims to connect Optimism users through memes and art, transcending traditional boundaries in the crypto space.
        </p>
        <br/>
        <p>
        By infusing joy and expression into community-building efforts, Tux ensures that everyone feels a sense of belonging on the superchain.
        </p>
        </div>
        }></TextTrans>
            <ImageContent src="/main-cat.svg" borderRadius="rounded-full"/>
        </div>
    )

}

export default Vision;