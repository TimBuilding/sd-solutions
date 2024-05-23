import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import PublishCommentsReact from '@/components/comments/publish-comments-react'

const PublishCommentsContent = () => {
  const config = genConfig()
  return (
    <div className="mx-auto flex flex-row gap-4 py-4">
      <div className="border-1 h-fit rounded-full border border-[#999999] p-1.5">
        <Avatar className="h-8 w-8 flex-shrink-0 rounded-full" {...config} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm font-bold"> Jeremy Francisco</span>
          <span className="text-xs text-[#999999]"> 3 hours ago</span>
        </div>
        <span className="text-base text-[#6A6C93]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
          eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
          mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        </span>
        <PublishCommentsReact />
      </div>
    </div>
  )
}

export default PublishCommentsContent
