'use client'
import React, { FC, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import SearchResultDropdown from '@/components/search/search-result-dropdown'
import { useDebounce } from 'use-debounce'
import useSearch from '@/components/search/use-search'

interface Props {
  setIsSearchOpen: (value: boolean) => void
}

const SearchBox: FC<Props> = ({ setIsSearchOpen }) => {
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 2000)

  const { isFetching, isError, data, error } = useSearch(debouncedSearch)

  console.log(data)

  return (
    <div className={'relative mx-auto w-full max-w-3xl'}>
      <Input
        icon={<Search className="h-4 w-4 text-[#999999]" />}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-none bg-[#F7F7F7] placeholder:text-zinc-300 focus:bg-white"
      />
      <X
        onClick={() => setIsSearchOpen(false)}
        className={
          'absolute right-3 top-3 h-4 w-4 cursor-pointer text-[#999999]'
        }
      />
      <SearchResultDropdown />
    </div>
  )
}

export default SearchBox
