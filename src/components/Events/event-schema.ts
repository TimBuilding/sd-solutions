import { z } from 'zod'

const EventSchema = z.object({
  title: z
    .string()
    .min(1, 'Event name is required')
    .max(255, 'Event name must be less than 255 characters'),
  content: z
    .string()
    .min(1, 'Event content is required')
    .max(1000, 'Event content must be less than 1000 characters'),
})

export default EventSchema
