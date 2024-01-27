import { ThirdwebStorage, IpfsUploader } from '@thirdweb-dev/storage';
import { NextResponse, NextRequest } from 'next/server'


export const config = {
    api: {
      bodyParser: false,
    },
  };


export async function POST(req: NextRequest) {
    if(req.method != 'POST') {
       return NextResponse.json({
            error: "Method not allowed"}, 
        {
            status: 405
        })
        
    }
 
    const formData = await req.formData();
    const file = formData.get("image") as Blob | null;
   
        if(!file) {
            return NextResponse.json({
                error: "Missing required fields"
            },{
                status: 400
            })
        }

        const TW_SECRET_KEY = process.env.TW_SECRET_KEY;
     
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
            

            const metadata = {
                name: "tuxy",
                description: "tux gang",
                image: uriResponse
            }
            const metaDataResponse = await storage.upload(JSON.stringify(metadata))


            return NextResponse.json(metaDataResponse, {
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