import { z } from 'zod'

const SignupSchema = z
  .object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

export default SignupSchema
