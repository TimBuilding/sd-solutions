'use client'
import React, { FC } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Props {
  setIsSearchOpen: (value: boolean) => void
}

const SearchBox: FC<Props> = ({ setIsSearchOpen }) => {
  return (
    <div className={'w-full'}>
      <div className={'relative'}>
        <Input
          icon={<Search className="h-4 w-4 text-[#999999]" />}
          placeholder="Search"
          className="w-full rounded-full border border-none bg-[#F7F7F7] placeholder:text-zinc-300 focus:bg-white"
        />
        <X
          onClick={() => setIsSearchOpen(false)}
          className={
            'absolute right-3 top-3 h-4 w-4 cursor-pointer text-[#999999]'
          }
        />
      </div>
    </div>
  )
}

export default SearchBox
