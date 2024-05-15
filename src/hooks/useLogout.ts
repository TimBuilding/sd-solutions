import { createBrowserClient } from '@/utils/supabase'
import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const useLogout = (): UseMutationResult => {
  const router = useRouter()

  return useMutation({
    mutationFn: async () => {
      const supabase = createBrowserClient()

      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
    },
    onError: (error) => {
      console.error('Failed to logout', error)
    },
    onSuccess: () => {
      router.push('/login')
    },
  })
}

export default useLogout
