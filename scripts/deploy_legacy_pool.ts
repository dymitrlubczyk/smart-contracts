/**
 * PRIVATE_KEY={private_key} ts-node scripts/deploy_legacy_pool.ts "{network}"
 */
import { ethers, providers } from 'ethers'

import {
  TrueFiPool__factory,
  PoolFactory__factory,
} from '../build'

async function deployTimeLockRegistry () {
  const txnArgs = { gasLimit: 6_000_000, gasPrice: 60_000_000_000 }
  const provider = new providers.InfuraProvider(process.argv[2], 'e33335b99d78415b82f8b9bc5fdc44c0')
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  const pool = await (await new TrueFiPool__factory(wallet).deploy(txnArgs)).deployed()
  console.log(`TrueFiPool at: ${pool.address}`)

  const factory = await (await new PoolFactory__factory(wallet).deploy(txnArgs)).deployed()
  console.log(`PoolFactory at: ${factory.address}`)
}

deployTimeLockRegistry().catch(console.error)

