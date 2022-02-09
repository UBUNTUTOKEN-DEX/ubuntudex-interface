import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Card from 'app/components/Card'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import { selectTridentBalances } from 'app/features/trident/balances/balancesSlice'
import BentoActions from 'app/features/trident/balances/BentoActions'
import { useBalancesSelectedCurrency } from 'app/features/trident/balances/useBalancesDerivedState'
import { ActiveModal } from 'app/features/trident/types'
import { useAppSelector } from 'app/state/hooks'
import React from 'react'

import WalletActions from './WalletActions'

const _ActionsHeader = () => {
  const currency = useBalancesSelectedCurrency()

  return (
    <div className="flex justify-between p-5 border-b bg-dark-800 border-dark-700">
      <div className="flex items-center gap-4">
        <CurrencyLogo currency={currency} size={42} className="!rounded-full" />
        <Typography variant="h3" className="text-high-emphesis" weight={700}>
          {currency?.symbol}
        </Typography>
      </div>
    </div>
  )
}

export const ActionsAsideBento = () => {
  const { activeModal } = useAppSelector(selectTridentBalances)

  if (activeModal && [ActiveModal.MENU, ActiveModal.WITHDRAW].includes(activeModal))
    return (
      <div className="overflow-hidden rounded shadow-xl shadow-pink/5">
        <_ActionsHeader />
        <BentoActions />
      </div>
    )

  return <_ActionsAsideDefault />
}

export const ActionsAsideWallet = () => {
  const { activeModal } = useAppSelector(selectTridentBalances)

  if (activeModal && [ActiveModal.MENU, ActiveModal.DEPOSIT].includes(activeModal))
    return (
      <div className="overflow-hidden rounded shadow-xl shadow-pink/5">
        <_ActionsHeader />
        <WalletActions />
      </div>
    )

  return <_ActionsAsideDefault />
}

const _ActionsAsideDefault = () => {
  const { i18n } = useLingui()

  return (
    <div className="filter backdrop-blur-[154px]">
      <Card.Gradient className="!opacity-100 flex items-center justify-center !from-pink/10 !to-blue/10 border border-dark-800">
        <Typography variant="sm" className="px-10 py-[150px] text-center text-low-emphesis">
          {i18n._(t`Please select an asset to view available actions`)}
        </Typography>
      </Card.Gradient>
    </div>
  )
}
