import React from "react"
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import TextTrans from "../fontTrans";
import { useAddress, useContract, useTotalCount, Web3Button, useMintNFT, darkTheme, MediaRenderer, useNFT, ThirdwebNftMedia, useMetadata } from "@thirdweb-dev/react";


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
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDY;
    const address  = useAddress();
    const { contract } = useContract(contractAddress, 'nft-collection');
    const { data: totalCount} = useTotalCount(contract);
    const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
    // const { data: nft } = useNFT(contract, 27);
    const [background, setBackground] = useState<string>(backgrounds[1]);
    const [cat, setCat] = useState<string>(cats[2]);

    const canvasRef = useRef<HTMLCanvasElement>(null)
    console.log()

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
        
        canvas.toBlob
    }, 
    [background, cat])

    const uploadAndMint = async () => {
        const canvas = canvasRef.current;
        if(canvas) {
          canvas.toBlob((blob) => {
            if(blob) {
              return mint(blob)
            }
          }), 'image/png';
        }
      };

      const mint = async (blob: Blob) => {
        const name = "TuxMember"
        const formData = new FormData();
        formData.append('image', blob, 'tuxMemberNft.png');

        try {
            const uploadResponse = await fetch('/api/upload', {
                method: "POST",
                body: formData
            })


        const uri = await uploadResponse.json();
         console.log(uri);   

        // const nft = mintNft({
        //         to: address || "",
        //         metadata: metadata
        // })

        return contract?.mintTo(address || "", uri)


        } catch (e) {
            console.error("Error ocurred trying to mint NFT:", e)
        }
      }


    return (
        <div className="m-auto flex flex-row items-start justify-between grid grid-cols-2 rounded-2xl gap-14">
         <TextTrans time="1000" triggerNext={() => null} text={   
        <div className="flex text-white flex-col items-center rounded-lg">
        <div className="p-4">
            <h3 className="pb-2">Background: </h3>
            <div className="flex flex-row items-start space-x-2">
            {backgrounds.map((bg) => (
            <Image
                className={`rounded-xl border-2 border-${background === bg ? '[#0e04c9]' : '[#7e7d86]'}`}
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
        <div className="p-8 flex items-center  w-auto">
            <Web3Button
            contractAddress={contractAddress || ""}
            action={() => uploadAndMint()
            }
            theme={darkTheme({
                colors: {
                  accentText: "#FF0420",
                  accentButtonBg: "#FF0420",
                  modalBg: "#000000",  
                  connectedButtonBg: "#000000",
                  primaryText: "#ffffff",
                  borderColor: "#FF0420",
                  primaryButtonBg: "#FF0420",
                  primaryButtonText: "#ffffff",
                  secondaryButtonText: "#ffffff",
            }})}>
                MINT NFT
            </Web3Button>
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