import { contract, createProxy, deploy } from 'ethereum-mars'
import {
  TrueFiPool,
  PoolFactory,
} from '../build/artifacts'

deploy({}, () => {
  const pool = contract(TrueFiPool)
  const factory = contract(PoolFactory)
  console.log("pool: ", pool.address)
  console.log("factory: ", factory.address)
})
