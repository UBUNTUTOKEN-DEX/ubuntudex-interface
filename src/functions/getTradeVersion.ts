import { Currency, Trade as V2Trade, TradeType, TradeVersion } from 'ubuntucoresdk'
import { Trade as V3Trade } from '@sushiswap/trident-sdk'

export function getTradeVersion(
  trade?: V2Trade<Currency, Currency, TradeType> | V3Trade<Currency, Currency, TradeType>
): TradeVersion | undefined {
  if (!trade) return undefined
  if (trade instanceof V2Trade) return TradeVersion.V2TRADE
  return TradeVersion.V3TRADE
}
