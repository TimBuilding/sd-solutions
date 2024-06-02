import React, { FC } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { ExtendedAnnouncement } from '@/components/announcement-cards/post-announcement'

interface UserProfileProps {
  first_name: string
  last_name: string
  announcement: ExtendedAnnouncement
  date: string
}

const UserProfile: FC<UserProfileProps> = ({
  first_name,
  last_name,
  announcement,
  date,
}) => {
  const config = genConfig(announcement.user_profiles.user_id || '')

  return (
    <div className="flex flex-row items-center justify-start">
      <Avatar className="h-11 w-11 rounded-full" {...config} />
      <div className="flex flex-col px-2">
        <span className="text-sm font-bold text-[#393a4f]">
          {' '}
          {first_name} {last_name}{' '}
        </span>
        <span className="text-sm font-normal text-[#999999]"> {date}</span>
      </div>
    </div>
  )
}

export default UserProfile
