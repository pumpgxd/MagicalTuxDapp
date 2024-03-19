import { Network, Alchemy } from 'alchemy-sdk';
import { NextRequest, NextResponse } from 'next/server';

const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.OPT_MAINNET,
    mode: "no-cors"
};


export async function POST(req: NextRequest){
    const alchemy = new Alchemy(settings);
    const requestBody = await req.json();

    const walletAddress = requestBody.walletAdd;


    // Print total NFT count returned in the response:
    const nftsForOwner = await alchemy.nft.getNftsForOwner(walletAddress);
    // console.log("number of NFTs found:", nftsForOwner.totalCount);
    // console.log("...");

    // Print contract address and tokenId for each NFT:
    // for (const nft of nftsForOwner.ownedNfts) {     
    // console.log(nft)
    // console.log("===");
    // console.log("contract address:", nft.contract.address);
    // console.log("token ID:", nft.tokenId);
    // }
    // console.log(finalResponse);
    return NextResponse.json(nftsForOwner, {
        status: 200
    })

}