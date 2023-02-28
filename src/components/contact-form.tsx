'use client'

import { useReCaptcha } from 'next-recaptcha-v3'
import { cn } from '@/lib/utils/classname'
import { FormEvent, useState } from 'react'
import { RecaptchaProvider } from '@/components-providers/recaptcha-provider'

export type MailData = { fullName: string; email: string; message: string }

export type SendedData = {
  mailData: MailData
  reCaptchaToken: string
}

export const ContactForm = () => {
  const [error, setError] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  const { executeRecaptcha } = useReCaptcha()

  const retryMessage =
    'Veuillez rafraichir la page et réessayer ou envoyer votre message par mail à contact@pruvostbastien.fr'

  const sendMail = async (data: SendedData) => {
    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
    return res.json()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!executeRecaptcha) {
      console.error('Erreur de reCaptcha Google')
      return
    }

    const form = event.target
    if (!(form instanceof HTMLFormElement)) {
      setError(`Une erreur est survenue. ${retryMessage}`)
      return
    }

    const formData: FormData = new FormData(form)
    const mailData = Object.fromEntries(formData) as MailData

    const reCaptchaToken = await executeRecaptcha('form_submit')

    const resData = await sendMail({ mailData, reCaptchaToken })

    // const resData = await sendMail(data)

    if (!resData.success) {
      setError(`${resData.message} ${retryMessage}`)
      return
    }
    setError('')
    form.reset()
    setResponseMessage(resData.message)
  }

  return (
    <RecaptchaProvider>
      <form onSubmit={handleSubmit} className={cn('flex flex-col')}>
        <label htmlFor='fullname' className={cn('text-color-light mb-1 text-sm')}>
          Votre nom :
        </label>
        <input
          type='text'
          name='fullname'
          className={cn('mb-2 rounded-sm bg-grey-100 px-3 py-2 dark:bg-grey-700')}
          required
        />

        <label htmlFor='email' className={cn('text-color-light mb-1 text-sm')}>
          Votre email :
        </label>
        <input
          type='email'
          name='email'
          className={cn('mb-2 rounded-sm bg-grey-100 px-3 py-2 dark:bg-grey-700')}
          required
        />

        <label htmlFor='message' className={cn('text-color-light mb-1 text-sm')}>
          Votre message :
        </label>
        <textarea
          name='message'
          className={cn('mb-4 resize-none rounded-sm bg-grey-100 px-3 py-2 dark:bg-grey-700')}
          required
        />

        {error && <p className={cn('mb-4 text-red-800 dark:text-red-300')}>{error}</p>}
        {responseMessage && <p className={cn('text-color-jade mb-4')}>{responseMessage}</p>}

        <button className={cn('rounded-sm bg-jade-400 py-2 font-semibold text-grey-800')}>
          Envoyer
        </button>
      </form>
    </RecaptchaProvider>
  )
}
