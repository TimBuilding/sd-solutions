'use server'
import React from 'react'
import Publish from '@/components/Publish/publish'
import Post from '@/components/Post/Post'
import PostList from '@/app/(home)/(feed)/post-list'
import getNewsfeed from '@/queries/get-newsfeed'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

const NewsfeedPage = async () => {
  const supabase = createServerClient(cookies())
  const initialData = await getNewsfeed(supabase)
  console.log(initialData)

  return (
    <div className={'flex flex-col items-center gap-7'}>
      <Publish />
      <PostList />
    </div>
  )
}

export default NewsfeedPage
