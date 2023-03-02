import { PageTransition } from '@/components-ui/page-transition'
import { ContactForm } from '@/components/contact-form'
import { ContactInformations } from '@/components/contact-informations'
import { cn } from '@/lib/utils/classname'
import React from 'react'

const ContactPage = () => {
  return (
    <div className={cn('scrollbar-custom mt-2 overflow-y-scroll pb-6 text-sm')}>
      <PageTransition>
        <h2 className={cn('page-title')}>Me contacter</h2>
        <div className={cn('gap-6 p-5 md:px-8')}>
          <h3 className={cn('text-color-light mb-4 text-sm leading-relaxed md:text-base')}>
            Pour en savoir plus, ou pour discuter de vos projets, n&apos;hésitez pas à me contacter.
          </h3>
          <ContactInformations />
          <p className={cn('paragraph mb-4')}>Formulaire de contact :</p>
          <ContactForm />
        </div>
      </PageTransition>
    </div>
  )
}

export default ContactPage
