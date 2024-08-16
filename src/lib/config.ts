import { createPublicClient, defineChain, http } from "viem"


export const movementDevnet = defineChain({
  id: 30_732,
  name: 'Movement Devnet',
  nativeCurrency: { name: 'Move', symbol: 'MOVE', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://mevm.devnet.imola.movementlabs.xyz/'],
    },
  },
  blockExplorers: {
    default: { name: 'Movement Devnet', url: 'https://explorer.devnet.imola.movementlabs.xyz' },
  }
})

export const config = createPublicClient({
  chain: movementDevnet,
  transport: http(),
})

export const publicClient = createPublicClient({
    chain: movementDevnet,
    transport: http(),
  })

export const contractAddress = "0xF53C0Ba1461e5039628D39C66DB6723786F5D41E"


