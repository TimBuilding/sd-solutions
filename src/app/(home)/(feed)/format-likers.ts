import { Tables } from '@/types/database.types'

type Liker = Tables<'newsfeed_likes'> & {
  user_profiles: {
    first_name: string
    user_id: string
    email: string
  }
}

const formatLikers = (likers: Liker[]): string => {
  if (likers.length === 0) {
    return ''
  }

  const names = likers.map(
    (liker) => liker.user_profiles?.first_name || 'Unknown',
  )

  if (names.length === 1) {
    return names[0]
  }

  return names.slice(0, 2).join(', ')
}

// this will show as "2 more people liked this"
const countLikers = (likers: Liker[]): number => {
  const likerCount = likers.length
  if (likerCount > 2) {
    return likerCount - 2
  } else {
    return 0
  }
}

// get total number of likes
const getTotalLikes = (likers: Liker[]): number => {
  return likers.length
}

const getLikerUserIds = (likers: Liker[]): string[] => {
  return likers.slice(0, 3).map((l) => l.user_profiles.user_id)
}

export { formatLikers, countLikers, getTotalLikes, getLikerUserIds }
