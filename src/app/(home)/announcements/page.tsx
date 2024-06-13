'use server'

import React, { FC } from 'react'
import AnnouncementList from '@/app/(home)/announcements/announcement-list'
import PublishAnnouncement from '@/components/announcement-cards/publish-announcement'
import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

const Page = async () => {
  const supabase = createServerClient(cookies())
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // get user profile
  const { data: userProfile, error: userProfileError } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', user?.id)
    .eq('role', 'admin')
    .maybeSingle()

  console.log(userProfile)
  return (
    <div className="mx-auto flex flex-col gap-7 px-4">
      {(userProfile || userProfileError) && <PublishAnnouncement />}
      {/*<PostAnnouncement />*/}
      {/*<Comments />*/}
      {/*<PublishComments />*/}
      <AnnouncementList initialData={[]} />
    </div>
  )
}

export default Page
