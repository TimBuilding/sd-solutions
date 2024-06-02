'use client'

import { z } from 'zod'

const CommentsSchema = z.object({
  content: z
    .string()
    .min(1, { message: 'Comment content is required' })
    .max(1000, {
      message: 'Comment content must be less than 1000 characters',
    }),
})

export default CommentsSchema
