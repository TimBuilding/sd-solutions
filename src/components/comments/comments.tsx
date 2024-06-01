import React, { FC } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import CommentsContent from '@/components/comments/comments-content'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const Comments = () => {
  return (
    <div className="py-4">
      <Card className="w-full border border-slate-200 drop-shadow-sm">
        <CardContent className="p-3 pt-4  ">
          <CommentsContent />
          <Separator />
          <div className="flex flex-row justify-end pt-2">
            <Button className="h-9 rounded-lg bg-secondary text-center text-xs font-semibold text-white ">
              Post Comment{' '}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Comments
