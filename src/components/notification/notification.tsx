import { Bell } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import NotificationModal from './notification-modal'

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <Button
        variant="ghost"
        className="group hover:bg-secondary"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <Bell className="h-4 w-4 text-[#999999] group-hover:text-white" />
      </Button>
      {isModalOpen && <NotificationModal />}
    </>
  )
}

export default Notification
