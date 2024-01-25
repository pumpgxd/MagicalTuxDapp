"use client"
import Image from "next/image";
import WalletButton from "./walletButton";
import Link from "next/link";
import Button from "../../button";
const Navbar = () => {
    return (
      <>
        <div className="w-full h-20 bg-[#FF0420] sticky top-0">
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
            <ul className="hidden md:flex gap-x-12 text-white text-lg">
              <li>
                <Link href="/token">
                  <Button text="$TUX"/>
                </Link>
              </li>
              <li>
              <Link href="/optimism">
                <Button text="OP"/>
              </Link>
              </li>
              <li>
                <Link href="/nfts">
                <Button text="NFTs"/>
                </Link>
              </li>
              <li>
                <Link href="/vision">
                <Button text="VISION"/>
                </Link>
              </li>
            </ul>
            <WalletButton />
            </div>
                
          </div>
        </div>
      </>
    );
  };


  export default Navbar;