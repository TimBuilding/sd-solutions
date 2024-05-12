'use client'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const NewEventForm = () => {
  return (
    <form className="mt-4 flex w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col gap-2">
        <Label>Event Name</Label>
        <Input className="w-full" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Label>Event Content</Label>
        <Textarea className="w-full " />
      </div>
      <Button className="w-full">Create Event</Button>
    </form>
  )
}

export default NewEventForm
