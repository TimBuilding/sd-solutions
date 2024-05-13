'use client'

import { useState } from 'react'
import NewEventForm from './new-event-form'

const CreateNewEventButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="p-5">
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="w-full rounded-lg border-2 border-dashed p-4 text-sm font-medium text-muted-foreground/80 hover:bg-primary"
      >
        {isFormOpen ? 'Cancel' : 'Create New Event'}
      </button>
      {isFormOpen && <NewEventForm setIsFormOpen={setIsFormOpen} />}
    </div>
  )
}

export default CreateNewEventButton
