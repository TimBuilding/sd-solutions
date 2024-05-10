import React, { FC } from 'react'
import SearchResult from '@/components/search/search-result'
import { UseQueryResult } from '@tanstack/react-query'
import LoadingResult from '@/components/search/loading-result'
import { Tables } from '@/types/database.types'

interface Props {
  result: UseQueryResult<any, unknown>
}

const SearchResultDropdown: FC<Props> = ({ result }) => {
  return (
    <div
      className={
        'absolute left-0 right-0 z-0 mx-auto mt-2 flex w-full max-w-3xl flex-col rounded-b-lg bg-white drop-shadow-md '
      }
    >
      {result.isFetching && [1, 2, 3].map((i) => <LoadingResult key={i} />)}
      {result.isError
        ? 'Error'
        : result.data?.data.map((item: Tables<'user_profiles'>) => (
            <SearchResult key={item.user_id} profile={item} />
          ))}
    </div>
  )
}

export default SearchResultDropdown
