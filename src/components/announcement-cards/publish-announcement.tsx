import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AnnouncementForm from '@/components/announcement-cards/publish-announcement-form'
import { Plus } from 'lucide-react'

const PublishAnnouncement = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row justify-end pt-2">
          <Button className="h-9 gap-1 rounded-lg bg-secondary text-center text-xs font-semibold text-white ">
            <Plus className="h-4 w-4 " /> <span>Post Announcement</span>
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[425px] rounded-lg lg:w-full">
        <DialogHeader>
          <DialogTitle className="text-left">Post an Announcement</DialogTitle>
        </DialogHeader>
        <AnnouncementForm />
      </DialogContent>
    </Dialog>
  )
}

export default PublishAnnouncement
