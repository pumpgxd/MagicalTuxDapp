import { Web3Button } from "@web3modal/react";
import Image from "next/image";

const Navbar = () => {
    return (
      <>
        <div className="w-full h-20 bg-[#FE0440] sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
        
            <Image
              src="/main-cat.svg"
              alt="Tux cat"
              className="dark:invert"
              width={70}
              height={8}
              priority
            />
        
            <Web3Button label="hi"></Web3Button>
            </div>
        
          </div>
        </div>
      </>
    );
  };
  

  export default Navbar;