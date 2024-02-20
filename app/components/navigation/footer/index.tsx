import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import React from "react"

const FooterBar = () => {
    return (
        <div className="w-full h-20 bottom-0 bg-[#000000]">
          <div className="container h-16 mx-auto px-8 h-full w-80 text-4xl ">
        <div className="flex py-4 text-[#FF0420] items-center text-center m-auto px-4 justify-between">
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
      </div>
      </div>
    )
};

export default FooterBar;