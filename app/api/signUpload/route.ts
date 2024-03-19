import { ThirdwebStorage } from '@thirdweb-dev/storage';
import { NextResponse, NextRequest } from 'next/server'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains"
import { AwsSecretsManagerWallet } from "@thirdweb-dev/wallets/evm/wallets/aws-secrets-manager";

export async function POST(req: NextRequest) {
    if(req.method != 'POST') {
       return NextResponse.json({
            error: "Method not allowed"}, 
        {
            status: 405
        })
        
    }
    const TW_SECRET_KEY = process.env.TW_SECRET_KEY;
    const collectionAddy = process.env.NEXT_PUBLIC_NFT_GEN_ADDY;

    const wallet = new AwsSecretsManagerWallet({
        secretId: "walletKey", // ID of the secret value
        secretKeyName: "walletKey", // Name of the secret value
        awsConfig: {
          region: "us-east-2", // Region where your secret is stored
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Add environment variables to store your AWS credentials
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Add environment variables to store your AWS credentials
          },
        },
      });

    const sdk = await ThirdwebSDK.fromWallet(wallet, OpSepoliaTestnet,
        { secretKey: TW_SECRET_KEY}
      );
 
    const formData = await req.formData();
    const file = formData.get("image") as Blob | null;
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

  
    const totalMints = await nftCollection.totalSupply();
        if (totalMints.toNumber() >= 300) {
        return NextResponse.json({
            error: "300 mints reached! Contest is closed"
        }, {
            status: 400
            });
        }    

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
                description: "Magical Tux OG Collection",
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