
import React from "react";
import ImageContent from "./components/imageContent";
import Token from "./token";
import Vision from './vision'


export default function Home() {

  return (
     <div>
      <div className="w-full h-screen tracking-wide z-1">
        <div className="flex flex-row h-5/6 items-center justify-between m-auto px-5 grid sm:grid-cols-2 w-3/4">
          <ImageContent src="/founding-text.png" borderRadius="rounded-none"/>
          <ImageContent src="/tuxKittyHome.jpeg" borderRadius="rounded-[210px]"/>
        </div>
        </div>
      <Token/>
      <Vision/>
     </div>
  );
}
