'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import PublishInput from '@/components/Publish/publish-input'
import Activity from '@/components/Publish/activity'
import { Separator } from '@/components/ui/separator'
import Settings from '@/components/Publish/settings'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const Publish = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className={'relative w-full max-w-3xl pt-10'}>
      {isOpen && (
        <Button
          variant={'ghost'}
          size={'icon'}
          className={'absolute right-2 top-2 h-6 w-6'}
          onClick={() => setIsOpen(false)}
        >
          <X className={'h-4 w-4'} />
        </Button>
      )}
      <PublishInput setIsOpen={setIsOpen} />
      <Separator />
      <Activity />
      {isOpen && (
        <>
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
