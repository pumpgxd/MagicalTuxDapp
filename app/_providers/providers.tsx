"use client"
import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, trustWallet, rainbowWallet, zerionWallet, darkTheme } from "@thirdweb-dev/react";
import { OpSepoliaTestnet, Optimism, Ethereum, Base } from "@thirdweb-dev/chains";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
        border: '3px',
        borderColor: 'white'
      },
      image: {
        border: '3px',
        borderColor: 'white'
      }
    },
  },
})

type ProviderType = {
  children: React.ReactNode
}

const Providers = ({children}: ProviderType) => {
  return (
       <ThirdwebProvider 
        supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            trustWallet(),
            rainbowWallet(),
            zerionWallet()
        ]} 
        supportedChains={[OpSepoliaTestnet, Optimism, Ethereum, Base]}
        clientId={process.env.TUX_CLIENT_ID}
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
          })}>
        <ChakraProvider theme={theme}>
        {children}
        </ChakraProvider>
        </ThirdwebProvider>

  )
}

export default Providers;