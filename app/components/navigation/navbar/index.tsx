"use client"
import Image from "next/image";
import WalletButton from "./walletButton";
import Link from "next/link";
import NavButton from "../../button";
import {Menu , MenuButton, MenuList, MenuItem }from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const Navbar = () => {
    return (
      <>
        <div className="w-full flex h-20 bg-[#FF0420] sticky top-0 z-10">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full text-[#FFFFFF]">
            <Link href="/">
            <Image
              className="hover:dark:invert"            
              src="/main-cat.svg"
              alt="Tux cat"
              width={70}
              height={8}
              priority
            />
            </Link>
            <ul className="gap-x-12 flex text-white text-lg">
              <li>
              <Menu>
                  <MenuButton as={Button}
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: 'white'}}
                    _hover={{ bg: 'black', textColor: "white" }}
                    bg="#FF0420">
                    $TUX
                  </MenuButton>
                  <MenuList bg="black">
                    <MenuItem as={Link} href="/token" bg="black" _hover={{bg: "gray.800"}}>
                      Token
                    </MenuItem>
                    <MenuItem as={Link} href="/vision" bg="black" _hover={{bg: "gray.800"}}>
                      Vision
                    </MenuItem>
                </MenuList>
                </Menu>
              </li>
              <li>
              <Link href="/optimism">
                <NavButton text="OP"/>
              </Link>
              </li>
              <li className="hidden md:flex">
              <Link href="/bridge">
                <NavButton text="BRIDGE/SWAP"/>
              </Link>
              </li>
              <li className="hidden md:flex">
                <Menu>
                  <MenuButton as={Button}
                    px={2}
                    py={2}
                    fontSize={18}
                    textColor="white"
                    _active={{bg: 'black', textColor: 'white'}}
                    _hover={{ bg: 'black', textColor: "white" }}
                    bg="#FF0420">
                    NFTs
                  </MenuButton>
                  <MenuList bg="black">
                    <MenuItem as={Link} href="/nfts" bg="black" _hover={{bg: "gray.800"}}>
                      Mint
                    </MenuItem>
                    <MenuItem as={Link} href="/nftPortfolio" bg="black" _hover={{bg: "gray.800"}}>
                      Portfolio
                    </MenuItem>
                    <MenuItem as={Link} href="/marketplace" bg="black" _hover={{bg: "gray.800"}}>
                      Marketplace
                    </MenuItem>
                </MenuList>
                </Menu>
              </li>
              {/* <li>
                <Link href="/vision">
                <NavButton text="VISION"/>
                </Link>
              </li> */}
            </ul>
            <WalletButton/>
            </div>
                
          </div>
        </div>
      </>
    );
  };


  export default Navbar;