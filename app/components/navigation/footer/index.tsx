import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import React from "react"
import Image from 'next/image'

const FooterBar = () => {
    return (
        <div className="w-full sticky z-50 bg-black h-20 bottom-0 mx-auto">
          <div className="flex max-md:flex-col items-center justify-between max-md:px-20 h-full w-4/5 m-auto text-3xl ">
           <div className="flex flex-row items-start gap-8 pb-2 px-2 text-[#FF0420] justify-between">
              <a className=""
              href="https://t.me/magicaltuxportal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="hover:text-gray-100"
              />
            </a>

            <a
              href="https://twitter.com/magicaltux_op"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <FaSquareXTwitter className="hover:text-gray-100 m-auto"
              />
            </a>

            <a
              href="https://www.dextools.io/app/en/optimism/pair-explorer/0x5adba6c5589c50791dd65131df29677595c7efa7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChartBar className="hover:text-gray-100 m-auto"/>

            </a>

          </div>
          <div>
            <div className="flex flex-row text-nowrap items-center text-center gap-2">
              <p className="text-xs">Powered By:</p>
              <Image       
                  src="/Alchemy.png"
                  alt="Tux cat"
                  color="white"
                  width={80}
                  height={8}
                  priority
                />
                <Image
                  src="/twlogo.png"
                  alt="Tux cat"
                  color="white"
                  width={80}
                  height={8}
                  priority
                />
            </div>
        </div>
        </div>
      </div>
    )
};

export default FooterBar;