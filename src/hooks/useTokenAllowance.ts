import { CurrencyAmount, Token } from 'ubuntucoresdk'
import { useSingleCallResult } from 'app/state/multicall/hooks'
import { useMemo } from 'react'

import { useTokenContract } from './useContract'

export function useTokenAllowance(token?: Token, owner?: string, spender?: string): CurrencyAmount<Token> | undefined {
  const contract = useTokenContract(token?.address, false)

  const inputs = useMemo(() => [owner, spender], [owner, spender])
  const allowance = useSingleCallResult(contract, 'allowance', inputs).result

  return useMemo(
    () => (token && allowance ? CurrencyAmount.fromRawAmount(token, allowance.toString()) : undefined),
    [token, allowance]
  )
}
