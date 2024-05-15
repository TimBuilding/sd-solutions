import React, { ComponentType, FC } from 'react'
import { Button } from '@/components/ui/button'

interface IconProps {
  className?: string
}
export interface MobileProps {
  title: string
  icon: ComponentType<IconProps>
  iconClassName?: string
  disabled?: boolean
  onClick?: () => void
}

const MobileItemsDropdown: FC<MobileProps> = ({
  title,
  icon: Icon,
  iconClassName,
  disabled,
  onClick,
}) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className="w-full hover:bg-transparent"
          onClick={onClick}
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
    </div>
  )
}

export default MobileItemsDropdown
