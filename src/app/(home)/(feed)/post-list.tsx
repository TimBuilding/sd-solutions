'use client'
import React, { FC } from 'react'
import Post from '@/components/Post/Post'
import { Tables } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import getNewsfeed from '@/queries/get-newsfeed'

interface Props {
  initialData: Tables<'newsfeed'>[]
}

const PostList: FC<Props> = ({ initialData }) => {
  const supabase = createBrowserClient()

  const { data } = useQuery({
    queryKey: ['newsfeed'],
    queryFn: () => getNewsfeed(supabase),
    initialData,
  })

  return <>{data?.map((post) => <Post key={post.id} post={post} />)}</>
}

export default PostList
