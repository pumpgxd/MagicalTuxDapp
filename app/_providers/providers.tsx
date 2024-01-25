"use client"
import React from 'react'
import TWProvider from './TWProvider'

type ProviderType = {
  children: React.ReactNode
}

const Providers = ({children}: ProviderType) => {
  return (
    <TWProvider>{children}</TWProvider>
  )
}

export default Providers;