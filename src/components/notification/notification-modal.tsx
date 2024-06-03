import getAnnouncements from '@/queries/get-announcements'
import { createBrowserClient } from '@/utils/supabase'
import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { Megaphone } from 'lucide-react'

const NotificationModal = () => {
  const supabase = createBrowserClient()

  const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getAnnouncements(supabase),
  })

  console.log(data)

  return (
    <div className="absolute left-0 right-0 top-16 mx-auto flex w-[calc(100vw-20px)] flex-col gap-4 rounded-lg bg-white p-6 md:left-20 md:right-auto md:max-w-xs">
      <div className="border-b border-border py-2">
        <span className="text-sm font-medium uppercase text-[#a2a5b9]">
          Notifications
        </span>
      </div>
      <div>
        {data &&
          data.map((announcement) => (
            <div
              key={announcement.id}
              className="flex flex-row items-center justify-start gap-4"
            >
              <div className="rounded-full bg-primary p-2">
                <Megaphone className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="text-sm">
                <p>
                  New announcement{' '}
                  <span className="font-medium">{announcement.title}</span> has
                  been posted.
                </p>
                <span className="text-xs text-[#a2a5b9]">
                  {formatDistanceToNow(new Date(announcement.created_at), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default NotificationModal
