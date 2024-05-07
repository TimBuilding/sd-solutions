import React from 'react'
import { Card } from '@/components/ui/card'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'
import { Separator } from '@/components/ui/separator'

const Publish = () => {
  return (
    <Card className={'w-full max-w-3xl pt-10'}>
      <PublishInput />
      <Separator />
      <Activity />
    </Card>
  )
}

export default Publish
