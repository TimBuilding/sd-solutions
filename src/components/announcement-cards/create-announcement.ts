import AnnouncementSchema from '@/components/announcement-cards/publish-announcement-schema'
import { z } from 'zod'
import { createBrowserClient } from '@/utils/supabase'
import { TablesInsert } from '@/types/database.types'

const createAnnouncement = async (
  formData: z.infer<typeof AnnouncementSchema>,
) => {
  const { title, content } = formData // Destructure the title and content from the form data
  const supabase = createBrowserClient() // Create a Supabase client
  const {
    data: { user },
  } = await supabase.auth.getUser() // Get the current user

  if (!user) {
    throw new Error('You must be logged in to create an announcement') // Throw an error if the user is not logged in
  }

  let imageUrl = null

  // upload image to bucket
  if (formData.imageFile) {
    const photoFile = formData.imageFile
    if (!photoFile) {
      throw new Error('No image file provided')
    }
    const bytes = await photoFile.arrayBuffer()
    const bucket = supabase.storage.from('announcements')
    const extension = photoFile.name.split('.').pop()
    const fileName = `${user.id}-${Date.now()}.${extension}`

    const { error, data } = await bucket.upload(`${fileName}`, bytes, {
      upsert: true,
    })

    if (error) {
      throw error
    }

    console.log(data)

    const { data: publicURL } = supabase.storage
      .from('announcements')
      .getPublicUrl(fileName)

    imageUrl = publicURL.publicUrl
  }

  // Create an object with the title, content, and user_id to insert into the database
  const insertAnnouncement: TablesInsert<'announcements'> = {
    title,
    content,
    user_id: user.id,
    image_url: imageUrl,
  }

  await supabase.from('announcements').insert(insertAnnouncement).throwOnError() // Insert the announcement into the database
}

export default createAnnouncement
