import React, { ComponentType, FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface IconProps {
  className?: string
}
export interface MobileProps {
  title: string
  icon: ComponentType<IconProps>
  iconClassName?: string
  disabled?: boolean
  href?: string
  onClick?: () => void
}

const MobileItemsDropdown: FC<MobileProps> = ({
  title,
  icon: Icon,
  iconClassName,
  disabled,
  href,
  onClick,
}) => {
  return (
    <>
      {!!href ? (
        <Link href={href}>
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
        </Link>
      ) : (
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
      )}
    </>
  )
}

export default MobileItemsDropdown
