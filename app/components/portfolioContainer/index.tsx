import React from 'react';
import { useEffect, useState } from 'react'
import { useAddress } from "@thirdweb-dev/react";
import { ThirdwebNftMedia } from '@thirdweb-dev/react';
import { Spinner } from '@chakra-ui/react'
import TextTrans from '../fontTrans';
import WalletButton from '../navigation/navbar/walletButton';

const PortfolioContainer = () => {
    const address  = useAddress();
    const [userNfts, setUserNfts] = useState<any[]>([]);
    const [noNfts, setNoNfts] = useState(false);

    useEffect(() => {
        const fetchNfts = async () => {
            setNoNfts(false)
            const requestBody = {
                walletAdd: address
            }
            const response = await fetch('/api/getNfts', {
                method: "POST",
                body: JSON.stringify(requestBody)
            })
            const json = await response.json();
            const finalResponse = json.ownedNfts.filter(i => i.raw.metadata.image!=null);
            if (finalResponse.length == 0){
                setNoNfts(true)
            }
            setUserNfts(finalResponse);
            
        }
        if (address){
            fetchNfts()
        }
    }, [address])

    const renderUserNfts = (nfts:any)=> {
        return (
            !noNfts ? 
            nfts.map((nft) => (
                <TextTrans key={nft.tokenId} time="1000"  text={
                <div key={nft.tokenId} className="mx-4 my-4 flex h-80 w-64 cursor-pointer flex-col rounded-lg border border-white items-center justify-center gap-5 bg-transparent transition-all duration-300 hover:scale-105 hover:z-0">
                    <ThirdwebNftMedia
                    key={nft.tokenId}
                    height="100%"
                    width='100%'
                    metadata={nft.raw.metadata}
                    className="h-56 w-56 rounded-lg"
                    />
                    <h1 className='pb-5'>{nft.raw.metadata.name}</h1>
                </div>
                }/>
         
        ))
            : <TextTrans time="1000" text={<h1>You don&apos;t own any NFTs on Optimism!</h1>}/>
        )
    }

    return (
        <div className="m-auto text-center z-0 w-5/6">
        
            {(userNfts && address)  && 
                <div className="pt-10 flex m-auto flex-wrap items-center justify-center z-0">
                { renderUserNfts(userNfts)}
            </div>
            }
             {(userNfts.length == 0  && !noNfts && address)&&
                <Spinner size="xl" color='white' />}
         
            { !address && 
                <TextTrans time="1000" text={
                <div className="m-auto flex flex-col text-end items-center gap-y-6">
                <h1 className="text-center text-xl">Connect wallet to view your Optimistic NFTs!</h1>
                    <WalletButton/>

                </div>
                }/>
            }
            </div>
    )

}

export default PortfolioContainer;