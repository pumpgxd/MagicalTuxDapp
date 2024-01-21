import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import React from "react"

const FooterBar = () => {
    return (
        <div className="flex flex-col items-center justify-between p-2">
        <div className="mb-32 grid text-center lg:max-w-5xl justify-between lg:mb-0 lg:grid-cols-3 gap-10">
        <a
          href="https://t.me/magicaltuxportal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram fontSize={45} className="hover:text-gray-100 shrink sm:flex"
          />
        </a>

        <a
          href="https://twitter.com/magicaltux_op"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <FaSquareXTwitter fontSize={45} className="hover:text-gray-100 shrink sm:flex"
          />
        </a>

        <a
          href="https://www.dextools.io/app/en/optimism/pair-explorer/0x5adba6c5589c50791dd65131df29677595c7efa7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChartBar fontSize={45} className="hover:text-gray-100 shrink sm:flex"/>

        </a>

      
      </div>
      </div>
    )
};

export default FooterBar;