'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Megaphone, Calendar, LogOut, Bolt } from 'lucide-react'
import { Activity } from 'lucide-react'
import MobileItemsDropdown, {
  MobileProps,
} from '@/components/layout/mobile-items-dropdown'
import { useUser } from '@/providers/UserProvider'
import Avatar, { genConfig } from 'react-nice-avatar'
import useLogout from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'

const MobileItems: MobileProps[] = [
  {
    title: 'Feed',
    icon: Activity,
    iconClassName: 'h-4 w-4 text-[#999999]',
    path: '/',
  },
  {
    title: 'Announcements',
    icon: Megaphone,
    iconClassName: 'h-4 w-4 text-[#999999]',
    path: '/announcements',
  },
  {
    title: 'Events',
    icon: Calendar,
    iconClassName: 'h-4 w-4 text-[#999999]',
    path: '/events',
  },
  {
    title: 'Settings',
    icon: Bolt,
    iconClassName: 'h-4 w-4 text-[#999999]',
    isModal: true,
  },
]

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = useUser()

  const config = genConfig(user?.user_id ?? '')
  const { mutateAsync: logout, isPending: isLoggingOut } = useLogout()

  const router = useRouter()
  const handleItemClick = (path: string | undefined) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <div className="z-50 lg:hidden">
      <Button
        variant="ghost"
        className="hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col items-center justify-center">
          <span
            className={`my-0.5 block h-0.5 w-4 rounded-sm bg-[#999999] transition-all duration-300 ease-out ${
              isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-4 rounded-sm bg-[#999999] transition-all duration-300 ease-out  ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-4 rounded-sm bg-[#999999] transition-all duration-300 ease-out ${
              isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
          ></span>
        </div>
      </Button>
      {isOpen && (
        <div className="absolute left-0 right-0 z-0 mt-2 flex w-full flex-col gap-2 bg-white px-4 py-2 drop-shadow-md ">
          <div className="flex flex-row items-center gap-1.5">
            <Avatar {...config} className="h-6 w-6 rounded-full" />
            <span className="text-xs font-medium uppercase">
              {' '}
              {user?.first_name} {user?.last_name}{' '}
            </span>
          </div>
          <div className="border border-[#E6E6E6]"></div>
          {MobileItems.map((item, index) => (
            <MobileItemsDropdown
              key={index}
              title={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              isModal={item.isModal}
              onClick={() => handleItemClick(item.path)}
            />
          ))}
          <MobileItemsDropdown
            title="Logout"
            icon={LogOut}
            iconClassName="h-4 w-4 text-[#999999]"
            onClick={logout as any}
            disabled={isLoggingOut}
          />
        </div>
      )}
    </div>
  )
}

export default MobileDropdown
