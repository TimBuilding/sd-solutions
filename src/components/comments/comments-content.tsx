import React from 'react'
import { Textarea } from '@/components/ui/textarea'

const CommentsContent = () => {
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
