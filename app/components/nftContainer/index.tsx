import React from "react"
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import TextTrans from "../fontTrans";

const backgrounds = [
    '/bgOne.png',
    '/bgTwo.png',
    '/bgThree.png'
]

const cats = [
    '/catOne.png',
    '/catTwo.png',
    '/catThree.png'
]

const NftContainer = () => {
    
    const [background, setBackground] = useState<string>(backgrounds[1]);
    const [cat, setCat] = useState<string>(cats[2]);

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (background && cat && ctx){
            const backgroundImage = new globalThis.Image();
            backgroundImage.onload = () =>  {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)

                const catImage = new globalThis.Image();
                catImage.onload = () => {
                    ctx.drawImage(catImage, 0, 0, canvas.width, canvas.height)
                }
            catImage.src = cat;
        }
        backgroundImage.src = background;
        }
    }, 
    [background, cat])

    return (
        <div className="m-auto flex flex-row items-center justify-between grid grid-cols-2 rounded-2xl">
         <TextTrans time="1000" triggerNext={() => null} text={   
        <div className="flex text-white flex-col items-start rounded-lg">
        <div className="p-4">
            <h3 className="pb-2">Background: </h3>
            <div className="flex flex-row items-start space-x-2">
            {backgrounds.map((bg) => (
            <Image
                className={`rounded-xl border border-${background === bg ? '[#0e04c9]' : '[#7e7d86]'}`}
                key={bg}
                alt={bg}
                src={bg}
                onClick={() => setBackground(bg)}
                width={80}
                height={100}
            />)
            )}
            </div>
        </div>
         <div className="p-4">
            <h3 className="pb-2">Cat:</h3>    
            <div className="flex flex-row items-start space-x-2">
            {cats.map((c) => (
            <Image
                className={`bg-slate-800 rounded-xl border border-${cat === c ? '[#0e04c9]' : '[#7e7d86]'}`}
                key={c}
                alt={c}
                src={c}
                onClick={() => setCat(c)}
                width={80}
                height={100}
            />)
            )}
            </div>
        </div>   
        <div className="p-4">
            <h3>
            Name your NFT:
            </h3>
        </div>
        </div>
        }/>
        <TextTrans time="1000" triggerNext={() => null} text={
        <div>
            <canvas ref={canvasRef} width="400" height="400" className="rounded-xl border-2 border-[#ffffff]" />
        </div>
        }/>
    </div>
   

    )
}

export default NftContainer;