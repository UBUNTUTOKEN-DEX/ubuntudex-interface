import Typography from 'app/components/Typography'
import React, { FC, ReactNode } from 'react'

const ActionItem: FC<{ svg: ReactNode; label: string; onClick?(): void }> = ({ svg, onClick, label }) => {
  return (
    <div
      className="border border-dark-700 bg-dark-900 hover:bg-dark-800 rounded px-3 py-2.5 w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full border-[3px] border-transparent border-gradient-r-blue-pink-dark-900 flex items-center justify-center">
          {svg}
        </div>
        <Typography variant="lg" className="text-high-emphesis" weight={700}>
          {label}
        </Typography>
      </div>
    </div>
  )
}

export default ActionItem
