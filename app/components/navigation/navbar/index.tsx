"use client"
import Image from "next/image";
import WalletButton from "./walletButton";
import Link from "next/link";
import {Menu , MenuButton, MenuList, MenuItem }from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";

const Navbar = () => {
    return (
      <>
        <div className="w-full flex h-20 top-0 z-50 sticky bg-black">
          <div className="container mx-auto h-full">
            <div className="flex min-w-[70px] justify-between items-center h-full text-[#FFFFFF]">
            <Link href="/#home">
              <div className="lg:w-[150px]">
            <Image
              className="hover:shadow-sm hover:shadow-white/20 hover:scale-90 min-w-[70px] bg-[#ff0420] rounded-full"            
              src="/main-cat.svg"
              alt="Tux cat"
              width={70}
              height={10}
              priority
            />
            </div>
            </Link>
            <ul className="gap-x-12 flex text-white text-lg">
              <li>
              {/* <Menu>
                  <MenuButton as={Button}
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: '#ff0420'}}
                    _hover={{ bg: 'black', textColor: "#ff0420" }}
                    bg="black">
                    MAGICAL TUX
                  </MenuButton>
                  <MenuList sx={{minW: "0px", w: 'fit-content', borderColor: "#ff0420", opacacity: "20%", }} border="1px" as={Box} borderStyle="solid"  borderRadius="8%" bg="black">
                    <MenuItem as={Link} href="/#token" bg="black" w="100%" _hover={{bg: "gray.800"}}>
                      Token
                    </MenuItem>
                    <MenuItem as={Link} href="/#vision" bg="black" w="100%" _hover={{bg: "gray.800"}}>
                      Vision
                    </MenuItem>
                    <MenuItem as={Link} href="/optimism" bg="black" w="100%" _hover={{bg: "gray.800"}}>
                      Optimism
                    </MenuItem>
                </MenuList>
                </Menu> */}
              <Link href="/#buy">
                <Button
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: '#ff0420'}}
                    _hover={{ bg: 'black', textColor: '#ff0420'}}
                    bg="black">
                  BUY
                </Button>
              </Link>
              </li>
              <li>
              <Link href="/optimism">
                <Button
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: '#ff0420'}}
                    _hover={{ bg: 'black', textColor: '#ff0420'}}
                    bg="black">
                  OP
                </Button>
              </Link>
              </li>
                
              <li>
              <Link href="/bridge">
                <Button
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: '#ff0420'}}
                    _hover={{ bg: 'black', textColor: '#ff0420'}}
                    bg="black">
                  BRIDGE/SWAP
                </Button>
              </Link>
              </li>
              <li>
                <Menu>
                  <MenuButton as={Button}
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: '#ff0420'}}
                    _hover={{ bg: 'black', textColor: '#ff0420'}}
                    bg="black">
                    NFTs
                  </MenuButton>
                  <MenuList sx={{minW: "0px", w: 'fit-content', borderColor: "#ff0420", opacacity: "20%", }} border="1px" as={Box} borderStyle="solid"  borderRadius="8%" bg="black">
                    <MenuItem as={Link} href="/nfts" w="100%" bg="black" _hover={{bg: "gray.800"}}>
                      Mint
                    </MenuItem>
                    <MenuItem as={Link} href="/nftPortfolio" w="100%" bg="black" _hover={{bg: "gray.800"}}>
                      Portfolio
                    </MenuItem>
                </MenuList>
                </Menu>
              </li>
            </ul>
            <div className="hidden md:flex">
            <WalletButton />
            </div>
            </div>
                
          </div>
        </div>
      </>
    );
  };


  export default Navbar;