
import React from "react";
import ImageContent from "./components/imageContent";
import Token from "./token";


export default function Home() {

  return (
     <div>
      <div className="m-auto w-full h-svh tracking-wide py-16 z-1">
        <div className="flex flex-row h-3/4 items-center justify-between m-auto px-5 gap-10 grid sm:grid-cols-2 w-3/4">
          <ImageContent src="/founding-text.png" borderRadius="rounded-none"/>
          <ImageContent src="/tuxKittyHome.jpeg" borderRadius="rounded-[210px]"/>
        </div>
        </div>
      <Token/>
     </div>
  );
}
