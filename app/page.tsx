'use-client'
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

import { Web3Button } from "@web3modal/react";
import { Transition } from "@headlessui/react";
import {useState} from "react"
import React from "react";
import HomeContent from "./components/homeContent";


export default function Home() {

  return (
     <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-2 gap-20">
      <HomeContent src="/founding-text.png"/>
      <HomeContent src="/tuxKittyHome.jpeg"/>
      </div>
  );
}
