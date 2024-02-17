import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, trustWallet, rainbowWallet, zerionWallet } from "@thirdweb-dev/react";
import { OpSepoliaTestnet, Optimism, Ethereum } from "@thirdweb-dev/chains";
import React from 'react'

type TWProviderType = {
    children: React.ReactNode;
};

const TWProvider = ({children}: TWProviderType) => {

return (
    <>
    <ThirdwebProvider 
        supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            trustWallet(),
            rainbowWallet(),
            zerionWallet()
        ]} 
        supportedChains={[OpSepoliaTestnet, Optimism, Ethereum]}
        clientId={process.env.TUX_CLIENT_ID}>
        {children}
    </ThirdwebProvider>
    </>
)

}

export default TWProvider;