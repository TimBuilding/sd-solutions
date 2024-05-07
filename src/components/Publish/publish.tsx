import React from 'react'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'

const Publish = () => {
  return (
    <Card className={'w-full max-w-3xl px-4 pt-10'}>
      <PublishInput />
      <Activity />
    </Card>
  )
}

export default Publish
