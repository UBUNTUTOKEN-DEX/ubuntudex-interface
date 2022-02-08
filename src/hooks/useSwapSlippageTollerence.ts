import { Currency, Percent, Trade, TradeType } from 'ubuntucoresdk'
import { Trade as TridentTrade } from '@sushiswap/trident-sdk'
import { useUserSlippageToleranceWithDefault } from 'app/state/user/hooks'
import { useMemo } from 'react'

const V2_SWAP_DEFAULT_SLIPPAGE = new Percent(50, 10_000) // .50%
const ONE_TENTHS_PERCENT = new Percent(10, 10_000) // .10%

export default function useSwapSlippageTolerance(
  trade: Trade<Currency, Currency, TradeType> | TridentTrade<Currency, Currency, TradeType> | undefined
): Percent {
  const defaultSlippageTolerance = useMemo(() => {
    if (!trade) return ONE_TENTHS_PERCENT
    return V2_SWAP_DEFAULT_SLIPPAGE
  }, [trade])
  return useUserSlippageToleranceWithDefault(defaultSlippageTolerance)
}
