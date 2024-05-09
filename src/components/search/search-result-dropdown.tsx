import React from 'react'
import SearchResult from '@/components/search/search-result'

const SearchResultDropdown = () => {
  return (
    <div
      className={
        'absolute left-0 right-0 z-0 mx-auto mt-2 flex w-full max-w-3xl flex-col rounded-b-lg bg-white drop-shadow-md '
      }
    >
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  )
}

export default SearchResultDropdown
