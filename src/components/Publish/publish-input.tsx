import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@/providers/UserProvider'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import Avatar, { genConfig } from 'react-nice-avatar'

interface Props {
  setIsOpen: (_isOpen: boolean) => void
  isPending: boolean
}

const PublishInput: FC<Props> = ({ setIsOpen, isPending }) => {
  const { control } = useFormContext()
  const user = useUser()
  const config = genConfig(user?.user_id ?? '')

  return (
    <div className={'flex flex-row gap-5 px-4 pb-10'}>
      <Avatar {...config} className="h-10 w-10 shrink-0 rounded-full" />
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
