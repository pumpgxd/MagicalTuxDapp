import React from "react"
import { useState, useRef, useEffect } from 'react';
import NextImage from "next/image";
import TextTrans from "../fontTrans";
import { useAddress, useContract, useTotalCount, Web3Button, useMintNFT, darkTheme, MediaRenderer, useNFT, ThirdwebNftMedia, useMetadata, useNFTs, useTokenBalance, useChainId, ContractRoles } from "@thirdweb-dev/react";
import { toast } from 'react-hot-toast';
import { chakra } from "@chakra-ui/react";
import { backgrounds, shadows, skins, eyes, clothes, outlines, mouths, hatsHair } from "@/app/constants/traitUrls";
import Traits from '@/app/components/traits'
import { global } from "styled-jsx/css";


const NftTrait = chakra(NextImage, {
    baseStyle: { maxH: 120, maxW: 120 },
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'onClick', 'onHover'].includes(prop),
  })


const NftContainer = () => {
    const collectionAddress = process.env.NEXT_PUBLIC_NFT_GEN_ADDY;
    const address  = useAddress();
    const { contract } = useContract(collectionAddress, 'nft-collection');
    const [background, setBackground] = useState<string>(backgrounds[0]);
    const [shadow, setShadow] = useState<string>(shadows[0]);
    const [skin, setSkin] = useState<string>(skins[0]);
    const [eye, setEye] = useState<string>(eyes[0]);
    const [shirt, setShirt] = useState<string>(clothes[0])
    const [outline, setOutline] = useState<string>(outlines[0])
    const [mouth, setMouth] = useState<string>(mouths[0])
    const [hatHair, setHatHair] = useState<string>(hatsHair[0])
    const [isMinting, setIsMinting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const chainId = useChainId();
    // const [mintingText, setMintingText] = useState<string>('MINTING');



    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (background && skin && eye && shirt && ctx){
            const backgroundImage = new globalThis.Image();
            backgroundImage.onload = () =>  {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)

                const shadowImage = new globalThis.Image();
                shadowImage.onload = () => {
                    ctx.drawImage(shadowImage, 0, 0, canvas.width, canvas.height)
             
                const skinImage = new globalThis.Image();
                skinImage.onload = () => {
                    ctx.drawImage(skinImage, 0, 0, canvas.width, canvas.height)
                
                
                const eyeImage = new globalThis.Image();
                eyeImage.onload = () => {
                    ctx.drawImage(eyeImage, 0, 0, canvas.width, canvas.height)

                    const shirtImage = new globalThis.Image();
                    shirtImage.onload = () => {
                        ctx.drawImage(shirtImage, 0, 0, canvas.width, canvas.height)

                        const outlineImage = new globalThis.Image();
                        outlineImage.onload = () => {
                            ctx.drawImage(outlineImage, 0, 0, canvas.width, canvas.height)

                            const mouthImage = new globalThis.Image();
                            mouthImage.onload = () => {
                                ctx.drawImage(mouthImage, 0, 0, canvas.width, canvas.height)

                                const hatHairImage = new globalThis.Image();
                                hatHairImage.onload = () => {
                                    ctx.drawImage(hatHairImage, 0, 0, canvas.width, canvas.height)
                                }
                                hatHairImage.src = hatHair;
                            }
                            mouthImage.src = mouth;
                        }
                        outlineImage.src = outline;
                    }
                    shirtImage.src = shirt;
                }
                eyeImage.src = eye;
            }
            skinImage.src = skin;
         }
        shadowImage.src = shadow;
        }
        backgroundImage.src = background;
        }
        
        canvas.toBlob
    }, 
    [background, skin, eye, shirt, mouth, hatHair])

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
        const loadingToast = toast.loading("Minting...")
        const name = "TuxMember" 
        const formData = new FormData();
        formData.append('image', blob, 'tuxMemberNft.png');
        formData.append('address', address)
        formData.append('collectionAddy', collectionAddress)
        console.log(formData);
        console.log(chainId);
        try {
            const uploadResponse = await fetch('/api/signUpload', {
                method: "POST",
                body: formData
            }
            )


        const metadata = await uploadResponse.json();
        if (metadata.error != null){
            toast.dismiss(loadingToast);
            handleErrorMint(metadata.error);
            return;
        }
        console.log(metadata)
        // const tx = await contract?.mintTo(address || "", metadata)
        const tx = await contract?.signature.mint(metadata);
        const receipt = tx.receipt;  
        console.log(tx?.receipt)  
        console.log(tx);
        toast.dismiss(loadingToast);
        handleSuccessMint();
        return tx;     

        } catch (e) {
            toast.dismiss(loadingToast);
            handleErrorMint("Error ocurred trying to mint NFT")
            console.error("Error ocurred trying to mint NFT:", e)
            return;
        }
      }

      const handleSuccessMint = () => {
        toast.success("NFT Successfully Minted!")
        setIsMinting(false);
      }


      const handleErrorMint = (message: string) => {
        toast.error(message)
        setIsMinting(false);
      }


    return (
        <div className="z-1 w-full pt-5">
        <div className="w-5/6 m-auto"> 
        <div className="flex w-full flex-row items-start justify-between">
         <TextTrans time="1000" text={   
        <div className="flex text-white flex-col items-start rounded-lg py-auto">
         <div className ="flex flex-col w-3/4 justify-between">   
            <Traits label="Background" activeTrait={background} setTrait={setBackground} traitList={backgrounds}/> 
            <Traits label="Skin" activeTrait={skin} setTrait={setSkin} traitList={skins}/>  
            <Traits label="Eyes" activeTrait={eye} setTrait={setEye} traitList={eyes}/> 
            <Traits label="Clothing" activeTrait={shirt} setTrait={setShirt} traitList={clothes}/> 
            <Traits label="Mouth" activeTrait={mouth} setTrait={setMouth} traitList={mouths}/>
            <Traits label="Hat/Hair" activeTrait={hatHair} setTrait={setHatHair} traitList={hatsHair}/>
        </div>
        </div>
        }/>
        <TextTrans time="1000" text={
        <div className="flex flex-col items-center w-5/6">
            <canvas ref={canvasRef} width="600" height="600" className="rounded-xl border-2 border-[#ffffff]" />
            <div className="p-8 flex items-center w-auto">
            <Web3Button
            className="hover:bg-white hover:text-black"
            contractAddress={collectionAddress || ""}
            action={async () => await uploadAndMint()
            }
            isDisabled={isMinting}
            onSubmit={() => setIsMinting(true)}
            theme={darkTheme({
                colors: {
                  accentText: "#FF0420",
                  accentButtonBg: "#FF0420",
                  modalBg: "#000000",  
                  connectedButtonBg: "#000000",
                  primaryText: "#ffffff",
                  primaryButtonBg: isMinting ? "#000000" : "#FF0420",
                  primaryButtonText: "#ffffff",
                  secondaryButtonText: "#ffffff",
            }})}>
               { !isMinting ? "MINT | .01 ETH" :
                    "MINTING..."
                 }  
            </Web3Button>
        </div>
        </div>
        }/>
        </div>
        </div>
    </div>
   

    )
}

export default NftContainer;