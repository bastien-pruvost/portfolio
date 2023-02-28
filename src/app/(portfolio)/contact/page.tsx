import { PageTransition } from '@/components-ui/page-transition'
import { ContactForm } from '@/components/contact-form'
import { cn } from '@/lib/utils/classname'
import React from 'react'

const ContactPage = () => {
  return (
    <PageTransition>
      <h2 className={cn('page-title')}>Me contacter</h2>
      <div className={cn('gap-6 p-5')}>
        <h3 className={cn('text-color-light mb-4 text-sm font-medium')}>
          N&apos;hésitez pas à me contacter pour en savoir plus sur moi ou pour discuter de vos
          projets.
        </h3>
        <ContactForm />
      </div>
    </PageTransition>
  )
}

export default ContactPage
