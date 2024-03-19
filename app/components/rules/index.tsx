import React from 'react'
import { Card, Text, Stack, Heading, Image, Box, Flex} from '@chakra-ui/react'
import TextTrans from '../fontTrans'

const Rules = () => {
    return (
        <div id="rules" className="w-full min-h-screen tracking-wide z-1 overflow-hidden">
        <div className="w-3/4 h-full my-10  m-auto">
        <TextTrans time="1000" text={ 
            <div className="flex max-lg:flex-col flex-row items-center text-center m-auto gap-5 justify-between w-full">
                <div className="w-1/2 m-auto rounded-lg max-lg:w-full max-lg:h-1/2">
                    <div>
                        <div className="flex border border-slate-700/50 rounded-lg bg-black flex-col text-pretty justify-evenly text-white items-center z-40 max-lg:h-1/2 w-full py-6 max-lg:w-full gap-10 rounded-lg">
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl max-lg:text-lg [text-shadow:_10px_10px_20px_rgb(0_0_0_/_70%)] text-[#ff0420]" >Gamified NFTux Contest</p>
                            </div>
                            <div className="text-md z-40 w-5/6">
                                <p> We&apos;re thrilled to offer you the opportunity to mint your very own Magical Tux NFT and stand a chance to win $TUX bags!</p>
                            </div>
                            <div className="z-40 w-5/6">
                                <p className="text-md text-[#ff0420]">Prize Pool</p>
                                <p className="text-sm">The total prize pool is valued at 2.5 ETH worth of $TUX.</p>
                            </div>
                            <div className="z-40 w-5/6">
                                <p className="text-md text-[#ff0420]">Minting Fee</p>
                                <p className="text-sm">The cost to mint an NFT is set at 0.01 ETH.</p>
                            </div>
                            <div className="z-40 w-5/6">
                                <p className="text-md text-[#ff0420]">Total Mints/Entries</p>
                                <p className="text-sm">There are a total of 300 NFTs available to mint.</p>
                            </div>
                            <div className="z-40 w-5/6">
                                <p className="text-md text-[#ff0420]">How to Enter</p>
                                <p className="text-sm">Simply mint an NFT, and your wallet will automatically be entered into the contest.</p>
                            </div>
                            <div className="z-40 w-5/6">
                                <p className="text-md text-[#ff0420]">Results and Winner Announcements</p>
                                <p className="text-sm">Winners will be drawn and announced via live stream hosted by the Magical Tux team. The stream will be scheduled once the collection is fully minted and the contest is closed.</p>
                            </div>
                  
                        </div>
                    </div>
                </div>
                <div className="w-1/2 m-auto max-lg:w-full max-lg:h-1/2">
                <div>
                    <div className="text-center flex flex-col items-center text-center text-white h-full w-full justify-evenly gap-5 max-lg:w-full max-lg:h-1/2 text-pretty">
                            <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                            <Stack m="auto" p="7" align="center" spacing='3'>
                                <Heading fontSize="lg" fontWeight={700} textColor="#ff0420">RANDOM WINNERS</Heading>
                                
                                <Text fontSize="sm" textColor="white">4 winners will be randomly selected from mints 1-100, 101-200, and 201-300. 12 total winners each receiving 0.125 ETH worth of $TUX (Total Prizes: 1.5 ETH).</Text>
                                </Stack>
                                </Card>
                                <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                                <Stack m="auto" align="center" p="7" spacing='3'>
                                    <Heading fontSize="lg" fontWeight={700} textColor="#ff0420">SPECIAL CATEGORY WINNERS</Heading>
                                 
                                    <Text fontSize="sm" textColor="white">4 winners will be selected based on predetermined categories, each receiving 0.25 ETH worth of $TUX. The categories will not be announced until the collection is fully minted and the contest is closed, to prevent manipulation of results (Total Prizes: 1 ETH).</Text>
                                </Stack>
                                </Card>
                                <Card className="lg:w-2/3 sm:max-lg:w-full" shadow="sm 0px" textAlign="center" minW="0" bg="black" border="1px" gap={0} borderColor="white-smoke">
                                <Stack m="auto" p="7" align="center" spacing='3'>
                                <Heading fontSize="lg" fontWeight={700} textColor="#ff0420">DISTRIBUTION OF FUNDS</Heading>
                                
                                    <Text fontSize="sm" textColor="white">Upon minting, 5% of the proceeds will go to the artist (0.15 ETH), 10% to the team (0.3 ETH), and 85% (2.5 ETH) will be allocated to the prize pool. An additional 0.05 ETH will be reserved for slippage for buybacks. All funds for the team wallet will be used for growing Magical Tux. The team is not being paid.</Text>
                                </Stack>
                                </Card>
                    </div>
            </div>
            </div>
        </div>}/>
        </div>
    </div>
    )
}

export default Rules;