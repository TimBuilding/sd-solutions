'use client'
import React, { useState } from 'react'
import { Bell, Heart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SDSolutionsLogoMinimal from '@/components/SDSolutionsLogo-Minimal'
import MobileDropdown from '@/components/layout/mobile-dropdown'
import DesktopDropdown from '@/components/layout/desktop-dropdown'
import SearchBox from '@/components/search/search-box'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="sticky top-0 z-10 flex w-full flex-row  justify-between bg-white px-3 py-2 drop-shadow-md">
      {isSearchOpen ? (
        <SearchBox setIsSearchOpen={setIsSearchOpen} />
      ) : (
        <>
          <div className="flex flex-row items-center justify-start gap-2.5">
            <SDSolutionsLogoMinimal
              className="h-6 w-6 bg-transparent fill-black"
              style={{
                filter:
                  'invert(17%) sepia(17%) saturate(7489%) hue-rotate(158deg) brightness(92%) contrast(89%)',
              }}
            />
            <Button variant="ghost" className="group hover:bg-red-500">
              <Heart className="h-4 w-4 text-[#999999] group-hover:animate-pulse group-hover:fill-white group-hover:text-white group-hover:delay-0 group-hover:duration-1000" />
            </Button>
            <Button variant="ghost" className="group hover:bg-secondary">
              <Bell className="h-4 w-4 text-[#999999] group-hover:text-white" />
            </Button>
            <Button
              onClick={() => setIsSearchOpen(true)}
              variant="ghost"
              className="group hover:bg-[#3d70b2] lg:hidden "
            >
              <Search className="h-4 w-4 text-[#999999] group-hover:text-white lg:hidden" />
            </Button>
          </div>
          <div className="flex flex-row justify-end gap-2.5">
            <Input
              icon={
                <Search className="hidden h-4 w-4 text-[#999999] lg:block" />
              }
              placeholder="Search"
              className="hidden w-80 rounded-full border border-none bg-[#F7F7F7] placeholder:text-zinc-300 focus:bg-white lg:block"
            />
            <DesktopDropdown />
          </div>
          <MobileDropdown />
        </>
      )}
    </div>
  )
}

export default Navbar
