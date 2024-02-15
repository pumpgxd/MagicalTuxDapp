import { Bridge } from "@socket.tech/plugin";
import { ethers } from "ethers";
import { useSigner } from "@thirdweb-dev/react";
import dynamic from "next/dynamic";
import TextTrans from "../fontTrans";

const DynamicBridge = dynamic(
    // @ts-ignore
    () => import("@socket.tech/plugin").then((mod) => mod.Bridge),
    {
      ssr: false,
    }
  );

const SocketBridge = () => {
    const signer = useSigner();
    const provider = signer?.provider;
    const defaultSourceNetwork = 1;
    const defaultDestNetwork = 10;
    const ethAddy = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

    return (
        <div className="m-auto items-center flex py-16">
        <div className="m-auto rounded-xl border-2 border-[#FF0420]">
        { provider &&
        <TextTrans time="1000" triggerNext={() => null} text={ 
        <DynamicBridge
            provider={signer?.provider}
            API_KEY="645b2c8c-5825-4930-baf3-d9b997fcd88c"
            defaultSourceNetwork={defaultSourceNetwork}
            defaultDestNetwork={defaultDestNetwork}
            defaultSourceToken={ethAddy}
            defaultDestToken={ethAddy}
            customize={
                {
                    "secondary": "rgb(31,34,44)",
                    "primary": "rgb(0,0,0)",
                    "accent": "rgb(255,4,32)",
                    "onAccent": "rgb(255, 255, 255)",
                    "interactive": "rgb(31,34,44)",
                    "onInteractive": "rgb(240,240,240)",
                    "text": "rgb(255,255,255)",
                    "secondaryText": "rgb(200,200,200)"
                    
                  }
            }
        />
        }/>
     }       </div>
        </div>
)
}

export default SocketBridge;