import { Skeleton } from '../ui/skeleton'

const LoadingEvents = () => {
  return (
    <div
      className={'flex w-full flex-col bg-card px-8 py-10 text-card-foreground'}
    >
      <h2 className={'w-72 space-y-2 text-2xl font-extrabold md:text-3xl'}>
        <Skeleton className={'h-7 w-72'} />
        <Skeleton className={'h-7 w-32'} />
      </h2>
      <span className={'mt-10 leading-6 text-card-foreground/40'}>
        <Skeleton className={'h-6 w-32'} />
      </span>
      <p className={'mt-5 space-y-5 leading-6 text-card-foreground/60'}>
        <Skeleton className={'h-5 w-full'} />
        <Skeleton className={'h-5 w-full'} />
        <Skeleton className={'h-5 w-full'} />
        <Skeleton className={'h-5 w-full'} />
        <Skeleton className={'h-5 w-full'} />
      </p>
      <div className={'mt-2.5 flex w-full flex-row items-center justify-start'}>
        <div className={'flex w-fit flex-row items-center justify-center'}>
          <Skeleton className="z-0 h-10 w-10 rounded-full" />
        </div>
        <div
          className={'ml-4 flex w-full flex-row items-center justify-between'}
        >
          <div className={'flex flex-col gap-2'}>
            <span className={'text-xs leading-5 text-card-foreground/90'}>
              <Skeleton className="h-3 w-20" />
            </span>
            <span className={'text-xs leading-6 text-card-foreground/30'}>
              <Skeleton className="h-3 w-52" />
            </span>
          </div>
          <Skeleton className={'h-10 w-10 rounded-full'} />
        </div>
      </div>
    </div>
  )
}

export default LoadingEvents
