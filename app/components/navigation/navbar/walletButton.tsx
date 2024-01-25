"use client"
import { ConnectWallet, useAddress, darkTheme } from '@thirdweb-dev/react';
import React from 'react';
const WalletButton = () => {
    const address = useAddress();
    return (
        <div className='hidden md:flex w-20'>
        <ConnectWallet btnTitle="CONNECT" className="walletButton"
        theme={darkTheme({
            colors: {
              accentText: "#FF0420",
              accentButtonBg: "#FF0420",
              modalBg: "#000000",  
              connectedButtonBg: "#000000",
              primaryText: "#ffffff",
              borderColor: "#FF0420",
              primaryButtonBg: "#FF0420",
              primaryButtonText: "#ffffff",
              secondaryButtonText: "#ffffff",
            },
          })}
          switchToActiveChain={true}
          modalTitleIconUrl={
            "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=029"
          }
          welcomeScreen={{
            img: {
              src: "/main-cat.svg",
              width: 250,
              height: 250,
            },
            title:
                "Your gateway to the superchain!",
            subtitle:
                "Connect a wallet to get started with Tux",
          }}
          />
        </div>
    )
    }
    
    export default WalletButton;