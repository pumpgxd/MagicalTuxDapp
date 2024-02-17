import React from 'react';
import { useEffect, useState } from 'react'
import { useAddress, useChainId, useWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia } from '@thirdweb-dev/react';


const PortfolioContainer = () => {
    const address  = useAddress();
    const chainId = useChainId();
    const [userNfts, setUserNfts] = useState<any[]>([]);

    useEffect(() => {
        const fetchNfts = async () => {
            const requestBody = {
                walletAdd: address,
                chain: chainId
            }
            console.log(requestBody);
            const response = await fetch('/api/getNfts', {
                method: "POST",
                body: JSON.stringify(requestBody)
            })
            const json = await response.json();
            console.log(json.ownedNfts)
            setUserNfts(json.ownedNfts);
            
        }
        if (address && chainId ){
            fetchNfts()
          
        }
    }, [address, chainId])


    return (
        <div className="m-auto text-center z-0 w-5/6">
            {/* <div className="p-16">
            <p className="text-xl">NFT PORTFOLIO</p>
            </div> */}
            {userNfts  && 
            <div className="pt-10 flex m-auto flex-wrap items-center justify-center z-0">
            {userNfts.filter(i => i.raw.metadata.image != null).map((nft) => (
                    <div key={nft.tokenId} className="mx-4 my-4 flex h-80 w-64 cursor-pointer flex-col rounded-lg border border-white items-center justify-center gap-5 bg-transparent transition-all duration-300 hover:scale-105 hover:z-0">
                        <ThirdwebNftMedia
                        height="100%"
                        width='100%'
                        metadata={nft.raw.metadata}
                        className="h-56 w-56 rounded-lg"
                        />
                 
                    <h1 className='pb-5'>{nft.raw.metadata.name}</h1>
                   
                </div>
             
            ))}
          </div>
        }
        </div>
    )

}

export default PortfolioContainer;