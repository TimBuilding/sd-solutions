import { z } from 'zod'

const PublishSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty.').max(1000),
})

export default PublishSchema
