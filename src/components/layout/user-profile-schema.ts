'use client'
import { z } from 'zod'

const UserProfileSchema = z.object({
  firstName: z.string().min(1, { message: 'This field is required' }),
  lastName: z.string().min(1, { message: 'This field is required' }),
})

export default UserProfileSchema
