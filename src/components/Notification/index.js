import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => {
  return (
    <ToastContainer
      transition={Slide}
      position="top-center"
      closeButton={false}
      bodyClassName="ToastBody"
    />
  )
}

Notification.emitError = toast.error
Notification.emitSuccess = toast.success
Notification.emitInfo = toast.info

export default Notification
