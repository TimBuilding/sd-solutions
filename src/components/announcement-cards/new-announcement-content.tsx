'use client'
import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

const NewAnnouncementContent = () => {
  const config = genConfig()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4 pt-2">
        <div className="h-12 w-12 rounded-xl bg-primary"></div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#42435b]">
            {' '}
            New Announcement
          </span>
          <div className="flex flex-row items-center justify-start gap-1 pt-1">
            <Avatar className="h-5 w-5 rounded-full" {...config} />
            <span className="text-xs font-semibold text-[#999999]">
              {' '}
              Jane Doe
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 pt-2">
        <div className="h-12 w-12 rounded-xl bg-primary"></div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#42435b]">
            {' '}
            New Announcement
          </span>
          <div className="flex flex-row items-center justify-start gap-1 pt-1">
            <Avatar className="h-5 w-5 rounded-full" {...config} />
            <span className="text-xs font-semibold text-[#999999]">
              {' '}
              Jane Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewAnnouncementContent
