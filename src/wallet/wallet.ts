import { createWalletClient, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts';
import { reyaNetwork } from 'viem/chains'
import 'dotenv/config'




export const AccountWalletViem = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

