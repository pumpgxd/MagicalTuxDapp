
import React from "react";
import ImageContent from "./components/imageContent";


export default function Home() {

  return (
     <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-2 gap-20">
      <ImageContent src="/founding-text.png" borderRadius="rounded-none"/>
      <ImageContent src="/tuxKittyHome.jpeg" borderRadius="rounded-md"/>
      </div>
  );
}
