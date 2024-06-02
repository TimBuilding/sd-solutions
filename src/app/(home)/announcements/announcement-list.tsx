'use client'
import React, { FC } from 'react'
import { Tables } from '@/types/database.types'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import getAnnouncements from '@/queries/get-announcements'
import PostAnnouncement, {
  ExtendedAnnouncement,
} from '@/components/announcement-cards/post-announcement'

interface Props {
  initialData: ExtendedAnnouncement[]
}

const AnnouncementList: FC<Props> = ({ initialData }) => {
  const supabase = createBrowserClient()

  const { data, isPending } = useQuery({
    queryKey: ['announcements'],
    queryFn: () => getAnnouncements(supabase),
  })

  return (
    <>
      {data &&
        data.map((announcement) => (
          <PostAnnouncement key={announcement.id} announcement={announcement} />
        ))}
    </>
  )
}

export default AnnouncementList
