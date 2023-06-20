import { Icons } from '@/components/icons'
import { useState } from 'react'

interface Menu {
  value: string
  label: string
  icon: JSX.Element
}
const sidebars: Menu[] = [
  {
    value: 'dashboard',
    label: 'Dashboard',
    icon: <Icons.home />
  },
  {
    value: 'portfolio',
    label: 'Portfolio',
    icon: <Icons.case />
  }
]
export const SideBar = () => {
  const [active] = useState('portfolio')
  return (
    <div className="flex flex-col p-6">
      <span className="labelMenu pb-4 text-sm">Menu</span>
      <div className="flex flex-col gap-2">
        {sidebars.map(item => {
          return (
            <div
              key={item.value}
              className={`flex items-center gap-1 text-sm ${
                active === item.value ? 'font-bold text-primary' : ''
              }`}>
              {item.icon}
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
