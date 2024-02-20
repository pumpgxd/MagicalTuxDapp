import { useSigner } from "@thirdweb-dev/react";
import dynamic from "next/dynamic";
import TextTrans from "../fontTrans";
import WalletButton from "../navigation/navbar/walletButton";

export const LiFiWidgetNext = dynamic(
    () => import('../lifiWidget').then((module) => module.Widget) as any,
    {
      ssr: false,
    },
  );

const BridgeWidge = () => {
    const signer = useSigner();
    const provider = signer?.provider;

    return (
        <div className="items-center  flex">
        <div className="m-auto h-[580px]">
        { provider ?
        <TextTrans time="1000" text={ 
        <LiFiWidgetNext/>
        }/>
        : <TextTrans time="1000" text={
          <div className="m-auto my-64 flex flex-col text-end items-center gap-y-6">
          
            <h1 className="text-center text-xl">Connect wallet to get started!</h1>
            <WalletButton/>

          </div>
        }/>
     }       </div>
        </div>
)
}

export default BridgeWidge;