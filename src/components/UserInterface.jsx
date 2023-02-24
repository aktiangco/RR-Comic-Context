import React from "react"
import CollectorButton from './CollectorButton'
import SubmitForm from './SubmitForm'

const UserInterface = () => {
  return (
    <div>
      <h2>We carry the latest and greatest editions of your favorite comic books!</h2>
      <h2>Are you a collector?</h2>
      <CollectorButton />

      <h2>Have a special request? Click here to fill out our form</h2>
      <SubmitForm />
    </div>
  )
}

export default UserInterface