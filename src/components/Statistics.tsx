import React from 'react'

interface StatisticProps {
  value: string
  description: string
}

const Statistic: React.FC<StatisticProps> = ({ value, description }) => (
  <div className="flex flex-col gap-2">
    <div className="text-4xl font-bold">{value}</div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
)

export const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
      <Statistic
        value="~65"
        description="Only a handful of Web3 Accelerators exist worldwide"
      />
      <Statistic
        value="5,000+"
        description="There is an shortage of Founders across Web3 who are exploring Web3 patterns or are looking to make a move from Web2 to Web3"
      />
      <Statistic
        value="10"
        description="Indonesia has an extremely limited number of specialised Web3 Accelerators"
      />
    </div>
  )
}

