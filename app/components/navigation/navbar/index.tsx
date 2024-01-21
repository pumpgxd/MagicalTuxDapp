import Image from "next/image";
import WalletConnect from "./walletConnect";
import Link from "next/link";
import Button from "../../button";
const Navbar = () => {
    return (
      <>
        <div className="w-full h-20 bg-[#FE0440] sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full text-[#FFFFFF]">

            <Image
              src="/main-cat.svg"
              alt="Tux cat"
              width={70}
              height={8}
              priority
            />
            <ul className="hidden md:flex gap-x-12 text-white text-lg">
              <li>
                <Link href="/">
                  <Button text="HOME"/>
                </Link>
              </li>
              <li>
                <Link href="/mint">
                <Button text="MINT"/>
                </Link>
              </li>
              <li>
                <Link href="/about">
                <Button text="ABOUT"/>
                </Link>
              </li>
            </ul>
            <WalletConnect />
            </div>
                
          </div>
        </div>
      </>
    );
  };


  export default Navbar;