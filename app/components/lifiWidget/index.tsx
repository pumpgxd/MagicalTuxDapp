import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';
import React from 'react';
import { useSigner, useWallet, useChainId } from "@thirdweb-dev/react";

export const Widget = () => {
    const wallet = useWallet();
    const signer = useSigner();
    const chainId = useChainId();
    const ethChainId = 1;
    const opChainId = 10;
    const ethAddy = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    const tuxAddy = "0x17aabf6838a6303fc6e9c5a227dc1eb6d95c829a";
    

    const widgetConfig = useMemo((): WidgetConfig => {
        return {
          integrator: "magicalTux",
          walletManagement: {
            signer: signer,
            connect: async () => {
              const signer = wallet?.getSigner()!
              return signer;
            },
            disconnect: async () => {
              await wallet?.disconnect();
            },
            switchChain: async (chainId: number) => {
              await wallet?.switchChain(chainId);
              console.log(chainId)
              if (signer) {
                return signer;
              } else {
                throw Error('No signer object is found after the chain switch.');
              }
            },
          },
          containerStyle: {
            border: `1px solid rgb(234, 234, 234)`,
            borderRadius: '16px',
            height: '580px'
          },
          theme: {
              palette: {
                primary: { main: '#FF0420' },
                secondary: { main: '#F5B5FF' },
              },
              typography: {
                fontFamily: "Lato:wght@400",
                
              }
          },
          appearance: 'dark',
          variant: 'expandable',
          fromChain: ethChainId,
          toChain: opChainId,
          fromToken: ethAddy,
          toToken: tuxAddy,
          tokens: {
            featured: [
                {
                    address: tuxAddy,
                    symbol: "TUX",
                    chainId: 10,
                    decimals: 18,
                    name: "MagicalTux",
                    logoURI: "https://assets.coingecko.com/coins/images/33909/large/1703316796-picsay.png?1703453966"
                }
            ]
          }
        };
      }, [signer, wallet?.connect, wallet?.disconnect, chainId, wallet]);
   


    return (
      <>
        <LiFiWidget
          config={widgetConfig}
          integrator="magicalTux"
        />
      </>
    );
  };