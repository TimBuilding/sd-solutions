import React, { FC } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

interface Props {
  setIsOpen: (_isOpen: boolean) => void
  isPending: boolean
}

const PublishInput: FC<Props> = ({ setIsOpen, isPending }) => {
  const { control } = useFormContext()

  return (
    <div className={'flex flex-row gap-5 px-4 pb-10'}>
      <Avatar>
        <AvatarImage src={'https://picsum.photos/200/300'} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <FormField
        control={control}
        name={'content'}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                onClick={() => setIsOpen(true)}
                className={
                  'h-16 w-full min-w-[380px] resize-none border-none bg-card placeholder:text-muted-foreground/30 focus-visible:ring-0'
                }
                disabled={isPending}
                placeholder={'Write something awesome...'}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default PublishInput
