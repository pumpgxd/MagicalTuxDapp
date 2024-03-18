import React from "react"
import { useState, useRef, useEffect } from 'react';
import TextTrans from "../fontTrans";
import { useAddress, useContract, Web3Button, darkTheme, useChainId } from "@thirdweb-dev/react";
import { toast } from 'react-hot-toast';
import { backgrounds, shadows, skins, eyes, clothes, outlines, mouths, hatsHair } from "@/app/constants/traitUrls";
import Traits from '@/app/components/traits'
import Rules from '@/app/components/rules'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

interface Trait {
    name: string;
    url: string;
  }

const NftContainer = () => {
    const collectionAddress = process.env.NEXT_PUBLIC_NFT_GEN_ADDY;
    const address  = useAddress();
    const { contract } = useContract(collectionAddress, 'nft-collection');
    const [background, setBackground] = useState<Trait>(backgrounds[1]);
    const shadow = shadows[0];
    const [skin, setSkin] = useState<Trait>(skins[3]);
    const [eye, setEye] = useState<Trait>(eyes[9]);
    const [shirt, setShirt] = useState<Trait>(clothes[3])
    const outline = outlines[0];
    const [mouth, setMouth] = useState<Trait>(mouths[1])
    const [hatHair, setHatHair] = useState<Trait>(hatsHair[1])
    const [isMinting, setIsMinting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);


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
                                hatHairImage.setAttribute("crossOrigin", "anonymous");
                                hatHairImage.src = hatHair.url;
                            }
                            mouthImage.setAttribute("crossOrigin", "anonymous");
                            mouthImage.src = mouth.url;
                        }
                        outlineImage.setAttribute("crossOrigin", "anonymous");
                        outlineImage.src = outline;
                    }
                    shirtImage.setAttribute("crossOrigin", "anonymous");
                    shirtImage.src = shirt.url;
                }
                eyeImage.setAttribute("crossOrigin", "anonymous");
                eyeImage.src = eye.url;
            }
            skinImage.setAttribute("crossOrigin", "anonymous");
            skinImage.src = skin.url;
         }
         shadowImage.setAttribute("crossOrigin", "anonymous");
        shadowImage.src = shadow;
        }
        backgroundImage.setAttribute("crossOrigin", "anonymous");
        backgroundImage.src = background.url;
        }
        canvas.toBlob
    }, 
    [background, skin, eye, shirt, mouth, hatHair])

    const uploadAndMint = async () => {
        const uploadCanvas = canvasRef.current;
        if(uploadCanvas) {
          uploadCanvas.toBlob((blob) => {
            if(blob) {
              return mint(blob)
            }
          }), 'image/png';
        }
      };


      const mint = async (blob: Blob) => {
        const loadingToast = toast.loading("Minting...")
        const formData = new FormData();
        formData.append('image', blob, 'tuxMemberNft.png');
        formData.append('address', address)
        formData.append('collectionAddy', collectionAddress)
        formData.append('background', background.name)
        formData.append('skin', skin.name)
        formData.append('eyes', eye.name)
        formData.append('shirt', shirt.name)
        formData.append('mouth', mouth.name)
        formData.append('hatHair', hatHair.name)    
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
        console.log(metadata);
        const tx = await contract?.signature.mint(metadata);
        const receipt = tx.receipt;  
        console.log(receipt)  
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
        <div className="z-1 w-full min-h-screen">
            <Rules/>
        <div className="flex w-5/6 m-auto flex-row items-center max-lg:flex-col-reverse justify-between">
         <div className="w-1/2 max-lg:w-full ">
         <TextTrans time="1000" text={   
        <div className="flex text-white m-auto w-3/4 max-lg:w-5/6 flex-col max-lg:items-center rounded-lg ">
         <div >
         <Accordion  defaultIndex={[0]}>
            <AccordionItem>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Background
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    <Traits  activeTrait={background} setTrait={setBackground} traitList={backgrounds}/> 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
 
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Skin
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel  pb={4}>
                    <Traits activeTrait={skin} setTrait={setSkin} traitList={skins}/>  
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
        
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Eyes
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Traits activeTrait={eye} setTrait={setEye} traitList={eyes}/> 
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
      
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Clothing
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
             
                <AccordionPanel pb={4}>
                    <Traits  activeTrait={shirt} setTrait={setShirt} traitList={clothes}/> 
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
             
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                     Mouth
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
             
                <AccordionPanel pb={4}>
                    <Traits  activeTrait={mouth} setTrait={setMouth} traitList={mouths}/>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
           
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                     Hat/Hair
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
         
                <AccordionPanel pb={4}>
                    <Traits activeTrait={hatHair} setTrait={setHatHair} traitList={hatsHair}/>
                </AccordionPanel>
            </AccordionItem>
            
            </Accordion>   
            
        </div>
        </div>
        }/>
        </div>
        <div className="w-1/2 max-lg:w-full "> 
        <TextTrans time="1000" text={
        <div className="flex flex-col m-auto h-5/6 pt-24 items-center max-lg:w-full w-5/6 ">
            <canvas ref={canvasRef} width="2048" height="2048" className="rounded-xl h-full w-full max-lg:w-2/3 border-2 border-[#ffffff]" />
            <div className="p-8 flex m-auto items-center">
            <Web3Button
            className="hover:bg-white hover:text-black m-auto"
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