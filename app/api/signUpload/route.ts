import { ThirdwebStorage } from '@thirdweb-dev/storage';
import { NextResponse, NextRequest } from 'next/server'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains"

export async function POST(req: NextRequest) {
    if(req.method != 'POST') {
       return NextResponse.json({
            error: "Method not allowed"}, 
        {
            status: 405
        })
        
    }
    const TW_SECRET_KEY = process.env.TW_SECRET_KEY;

    const sdk = ThirdwebSDK.fromPrivateKey(process.env.DEV_KEY as string, OpSepoliaTestnet,
        { secretKey: TW_SECRET_KEY}
      );
 
    const formData = await req.formData();
    const file = formData.get("image") as Blob | null;
    const collectionAddy = formData.get("collectionAddy") as string;
    const address = formData.get("address") as string;
    const background = formData.get("background") as string;
    const skin = formData.get("skin") as string;
    const eyes = formData.get("eyes") as string;
    const shirt = formData.get("shirt") as string;
    const mouth = formData.get("mouth") as string;
    const hatHair = formData.get("hatHair") as string;
  

    const nftCollection = await sdk.getContract(
            collectionAddy,
            "nft-collection"
        );    

  
    // const hasMinted = (await nftCollection.balanceOf(address)).gt(0);
    //     if (hasMinted) {
    //     return NextResponse.json({
    //         error: "Wallet already minted!"
    //     }, {
    //         status: 400
    //         });
    //     }    

    // const tux = await sdk.getContract(
    //         process.env.TUX_ADDY,
    //         "token"
    // );    

    // const tuxBalance = await tux.balanceOf(address);
    //     if (tuxBalance.value.toBigInt() < 100000){
    //         console.log(tuxBalance.value);
    //         return NextResponse.json({
    //             error: "Must hold 100K $Tux to mint!"
    //         }, {
    //             status: 400
    //         })
    //     }

        if(!file) {
            return NextResponse.json({
                error: "Missing required fields"
            },{
                status: 400
            })
        }
     
        if (!TW_SECRET_KEY) {
            return NextResponse.json({
                error: "Missing environment variables"
            },{
                status: 500
            })
        }

        try {
            const storage = new ThirdwebStorage({secretKey: process.env.TW_SECRET_KEY});
            
    
            const buffer = Buffer.from(await file.arrayBuffer());
            const uriResponse = await storage.upload(buffer);
            
            const id = await nftCollection.call("nextTokenIdToMint");
            const metadata = {
                name: `TuxOG#${id}`,
                description: "Tux OG",
                image: uriResponse,
                attributes: [
                    {"trait_type": "Background",  "value": background},
                    {"trait_type": "Skin",  "value": skin},
                    {"trait_type": "Eyes",  "value": eyes},
                    {"trait_type": "Shirt",  "value": shirt},
                    {"trait_type": "Mouth",  "value": mouth},
                    {"trait_type": "Hat/Hair",  "value": hatHair}
                ]
            }
            const metaDataResponse = await storage.upload(JSON.stringify(metadata))


            const tokenMeta = {
                metadata: metaDataResponse,
                price: .01,
                to: address
            }

            const signature = await nftCollection?.signature.generate(tokenMeta);

            return NextResponse.json(signature, {
                status: 200
            })
   
    
        } catch (error: any) {
            return NextResponse.json({
                error: error.message
            },{
                status: 400
            })

        }
};