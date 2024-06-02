import React from 'react'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react'

const PublishCommentsReact = () => {
  return (
    <div className="flex min-w-full flex-row items-center justify-between pt-4">
      <div className="flex flex-row justify-start  gap-4">
        <ThumbsUp className="h-5 w-5 text-[#999999]" />
        <ThumbsDown className="h-5 w-5 text-[#999999]" />
      </div>
      <div className="flex flex-row gap-2 ">
        <div className="group h-8 w-8 rounded-full border border-[#999999] hover:border-[#1ce589]">
          <Button variant="ghost" className="hover:bg-transparent">
            {' '}
            <ThumbsUp className="-ml-2 -mt-3 h-3.5 w-3.5 text-[#999999] group-hover:text-[#1ce589] " />
          </Button>
        </div>
        <div className="group h-8 w-8 rounded-full border border-[#999999] hover:border-red-500">
          <Button variant="ghost" className="hover:bg-transparent">
            {' '}
            <ThumbsDown className="-ml-2 -mt-2 h-3.5 w-3.5 text-[#999999] group-hover:text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PublishCommentsReact
