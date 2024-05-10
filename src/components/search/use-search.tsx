'use client'
import { useQuery } from '@tanstack/react-query'
import { createBrowserClient } from '@/utils/supabase'

const useSearch = (query: string) => {
  // check if query is empty

  const supabase = createBrowserClient()
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => {
      return supabase
        .from('user_profiles')
        .select('*')
        .textSearch('first_last_name', query, { type: 'plain' })
        .throwOnError()
    },
    enabled: query.length > 0,
  })
}

export default useSearch
