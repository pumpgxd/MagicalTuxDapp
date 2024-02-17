import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import React from "react"

const FooterBar = () => {
    return (
        <div className="w-full h-20 bottom-0 bg-[#000000] z-0">
          <div className="container mx-auto px-8 h-full w-80">
        <div className="flex pb-4 text-[#FF0420] items-center text-center m-auto px-4 justify-between">
        <a className=""
          href="https://t.me/magicaltuxportal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram fontSize={45} className="hover:text-gray-100"
          />
        </a>

        <a
          href="https://twitter.com/magicaltux_op"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <FaSquareXTwitter fontSize={45} className="hover:text-gray-100 m-auto"
          />
        </a>

        <a
          href="https://www.dextools.io/app/en/optimism/pair-explorer/0x5adba6c5589c50791dd65131df29677595c7efa7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChartBar fontSize={45} className="hover:text-gray-100 m-auto"/>

        </a>

        </div>
      </div>
      </div>
    )
};

export default FooterBar;