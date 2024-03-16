import NextImage from "next/image";
import { chakra, Image } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction } from "react";


interface Trait {
    name: string;
    url: string;
  }


const Traits: FunctionComponent<{traitList: Array<Trait>, activeTrait: Trait, setTrait: Dispatch<SetStateAction<Trait>>}> = (props) => {


    return (
        <div>
        <div className="flex flex-row items-start flex-wrap">
        {props.traitList.map((t) => (
        <Image
            loading="lazy"
            borderWidth={props.activeTrait === t ? 2 : 1}
            borderStyle="solid"
            borderColor={props.activeTrait === t ? '#194db5' : "white"}
            className="bg-slate-800 rounded-xl cursor-pointer m-1 hover:scale-105"
            crossOrigin="anonymous"
            key={t.name}
            alt={t.name}
            src={t.url}
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