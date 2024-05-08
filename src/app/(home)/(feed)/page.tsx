import React from 'react'
import Layout from '@/app/(home)/layout'
import Publish from '@/components/Publish/publish'
import Post from '@/components/Post/Post'

const Page = () => {
  return (
    <div className={'flex flex-col items-center gap-7'}>
      <Publish />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Page
