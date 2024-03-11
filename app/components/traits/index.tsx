import NextImage from "next/image";
import { chakra, Image } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

const NftTrait = chakra(NextImage, {
    baseStyle: { maxH: 120, maxW: 120 },
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'onClick', 'crossOrigin', 'onHover'].includes(prop),
  })



const Traits: FunctionComponent<{traitList: Array<string>, activeTrait: string, setTrait: Dispatch<SetStateAction<string>>}> = (props) => {


    return (
        <div>
        <div className="flex flex-row items-start flex-wrap">
        {props.traitList.map((t) => (
        <Image
            borderWidth={props.activeTrait === t ? 2 : 1}
            borderStyle="solid"
            borderColor={props.activeTrait === t ? '#194db5' : "white"}
            className="bg-slate-800 rounded-xl cursor-pointer m-1 hover:scale-105"
            crossOrigin="anonymous"
            key={t}
            alt={t}
            src={t}
            onClick={() => props.setTrait(t)}
            width={65}
            height={65}
        />)
        )}
        </div>
    </div> 

    )

}

export default Traits;