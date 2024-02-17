"use client"
import React from 'react'
import TWProvider from './TWProvider'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
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
    
    <TWProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </TWProvider>
  )
}

export default Providers;