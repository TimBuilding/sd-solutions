import * as React from 'react'
import { ReactNode } from 'react'

import { cn } from '@/utils/tailwind'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className={'group relative'}>
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground group-focus-within:text-ring">
            {icon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            icon ? 'pl-10' : 'pl-3',
            'flex h-10 w-full rounded-md border border-input bg-background py-2 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
