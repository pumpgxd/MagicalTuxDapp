import React from 'react';
import { useEffect, useState } from 'react'
import { useAddress, useChainId } from "@thirdweb-dev/react";

const PortfolioContainer = () => {
    const address  = useAddress();
    const chainId = useChainId();
    const [userNfts, setUserNfts] = useState(null);

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
            console.log(json);
            setUserNfts(json);
        }
        if (address && chainId ){
            fetchNfts()
        }
        console.log(userNfts);
    }, [])


    return (
        <div className="text-center">
            <h1>Your NFTs</h1>

        </div>
    )

}

export default PortfolioContainer;