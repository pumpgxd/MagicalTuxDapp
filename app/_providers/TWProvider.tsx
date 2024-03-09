// 'use client'
// import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, trustWallet, rainbowWallet, zerionWallet, darkTheme } from "@thirdweb-dev/react";
// import { OpSepoliaTestnet, Optimism, Ethereum } from "@thirdweb-dev/chains";
// import React from 'react'

// type TWProviderType = {
//     children: React.ReactNode;
// };

// const TWProvider = ({children}: TWProviderType) => {

// return (
//     <ThirdwebProvider 
//         supportedWallets={[
//             metamaskWallet(),
//             coinbaseWallet(),
//             walletConnect(),
//             trustWallet(),
//             rainbowWallet(),
//             zerionWallet()
//         ]} 
//         supportedChains={[OpSepoliaTestnet, Optimism, Ethereum]}
//         clientId={process.env.TUX_CLIENT_ID}
//         theme={darkTheme({
//             colors: {
//               accentText: "#FF0420",
//               accentButtonBg: "#FF0420",
//               modalBg: "#000000",  
//               connectedButtonBg: "#000000",
//               primaryText: "#ffffff",
//               borderColor: "#FF0420",
//               primaryButtonBg: "#FF0420",
//               primaryButtonText: "#ffffff",
//               secondaryButtonText: "#ffffff",
//             },
//           })}>
//         {children}
//     </ThirdwebProvider>

// )

// }

// export default TWProvider;