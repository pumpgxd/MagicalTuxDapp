'use client'
import React from "react"
import ImageContent from "../components/imageContent";
import TextTrans from "../components/fontTrans";
import Link from "next/link";
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import { GiToken } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
// shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)]
const Token = () => {
    return (  
    <div className="m-auto w-full h-svh tracking-wide z-1 overflow-hidden">
        <div className="flex max-md:flex-col flex-row items-center text-center justify-between m-auto h-full w-full">
        <div className="flex items-center z-50 h-full w-1/2">
            <div className="m-auto z-50">
        <ImageContent src="/tokenPageImage.jpeg" borderRadius="rounded-full shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)]"/>
        </div>
        </div>
        {/* <TextTrans time="1000" text={ */}
        <div className="text-center flex items-center text-white h-full w-1/2 max-md:w-full text-pretty shadow-[0_0_0_1000px_rgba(255,4,32,1.0)]">
        <List margin="auto" spacing={6}>
        <ListItem>
        <p className="text-2xl [text-shadow:_0_2px_25px_rgb(255_255_255_/_50%)]">$TUX</p>
        </ListItem>
        <ListItem>
            <ListIcon as={GiToken} color='yellow.500' />
            Total Supply: 1,000,000,000
        </ListItem>
        <ListItem>
            <ListIcon as={FaFire} color='red.500' />
             100% LP Burnt
        </ListItem>
        <ListItem>
            <ListIcon as={FaRegCheckCircle} color='green.500' />
             0% Buy/Sell Tax
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
            <ListIcon as={FaRegCheckCircle} color='green.500' />
            0% Team Tokens
        </ListItem>
        <ListItem>
            <Link href="/bridge" className="text-[#FF0420] pt-10 hover:text-white">Bridge & Swap with Magical Tux & LI.FI!</Link>
        </ListItem>
        </List>
        
        </div>
        {/* }></TextTrans> */}
        </div>
        
    </div>
    )
}
export default Token;