import React, { useState, ChangeEvent, FC } from 'react'
import { Textarea } from '@/components/ui/textarea'

interface CommentsContentProps {
  onCommentChange: (comment: string) => void
}

const CommentsContent: FC<CommentsContentProps> = ({ onCommentChange }) => {
  const [comment, setComment] = useState('')

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
    onCommentChange(e.target.value)
  }

  return (
    <div className="mr-4">
      <Textarea
        className="h-32 w-full resize-none border-none bg-card placeholder:text-muted-foreground/30 focus-visible:ring-0"
        placeholder="Post a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
    </div>
  )
}

export default CommentsContent
