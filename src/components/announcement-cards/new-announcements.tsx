'use client'
import React from 'react'
import NewAnnouncementContent from '@/components/announcement-cards/new-announcement-content'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const NewAnnouncements = () => {
  return (
    <Card className="h-full w-full max-w-xs justify-between">
      <CardHeader className="text-md font-bold text-[#393a4f]">
        Latest Announcements
      </CardHeader>
      <CardContent>
        <NewAnnouncementContent />
      </CardContent>
    </Card>
  )
}

export default NewAnnouncements
