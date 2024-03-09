"use client"
import { ConnectWallet, darkTheme } from '@thirdweb-dev/react';
import React from 'react';
const WalletButton = () => {
    return (
        <div>
        <ConnectWallet btnTitle="CONNECT" className="walletButton hover:text-[#ff0420]"
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