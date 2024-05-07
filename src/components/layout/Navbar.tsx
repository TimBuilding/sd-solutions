import React from 'react'
import { Heart } from 'lucide-react'
import { Bell } from 'lucide-react'
import { Search } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Navbar = () => {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-row justify-start gap-2">
        <Button variant="ghost" className="group hover:bg-red-500">
          <Heart className="h-4 w-4 text-[#999999] group-hover:animate-pulse group-hover:fill-white group-hover:text-white group-hover:delay-0 group-hover:duration-1000" />
        </Button>
        <Button variant="ghost" className="group hover:bg-secondary">
          <Bell className="h-4 w-4 text-[#999999] group-hover:text-white" />
        </Button>
        <Button variant="ghost" className="group hover:bg-[#3d70b2] lg:hidden ">
          <Search className="h-4 w-4 text-[#999999] group-hover:text-white lg:hidden" />
        </Button>
      </div>
      <div className="flex flex-row justify-end gap-2.5">
        <Input
          icon={<Search className="hidden h-4 w-4 text-[#999999] lg:block" />}
          placeholder="Search"
          className="hidden w-80 rounded-full border border-none bg-[#F7F7F7] placeholder:text-zinc-300 focus:bg-white lg:block"
        />
        <Button
          variant="ghost"
          className="hidden h-9 w-9 rounded-full bg-primary lg:block"
        />
      </div>
      <Button variant="ghost" className="hover:bg-transparent lg:hidden">
        <Menu className="h-4 w-4 text-[#999999]" />
      </Button>
    </div>
  )
}

export default Navbar
