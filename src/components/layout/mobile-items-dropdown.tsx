import React, { ComponentType, FC, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import UserProfileForm from '@/components/layout/user-profile-form'

interface IconProps {
  className?: string
}

export interface MobileProps {
  title: string
  icon: ComponentType<IconProps>
  iconClassName?: string
  disabled?: boolean
  onClick?: () => void
  isModal?: boolean
  path?: string
}

const MobileItemsDropdown: FC<MobileProps> = ({
  title,
  icon: Icon,
  iconClassName,
  disabled,
  onClick,
  isModal = false,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleIconClick = () => {
    if (isModal) {
      setModalIsOpen(true)
    } else {
      if (onClick) {
        onClick()
      }
    }
  }

  return (
    <div>
      {isModal ? (
        <Dialog>
          <DialogTrigger>
            <Button
              variant="ghost"
              className="w-full hover:bg-transparent"
              onClick={handleIconClick}
              disabled={disabled}
            >
              <div className="mr-auto flex w-fit flex-row items-center justify-center">
                <Icon className={iconClassName} />
                <span className="text-md pl-2 font-medium text-[#999999]">
                  {' '}
                  {title}
                </span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-left"> Edit Profile</DialogTitle>
            </DialogHeader>
            <UserProfileForm />
          </DialogContent>
        </Dialog>
      ) : (
        <div className="flex flex-row items-center">
          <Button
            variant="ghost"
            className="w-full hover:bg-transparent"
            onClick={handleIconClick}
            disabled={disabled}
          >
            <div className="mr-auto flex w-fit flex-row items-center justify-center">
              <Icon className={iconClassName} />
              <span className="text-md pl-2 font-medium text-[#999999]">
                {' '}
                {title}
              </span>
            </div>
          </Button>
        </div>
      )}
    </div>
  )
}

export default MobileItemsDropdown
