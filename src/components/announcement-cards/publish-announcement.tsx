import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import PublishAnnouncementContent from '@/components/announcement-cards/publish-announcement-content'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const PublishAnnouncement = () => {
  return (
    <div>
      <Card className="w-full border border-slate-200 drop-shadow-sm">
        <CardContent className="p-3 pt-4">
          <PublishAnnouncementContent />
          <Separator />
          <div className="flex flex-row justify-end pt-2">
            <Button className="h-9 rounded-lg bg-secondary text-center text-xs font-semibold text-white ">
              Post Announcement{' '}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PublishAnnouncement
