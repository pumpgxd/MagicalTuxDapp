'use client'
import React from "react"
import ImageContent from "../components/imageContent";
import { Card, Text, Stack, Heading, Image, Box, Flex} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BiSolidCopy } from "react-icons/bi";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';



const Token = () => {
    return (  
    <div id="buy" className="w-full min-h-screen tracking-wide z-1 overflow-hidden">
        <div className="w-3/4 h-full my-20  m-auto">
            <div className="flex max-lg:flex-col flex-row items-center text-center m-auto gap-5 justify-between w-full">
                <div className="w-1/2 m-auto rounded-lg max-lg:w-full max-lg:h-1/2">
                    <motion.div initial={{x: -200}}
                        whileInView={{x: 0}}
                        transition={{
                            ease: "easeInOut",
                            duration: .5
                        }}>
                        <div className="flex border border-slate-700/50 rounded-lg bg-black flex-col text-pretty justify-evenly text-white items-center z-40 max-lg:h-1/2 w-full py-6 max-lg:w-full gap-10 rounded-lg">
                            <div className="flex flex-col gap-1">
                                {/* <div> */}
                                <p className="text-2xl max-lg:text-lg [text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]" >$TUX</p>
                                {/* </div> */}
                                <div className="flex flex-row gap-1">
                                    <p className="text-xs text-[#FF0420] [text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)]">Contract Address</p>
                                        <CopyToClipboard text="0x17aabf6838a6303fc6e9c5a227dc1eb6d95c829a">
                                        <BiSolidCopy onClick={() => toast.success("Copied $Tux contract address!")} className="text-gray-700 cursor-pointer hover:text-gray-100 m-auto"/>
                                        </CopyToClipboard>
                                </div>
                            </div>
                            <div className="z-40 w-5/6 max-lg:w-1/2">
                                <ImageContent src="/tokenPageImage.jpeg" borderRadius="rounded-full shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)]"/>
                            </div>
                            <div>
                            <p className="px-10 text-xs pt-4 [text-shadow:_10px_10px_20px_rgb(255_255_255_/_40%)]">
                            $TUX is a meme token. It has no intrinsic value or expectations of financial return. Magical Tux is a cat in a tuxedo - invest at your own risk. Magical Tux is not affiliated with Optimism.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-1/2 m-auto max-lg:w-full max-lg:h-1/2">
                <motion.div className="m-auto" initial={{x: 200}}
                        whileInView={{x: 0}}
                        transition={{
                            ease: "easeInOut",
                            duration: .5
                        }}>
                    <div className="text-center flex flex-col items-center text-center text-white h-full w-full justify-evenly gap-5 max-lg:w-full max-lg:h-1/2 text-pretty">
                            <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                            <Stack m="auto" p="8" align="center" spacing='3'>
                                <Heading fontSize="xl" fontWeight={700} textColor="white">WALLET</Heading>
                                <Image       
                                    src="/Metamask-icon.png"
                                    alt="metamask logo"
                                    width="25%"
                                    height="25%"
                                    />
                                <Text fontSize="sm" textColor="#FF0420">Create wallet and add Optimism Mainnet</Text>
                                </Stack>
                                </Card>
                                <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                                <Stack m="auto" align="center" p="8" spacing='3'>
                                    <Heading fontSize="xl" fontWeight={700} textColor="white">BRIDGE</Heading>
                                    <Image       
                                        src="/OP-Logo.png"
                                        alt="Op logo"
                                        width="25%"
                                        height="auto"
                                    />
                                    <Text fontSize="sm" textColor="#FF0420">Bridge ETH to Optimism Mainnet</Text>
                                </Stack>
                                </Card>
                                <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                                <Stack m="auto" p="8" align="center" spacing='3'>
                                <Heading fontSize="xl" fontWeight={700} textColor="white">SWAP</Heading>
                                    <Image       
                                            src="/uniswap-uni-logo.png"
                                            alt="uniswap logo"
                                            width="25%"
                                            height="25%"
                                        />
                                    <Text fontSize="sm" textColor="#FF0420">Buy on DEX (Uniswap or Velodrome)</Text>
                                </Stack>
                                </Card>
                                {/* </div> */}
                            {/* <Link href="/bridge" className="text-[#FF0420] hover:text-white">Bridge & Swap with Magical Tux & LI.FI!</Link> */}
                    </div>
            </motion.div>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Token;