'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Loader2, LogOut } from 'lucide-react'
import { useUser } from '@/providers/UserProvider'
import Avatar, { genConfig } from 'react-nice-avatar'
import useLogout from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'

const DesktopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const user = useUser()
  const config = genConfig(user?.user_id ?? '')
  const router = useRouter

  const { isPending: isLoggingOut, mutateAsync: logout } = useLogout()

  return (
    <div className="hidden lg:block">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant={'ghost'}
        size={'icon'}
        className="rounded-full"
      >
        <Avatar {...config} className="h-9 w-9 rounded-full" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 z-0 mr-4 flex w-48 flex-col gap-2 rounded-md bg-white px-4 py-4 drop-shadow-md">
          <div className="items-center justify-between">
            <span className="text-xs font-semibold"> JANE DOE </span>
          </div>
          <div className="mx-0 w-full border border-[#E6E6E6]"></div>
          <div className="flex flex-row items-center gap-3.5">
            <Avatar {...config} className="h-6 w-6 rounded-full" />
            <div className="flex flex-col">
              <span className="text-sm font-medium"> Jane Doe </span>
              <span className="text-xs font-normal text-[#999999]">
                {' '}
                Human Resources
              </span>
            </div>
          </div>
          <div className="border border-[#E6E6E6]"></div>
          <div className="-ml-3 flex w-fit flex-row items-center justify-between">
            <Button
              variant="ghost"
              className="hover:bg-transparent"
              onClick={logout}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <LogOut className="h-4 w-4 text-[#999999]" />
                  <span className="text-md pl-2 font-medium text-[#999999]">
                    Logout
                  </span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DesktopDropdown
