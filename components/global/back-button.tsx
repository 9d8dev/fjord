"use client";

import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  const handleBackButtonClick = () => {
    router.back()
  }

  return (
    <button onClick={handleBackButtonClick}>Go Back</button>
  )
}

export default BackButton
