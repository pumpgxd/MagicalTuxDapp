import React from "react"
import { useState, useRef, useEffect } from 'react';
import NextImage from "next/image";
import TextTrans from "../fontTrans";
import { useAddress, useContract, useTotalCount, Web3Button, useMintNFT, darkTheme, MediaRenderer, useNFT, ThirdwebNftMedia, useMetadata, useNFTs } from "@thirdweb-dev/react";
import { toast } from 'react-hot-toast';
import { chakra } from "@chakra-ui/react";
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

const NftTrait = chakra(NextImage, {
    baseStyle: { maxH: 120, maxW: 120 },
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'onClick'].includes(prop),
  })


const NftContainer = () => {
    const contractAddress = process.env.NEXT_PUBLIC_NFT_GEN_ADDY;
    const address  = useAddress();
    const { contract } = useContract(contractAddress, 'nft-collection');
    // const { data: nft } = useNFT(contract, 27);
    // const { mutate: mintNft, isLoading, error} = useMintNFT(contract)
    const [background, setBackground] = useState<string>('/bgTwo.png');
    const [cat, setCat] = useState<string>('/catThree.png');
    const [isMinting, setIsMinting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null)
    // const [mintingText, setMintingText] = useState<string>('MINTING');

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
        const loadingToast = toast.loading("Minting...")
        const name = "TuxMember" 
        const formData = new FormData();
        formData.append('image', blob, 'tuxMemberNft.png');

        try {
            const uploadResponse = await fetch('/api/upload', {
                method: "POST",
                body: formData
            })


        const metadata = await uploadResponse.json();
        const tx = await contract?.mintTo(address || "", metadata)
       
        const nft = await tx?.data();  
        console.log(tx?.receipt)  
        console.log(nft);
        toast.dismiss(loadingToast);
        handleSuccessMint();
        return nft;     

        } catch (e) {
            toast.dismiss(loadingToast);
            handleErrorMint()
            console.error("Error ocurred trying to mint NFT:", e)
            return;
        }
      }

      const handleSuccessMint = () => {
        toast.success("NFT Successfully Minted!")
        setIsMinting(false);
      }


      const handleErrorMint = () => {
        toast.error("Transaction Rejected")
        setIsMinting(false);
      }


    return (
        <div className="m-auto flex flex-row items-start justify-between grid grid-cols-2 rounded-2xl gap-14 z-1">
         <TextTrans time="1000" triggerNext={() => null} text={   
        <div className="flex text-white flex-col items-center rounded-lg">
        <div className="p-4">
            <h3 className="pb-2">Background: </h3>
            <div className="flex flex-row items-start space-x-2">
            {backgrounds.map((bg) => (
            <NftTrait
                className="rounded-xl"
                key={bg}
                alt={bg}
                src={bg}
                borderWidth={1}
                borderStyle="solid"
                borderColor={background === bg ? '#0e04c9' : "white"}
                onClick={() => setBackground(bg)}
                width={100}
                height={100}
            />)
            )}
            </div>
        </div>
         <div className="p-4">
            <h3 className="pb-2">Cat:</h3>    
            <div className="flex flex-row items-start space-x-2">
            {cats.map((c) => (
            <NftTrait
                borderWidth={1}
                borderStyle="solid"
                borderColor={cat === c ? '#0e04c9' : "white"}
                className="bg-slate-800 rounded-xl"
                key={c}
                alt={c}
                src={c}
                onClick={() => setCat(c)}
                width={100}
                height={100}
            />)
            )}
            </div>
        </div>   
        <div className="p-8 flex items-center  w-auto">
            <Web3Button
            className="hover:bg-white hover:text-black"
            contractAddress={contractAddress || ""}
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
                  borderColor: "#FF0420",
                  primaryButtonBg: isMinting ? "#000000" : "#FF0420",
                  primaryButtonText: "#ffffff",
                  secondaryButtonText: "#ffffff",
            }})}>
               { !isMinting ? "MINT NFT" :
                    "MINTING..."
                 }  
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