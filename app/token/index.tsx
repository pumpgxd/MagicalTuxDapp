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
import { motion } from 'framer-motion'
// shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)]
// shadow-[0_0_0_1000px_rgba(255,4,32,1.0)]
const Token = () => {
    return (  
    <div id="token" className="m-auto w-full h-screen tracking-wide z-1 overflow-hidden">
        <div className="flex max-md:flex-col flex-row items-center text-center justify-between h-screen w-full">
            <div className="h-screen w-1/2 max-md:w-full max-md:h-1/2">
                <motion.div initial={{x: -200}}
                    whileInView={{x: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: .5
                    }}>
                    <div className="flex flex-col text-pretty justify-evenly text-white items-center z-40 h-screen w-full bg-[#FF0420] py-6 max-md:w-full rounded-lg">
                        <p className="text-3xl [text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]" >$TUX</p>
                        <div className="z-40">
                            <ImageContent src="/tokenPageImage.jpeg" borderRadius="rounded-full shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)]"/>
                        </div>
                        <p className="px-10 text-sm [text-shadow:_10px_10px_20px_rgb(0_0_0_/_90%)]">
                        $TUX is a meme token. It has no intrinsic value or expectations of financial return. The Magical Tux team is not responsible for any losses or errors. Invest at your own risk. Magical Tux is not affiliated with Optimism.</p>
                    </div>
                </motion.div>
            </div>
        <div className="text-center flex items-center text-white h-5/6 w-1/2 max-md:w-full text-pretty">
        <List margin="auto" spacing={6}>
            <ListItem>
                <p className="text-2xl [text-shadow:_0_2px_25px_rgb(255_255_255_/_50%)]">TOKENOMICS</p>
            </ListItem>
            <ListItem>
                <ListIcon as={GiToken} color='yellow.500' />
                Total Supply: 1,000,000,000
            </ListItem>
            <ListItem>
                <ListIcon as={GiToken} color='yellow.500' />
                    Circulating Supply: 1,000,000,000
            </ListItem>
            <ListItem>
                <ListIcon as={FaFire} color='red.500' />
                100% LP Burnt
            </ListItem>
            <ListItem>
                <ListIcon as={FaRegCheckCircle} color='green.500' />
                0% Buy/Sell Tax
            </ListItem>
            <ListItem>
                <ListIcon as={FaRegCheckCircle} color='green.500' />
                0% Team Tokens
            </ListItem>
            <ListItem>
                <Link href="/bridge" className="text-[#FF0420] pt-10 hover:text-white">Bridge & Swap with Magical Tux & LI.FI!</Link>
            </ListItem>
        </List>
        
        </div>
        </div>
        
    </div>
    )
}
export default Token;