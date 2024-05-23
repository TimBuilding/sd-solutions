import React from 'react'
import PublishCommentsContent from '@/components/comments/publish-comments-content'

const PublishComments = () => {
  return (
    <div className="mx-auto flex w-[506px] flex-col">
      <span>Comments</span>
      <div>
        <PublishCommentsContent />
      </div>
    </div>
  )
}

export default PublishComments
