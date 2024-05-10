'use client'
import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle } from 'lucide-react'

const AnnouncementContent = () => {
  const config = genConfig()
  return (
    <div className="mx-auto flex flex-col">
      <div className="flex flex-row justify-between px-4 py-4">
        <div className="flex flex-row items-center justify-start">
          <Avatar className="h-11 w-11 rounded-full" {...config} />
          <div className="flex flex-col px-2">
            <span className="text-sm font-bold text-[#393a4f]"> Jane Doe </span>
            <span className="text-sm font-normal text-[#999999]">
              {' '}
              2 hours ago
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <Button variant="ghost" className="hover:bg-transparent">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hover:bg-transparent">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="px-4">
        <span className="text-left text-sm text-[#342558]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid de
          Pythagora? Quae est igitur causa istarum angustiarum? Non risu potius
          quam oratione eiciendum? Duo Reges: constructio interrete. An haec ab
          eo non dicuntur? Quae cum essent dicta, discessimus. At enim hic etiam
          dolore. Idem iste, inquam, de voluptate quid sentit? At enim sequor
          utilitatem. Iam in altera philosophiae parte. Ut optime, secundum
          naturam affectum esse possit. Hoc sic expositum dissimile est
          superiori.
        </span>
      </div>
    </div>
  )
}

export default AnnouncementContent
