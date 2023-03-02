'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/classname'

export const ContactInformations = () => {
  const [tel, setTel] = useState<string | null>(null)
  const [telDisplay, setTelDisplay] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const encodedTel = 'KzMzNjE3MzA5MDg4'
    const encodedTelDisplay = 'MDYgMTcgMzAgOTAgODg='
    const encodedEmail = 'Y29udGFjdEBwcnV2b3N0YmFzdGllbi5mcg=='

    setTimeout(() => {
      const decodedTel = Buffer.from(encodedTel, 'base64')
      const decodedTelDisplay = Buffer.from(encodedTelDisplay, 'base64')
      const decodedEmail = Buffer.from(encodedEmail, 'base64')

      setTel(decodedTel.toString('ascii'))
      setTelDisplay(decodedTelDisplay.toString('ascii'))
      setEmail(decodedEmail.toString('ascii'))
    }, 1000)
  }, [])

  return (
    <>
      <div className={cn('mb-2')}>
        <span className={cn('text-color-light')}>Email : </span>
        {email && (
          <a href={`mailto:${email}`}>
            <strong className={cn('text-color-jade animation-entry-confidentials')}>{email}</strong>
          </a>
        )}
      </div>
      <div className={cn('mb-6')}>
        <span className={cn('text-color-light')}>Téléphone : </span>
        {telDisplay && tel && (
          <a href={`tel:+33${tel}`}>
            <strong className={cn('text-color-jade animation-entry-confidentials')}>
              {telDisplay}
            </strong>
          </a>
        )}
      </div>
    </>
  )
}
