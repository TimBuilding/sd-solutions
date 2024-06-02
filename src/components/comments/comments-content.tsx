import React, { useState, ChangeEvent, FC } from 'react'
import { Textarea } from '@/components/ui/textarea'

interface CommentsContentProps {
  content: string
}

const CommentsContent: FC<CommentsContentProps> = ({ content }) => {
  return (
    <div className="mr-4">
      <Textarea
        className="h-32 w-full resize-none border-none bg-card placeholder:text-muted-foreground/30 focus-visible:ring-0"
        placeholder="Post a comment..."
      />
    </div>
  )
}

export default CommentsContent
