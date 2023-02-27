import { PageTransition } from '@/components-ui/page-transition'
import { cn } from '@/lib/utils/classname'
import React from 'react'

const ContactPage = () => {
  return (
    <PageTransition>
      <div className={cn('page-title')}>
        <h2>Me contacter</h2>
      </div>
    </PageTransition>
  )
}

export default ContactPage
