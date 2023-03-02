import { cn } from '@/lib/utils/classname'
import { ContactInformations } from '@/components/contact-informations'
import { ContactForm } from '@/components/contact-form'
import { PageLayout } from '@/components-ui/page-layout'
import { pageDetailsQuery } from '@/lib/sanity/queries/page-details'
import type { PageDetails } from '@/types/sanity-models/page-details'
import { sanityClientFetch } from '@/lib/sanity/sanity.client'
import { Wrapper } from '@/components-ui/wrapper'

const ContactPage = async () => {
  const pageDetails = await sanityClientFetch<PageDetails>(pageDetailsQuery)

  return (
    <PageLayout title={pageDetails.contactTitle}>
      <Wrapper>
        <div className={cn('my-4 flex flex-col gap-6')}>
          <h4>
            Pour en savoir plus, ou pour discuter de vos projets, n&apos;hésitez pas à me contacter
            :
          </h4>
          <ContactInformations />
          <ContactForm />
        </div>
      </Wrapper>
    </PageLayout>
  )
}

export default ContactPage
