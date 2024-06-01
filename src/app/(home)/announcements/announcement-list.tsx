'use client'
import React, { FC } from 'react'
import { Tables } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import getAnnouncements from '@/queries/get-announcements'
import PostAnnouncement from '@/components/announcement-cards/post-announcement'

// interface Props {
//   initialData: Tables<'announcements'>[]
// }

const AnnouncementList = () => {
  const supabase = createBrowserClient()

  const { data, isPending } = useQuery({
    queryKey: ['announcements'],
    queryFn: () => getAnnouncements(supabase),
  })

  console.log(data)

  return <></>

  // return (
  //   <>
  //     {data && data.map((announcement) => <PostAnnouncement key={announcement.id}/>)}
  //   </>
  // )
}

export default AnnouncementList
