'use client' 
 
import { useEffect } from 'react'
import {  IconRestore } from "@tabler/icons-react";
import { Button, Image } from "@nextui-org/react";
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center'>
      <div className='justify-center m-auto mb-5'>
        <Image
          width={300}
          src='https://i.imgur.com/2MSvMRE.gif'
        />
      </div>
      <div className='flex items-center justify-center mb-2'>
        <h2 className='text-2xl'>Something went wrong!</h2>
      </div>
      <Button 
        startContent={<IconRestore/>}
        size='md'
        color='secondary'
        variant='shadow'
        className='w-30 m-auto'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}