
import React from "react";
import ImageContent from "./components/imageContent";
import Token from "./token";
import Vision from './vision'
import { Card, Text, Stack, Heading } from "@chakra-ui/react";
import TextTrans from "./components/fontTrans";

export default function Home() {

  return (
     <div>
      <div className="w-full tracking-wide z-1">
      <TextTrans time="1000" text={
        <div className="flex flex-col my-24  items-center m-auto justify-between gap-20 h-5/6">
        <div className="flex flex-row h-1/2 items-center justify-between m-auto px-5 max-lg:flex-col w-3/4 max-md:w-3/4">
          <div className="m-auto w-1/2 max-lg:w-full">
          <ImageContent src="/founding-text.png" borderRadius="rounded-none"/>
          </div>
          <div className="m-auto w-1/3 max-lg:w-full">
          <ImageContent src="/tuxKittyHome.jpeg" borderRadius="rounded-full"/>
          </div>
        </div>
        <div className="flex flex-row items-center gap-7 justify-center h-1/2 w-3/4  max-md:w-full max-lg:flex-col">
        <Card className="w-1/5 max-lg:w-1/3 m shadow-[0_10px_10px_0px_rgba(255,4,32,0.05)]" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
          <Stack m="auto" p="6" spacing='2'>
          <Heading fontSize="2xl" fontWeight={700} textColor="white">LP</Heading>
            <Text fontSize="md" textColor="#FF0420">100% BURNT</Text>
          </Stack>
        </Card>
        <Card className="w-1/5 max-lg:w-1/3 shadow-[0_10px_10px_0px_rgba(255,4,32,0.05)]" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
          <Stack m="auto" p="6" spacing='2'>
          <Heading fontSize="2xl" fontWeight={700} textColor="white">SUPPLY</Heading>
            <Text fontSize="md" textColor="#FF0420">1 BILLION</Text>
          </Stack>
        </Card>
        <Card className="w-1/5 max-lg:w-1/3 shadow-[0_10px_10px_0px_rgba(255,4,32,0.05)]" shadow="sm 0px" textAlign="center" minW="0"  bg="black" border="1px" gap={0} borderColor="white-smoke">
          <Stack m="auto" p="6" spacing='2'>
          <Heading fontSize="2xl" fontWeight={700} textColor="white">0/0</Heading>
            <Text fontSize="md" textColor="#FF0420">BUY/SELL TAX</Text>
          </Stack>
        </Card>
        </div>
        </div>
        }
        />
        </div>
      <Token/>
      {/* <Vision/> */}
     </div>
  );
}
