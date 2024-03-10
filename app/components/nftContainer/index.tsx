import React from "react"
import { useState, useRef, useEffect } from 'react';
import TextTrans from "../fontTrans";
import { useAddress, useContract, Web3Button, darkTheme, useChainId } from "@thirdweb-dev/react";
import { toast } from 'react-hot-toast';
import { backgrounds, shadows, skins, eyes, clothes, outlines, mouths, hatsHair } from "@/app/constants/traitUrls";
import Traits from '@/app/components/traits'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'


const NftContainer = () => {
    const collectionAddress = process.env.NEXT_PUBLIC_NFT_GEN_ADDY;
    const address  = useAddress();
    const { contract } = useContract(collectionAddress, 'nft-collection');
    const [background, setBackground] = useState<string>(backgrounds[1]);
    const [shadow, setShadow] = useState<string>(shadows[0]);
    const [skin, setSkin] = useState<string>(skins[3]);
    const [eye, setEye] = useState<string>(eyes[9]);
    const [shirt, setShirt] = useState<string>(clothes[3])
    const [outline, setOutline] = useState<string>(outlines[0])
    const [mouth, setMouth] = useState<string>(mouths[1])
    const [hatHair, setHatHair] = useState<string>(hatsHair[1])
    const [isMinting, setIsMinting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const uploadCanvasRef = useRef<HTMLCanvasElement>(null);
    const chainId = useChainId();
    const originalDim = 2048;



    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const uploadCanvas = uploadCanvasRef.current;
        const uploadCtx = uploadCanvas.getContext('2d');
        

        if (background && skin && eye && shirt && ctx){
            const backgroundImage = new globalThis.Image();
            backgroundImage.onload = () =>  {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
                uploadCtx.clearRect(0, 0, originalDim, originalDim);
                uploadCtx.drawImage(backgroundImage, 0, 0, originalDim, originalDim);
                const shadowImage = new globalThis.Image();
                shadowImage.onload = () => {
                    ctx.drawImage(shadowImage, 0, 0, canvas.width, canvas.height)
                    uploadCtx.drawImage(shadowImage, 0, 0, originalDim, originalDim);

                const skinImage = new globalThis.Image();
                skinImage.onload = () => {
                    ctx.drawImage(skinImage, 0, 0, canvas.width, canvas.height)
                    uploadCtx.drawImage(skinImage, 0, 0, originalDim, originalDim);

                
                const eyeImage = new globalThis.Image();
                eyeImage.onload = () => {
                    ctx.drawImage(eyeImage, 0, 0, canvas.width, canvas.height)
                    uploadCtx.drawImage(eyeImage, 0, 0, originalDim, originalDim);

                    const shirtImage = new globalThis.Image();
                    shirtImage.onload = () => {
                        ctx.drawImage(shirtImage, 0, 0, canvas.width, canvas.height)
                        uploadCtx.drawImage(shirtImage, 0, 0, originalDim, originalDim);

                        const outlineImage = new globalThis.Image();
                        outlineImage.onload = () => {
                            ctx.drawImage(outlineImage, 0, 0, canvas.width, canvas.height)
                            uploadCtx.drawImage(outlineImage, 0, 0, originalDim, originalDim);

                            const mouthImage = new globalThis.Image();
                            mouthImage.onload = () => {
                                ctx.drawImage(mouthImage, 0, 0, canvas.width, canvas.height)
                                uploadCtx.drawImage(mouthImage, 0, 0, originalDim, originalDim);

                                const hatHairImage = new globalThis.Image();
                                hatHairImage.onload = () => {
                                    ctx.drawImage(hatHairImage, 0, 0, canvas.width, canvas.height)
                                    uploadCtx.drawImage(hatHairImage, 0, 0, originalDim, originalDim);

                                }
                                hatHairImage.setAttribute("crossOrigin", "anonymous");
                                hatHairImage.src = hatHair;
                            }
                            mouthImage.setAttribute("crossOrigin", "anonymous");
                            mouthImage.src = mouth;
                        }
                        outlineImage.setAttribute("crossOrigin", "anonymous");
                        outlineImage.src = outline;
                    }
                    shirtImage.setAttribute("crossOrigin", "anonymous");
                    shirtImage.src = shirt;
                }
                eyeImage.setAttribute("crossOrigin", "anonymous");
                eyeImage.src = eye;
            }
            skinImage.setAttribute("crossOrigin", "anonymous");
            skinImage.src = skin;
         }
         shadowImage.setAttribute("crossOrigin", "anonymous");
        shadowImage.src = shadow;
        }
        backgroundImage.setAttribute("crossOrigin", "anonymous");
        backgroundImage.src = background;
        }
        canvas.toBlob
        uploadCanvas.toBlob;
    }, 
    [background, skin, eye, shirt, mouth, hatHair])

    const uploadAndMint = async () => {
        const uploadCanvas = uploadCanvasRef.current;
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
        <div className="z-1 w-full pt-5">
        <div className="w-5/6 m-auto"> 
        <div className="flex w-full flex-row items-start justify-between">
         <TextTrans time="1000" text={   
        <div className="flex text-white flex-col items-start rounded-lg py-auto">
         <div className ="flex flex-col w-3/4 pt-10 justify-between">
         <Accordion defaultIndex={[0]}>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Background
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits  activeTrait={background} setTrait={setBackground} traitList={backgrounds}/> 
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Skin
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits activeTrait={skin} setTrait={setSkin} traitList={skins}/>  
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Eyes
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits activeTrait={eye} setTrait={setEye} traitList={eyes}/> 
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                    Clothing
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits  activeTrait={shirt} setTrait={setShirt} traitList={clothes}/> 
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                     Mouth
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits  activeTrait={mouth} setTrait={setMouth} traitList={mouths}/>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton _expanded={{color: '#FF0420' }}>
                    <Box as="span" flex='1' textAlign='left'>
                     Hat/Hair
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Traits activeTrait={hatHair} setTrait={setHatHair} traitList={hatsHair}/>
                </AccordionPanel>
            </AccordionItem>
            
            </Accordion>   
            
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
               { !isMinting ? "MINT" :
                    "MINTING..."
                 }  
            </Web3Button>
        </div>
        </div>
        }/>
        </div>
        </div>
        <canvas hidden ref={uploadCanvasRef} width="2048" height="2048" />
    </div>
   

    )
}

export default NftContainer;