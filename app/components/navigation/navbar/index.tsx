"use client"
import Image from "next/image";
import WalletButton from "./walletButton";
import Link from "next/link";
import {Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure, 
  IconButton}from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Box } from "@chakra-ui/react";
import { navLinks } from "@/app/constants/navLinks";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <div className="w-full flex h-20 top-0 z-50 sticky bg-black">
          <div className="container mx-auto px-5 h-full">
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
            <ul className="gap-x-12 flex text-white text-lg max-lg:hidden">
              <li>
              <Link href={navLinks.buy}>
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
              <Link href={navLinks.optimism}>
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
              <Link href={navLinks.bridge}>
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
  
                <Menu isLazy>
                  <MenuButton
                    as={Button}
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
                    <MenuItem as={Link} href={navLinks.nfts} w="100%" bg="black" _hover={{bg: "gray.800"}}>
                        Mint
                    </MenuItem>
                    <MenuItem as={Link} href={navLinks.nftPortfolio} w="100%" bg="black" _hover={{bg: "gray.800"}}>
                      Portfolio
                    </MenuItem>
                </MenuList>
                </Menu>
              </li>
            </ul>
            <div className="max-lg:hidden flex">
            <WalletButton />
            </div>
            <div className="lg:hidden">
              <Button 
                as={IconButton}
                bg="#ff0420"
                
                textColor="white"
                _hover={{bg: "black", textColor: '#ff0420'}}
                onClick={onOpen}
                icon={<HamburgerIcon fontSize="xl" fontStyle="bold"/>}/>
            </div>
            </div>
          </div>
        </div>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='auto'
                    backdropBlur='10px'
                  />
            <ModalContent bg="black">
              <ModalHeader>
                <WalletButton/>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="flex flex-col text-xl pb-5">
                <Link href={navLinks.buy}>
                  <div onClick={onClose} className="hover:bg-slate-700/60">
                    Buy
                  </div>
                </Link>
                <Link href={navLinks.optimism}>
                  <div onClick={onClose} className="hover:bg-slate-700/60">
                    Optimism
                  </div>
                </Link>
                <Link href={navLinks.bridge}>
                  <div onClick={onClose} className="hover:bg-slate-700/60">
                    Bridge/Swap
                  </div>
                </Link>
                <Link href={navLinks.nfts}>
                  <div onClick={onClose} className="hover:bg-slate-700/60">
                    NFTux
                  </div>
                </Link>
                <Link href={navLinks.nftPortfolio}>
                  <div onClick={onClose} className="hover:bg-slate-700/60">
                    NFT Portfolio
                  </div>
                </Link>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
      </>
    );
  };


  export default Navbar;