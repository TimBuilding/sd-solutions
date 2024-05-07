import React from 'react'
import { Heart } from 'lucide-react'
import { Bell } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Grip } from 'lucide-react'
import { Search } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-row justify-start gap-2">
        <Button variant="ghost" className="group hover:bg-red-500">
          <Heart className="h-4 w-4 text-[#999999] group-hover:animate-pulse group-hover:fill-white group-hover:text-white group-hover:delay-0 group-hover:duration-1000" />
        </Button>
        <Button variant="ghost" className="group hover:bg-[#6ba4e9]">
          <Bell className="h-4 w-4 text-[#999999] group-hover:text-white" />
        </Button>
        <Button variant="ghost" className="group hover:bg-[#6ba4e9]">
          <Mail className="h-4 w-4 text-[#999999] group-hover:text-white " />
        </Button>
        <Button variant="ghost" className="group hover:bg-[#3d70b2]">
          <Grip className="h-4 w-4 text-[#999999] group-hover:text-white" />
        </Button>
        <Button variant="ghost" className="group hover:bg-[#3d70b2]">
          <Search className="h-4 w-4 text-[#999999] group-hover:text-white" />
        </Button>
      </div>
      <Button variant="ghost" className="hover:bg-transparent">
        <Menu className="h-4 w-4 text-[#999999]" />
      </Button>
    </div>
  )
}

export default Navbar
