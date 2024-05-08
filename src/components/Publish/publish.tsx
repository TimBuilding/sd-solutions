'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'
import { Separator } from '@/components/ui/separator'
import Settings from '@/components/Publish/settings'
import { Button } from '@/components/ui/button'

const Publish = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={'w-full max-w-3xl pt-10'}>
      <PublishInput setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <Separator />
          <Activity />
          <Separator />
          <Settings />
          <Separator />
          <div className={'p-2'}>
            <Button className={'w-full'}>Publish</Button>
          </div>
        </>
      )}
    </Card>
  )
}

export default Publish
