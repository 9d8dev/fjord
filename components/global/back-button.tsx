"use client";

import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  const handleBackButtonClick = () => {
    router.back()
  }

  return (
    <button className='' onClick={handleBackButtonClick}>Go Back</button>
  )
}

export default BackButton
