'use client'

import { FormEvent, useState } from 'react'
import { useReCaptcha } from 'next-recaptcha-v3'

import { cn } from '@/lib/utils/classname'
import { adjustTextareaHeight } from '@/lib/utils/text-area'
import { RecaptchaProvider } from '@/components-providers/recaptcha-provider'

type MailData = { fullName: string; email: string; message: string }

type SendedData = {
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
        <label htmlFor='fullname' className={cn('text-color-light mb-1.5 ml-0.5 text-sm')}>
          Votre nom :
        </label>
        <input
          type='text'
          name='fullname'
          className={cn('mb-4 rounded-[5px] bg-grey-50 px-3 py-2 dark:bg-grey-700')}
          required
        />

        <label htmlFor='email' className={cn('text-color-light mb-1.5 ml-0.5 text-sm')}>
          Votre email :
        </label>
        <input
          type='email'
          name='email'
          className={cn('mb-4 rounded-[5px] bg-grey-50 px-3 py-2 dark:bg-grey-700')}
          required
        />

        <label htmlFor='message' className={cn('text-color-light mb-1.5 ml-0.5 text-sm')}>
          Votre message :
        </label>
        <textarea
          name='message'
          className={cn(
            'mb-6 h-28 resize-none rounded-[5px] bg-grey-50 px-3 py-2 dark:bg-grey-700',
          )}
          required
          onInput={adjustTextareaHeight}
        />

        {error && <p className={cn('mb-4 text-red-800 dark:text-red-300')}>{error}</p>}
        {responseMessage && <p className={cn('text-color-jade mb-4')}>{responseMessage}</p>}

        <button
          className={cn(
            'transition-bg-color rounded-[5px] bg-jade-700 py-2 font-semibold text-grey-50 hover:bg-jade-600 dark:bg-jade-500 dark:text-grey-800 hover:dark:bg-jade-400',
          )}
        >
          Envoyer
        </button>
      </form>
    </RecaptchaProvider>
  )
}
