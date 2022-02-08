import { CurrencyAmount, Token } from 'ubuntucoresdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>
