'use client'
import { Tables } from '@/types/database.types'
import { ReactNode, createContext, useContext } from 'react'

const useUser = () => {
  return useContext(UserContext)
}

const UserContext = createContext<Tables<'user_profiles'> | null>(null)

const UserProvider = ({
  children,
  userProfile,
}: {
  children: ReactNode
  userProfile: Tables<'user_profiles'>
}) => {
  return (
    <UserContext.Provider value={userProfile}>{children}</UserContext.Provider>
  )
}

export { UserProvider, useUser }
