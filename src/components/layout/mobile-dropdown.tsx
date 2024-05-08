'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Megaphone, Menu, Calendar, LogOut } from 'lucide-react'
import { Activity } from 'lucide-react'
import MobileItemsDropdown, {
  MobileProps,
} from '@/components/layout/mobile-items-dropdown'

const MobileItems: MobileProps[] = [
  {
    title: 'Feed',
    icon: Activity,
    iconClassName: 'h-4 w-4 text-[#999999]',
  },
  {
    title: 'Announcements',
    icon: Megaphone,
    iconClassName: 'h-4 w-4 text-[#999999]',
  },
  {
    title: 'Events',
    icon: Calendar,
    iconClassName: 'h-4 w-4 text-[#999999]',
  },
  {
    title: 'Logout',
    icon: LogOut,
    iconClassName: 'h-4 w-4 text-[#999999]',
  },
]

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4 text-[#999999]" />
      </Button>
      {isOpen && (
        <div className="absolute left-0 right-0 z-0 mt-2 flex w-full flex-col gap-2 bg-white px-4 py-2 drop-shadow-md ">
          <div className="flex flex-row items-center gap-1.5">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span className="text-xs font-normal"> JANE DOE </span>
          </div>
          <div className="border border-[#E6E6E6]"></div>
          {MobileItems.map((item, index) => (
            <MobileItemsDropdown
              key={index}
              title={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileDropdown
