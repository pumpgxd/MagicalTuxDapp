'use client'
import React from "react"
import ImageContent from "../components/imageContent";
import TextTrans from "../components/fontTrans";

const Token = () => {
    return (  
    <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-3 gap-19 tracking-wide">
        <TextTrans time="1000" triggerNext={()=>null} text={
        <div className="text-center text-white text-pretty">
        <p className="text-2xl underline">TOKENOMICS</p>
            <br/>
            <p>Total Supply: 1,000,000,000</p>
            <br/>
            <p>Circ Supply: 1,000,000,000</p>
            <br/>
            <p>100% LP Burnt</p>
            <br/>
            <p>0% Buy/Sell Tax</p>
            <br/>
            <p>0% Team Tokens</p>
        </div>
        }></TextTrans>
        <ImageContent src="/tokenPageImage.jpeg" borderRadius="rounded-full"/>
        <TextTrans time="1000" triggerNext={()=>null} text={
        <div className="text-center text-white text-pretty">    
            <p className="text-2xl underline">HOW TO BUY $TUX</p>
            <br/>
            <p className="text-lg">1) Bridge to Optimism Network</p>
            <p className="text-sm">Deposit to Optimism network from CEX</p>
            <p className="text-sm">or bridge of your choice</p>
            <br/>
            <p className="text-lg">2) Change Network</p>
            <p className="text-sm">{'Confirm your wallet\'s network'}</p>
            <p className="text-sm">is set to Optimism</p>
            <br/>
            <p className="text-lg">3) Buy Magical $TUX</p>
            <p className="text-sm">Enter official CA on your favorite</p>
            <p className="text-sm">DEX and swap</p>
        </div>
        }></TextTrans>
    </div>
    )
}
export default Token;