'use client'
import { z } from 'zod'

const AnnouncementSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Announcement title is required' })
    .max(255, {
      message: 'Announcement title must be less than 255 characters',
    }),
  content: z
    .string()
    .min(1, { message: 'Announcement content is required' })
    .max(1000, { message: 'Event content must be less than 1000 charcters' }),
})

export default AnnouncementSchema
