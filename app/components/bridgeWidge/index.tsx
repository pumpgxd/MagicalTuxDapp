import { useSigner } from "@thirdweb-dev/react";
import dynamic from "next/dynamic";
import TextTrans from "../fontTrans";

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
        <div className="items-center pt-10 pb-20 flex">
        <div className="m-auto h-[580px]">
        { provider &&
        <TextTrans time="1000" triggerNext={() => null} text={ 
        <LiFiWidgetNext/>
        }/>
     }       </div>
        </div>
)
}

export default BridgeWidge;