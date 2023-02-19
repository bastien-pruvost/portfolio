import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projets',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technos',
      title: 'Technos utilisées',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techno' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const { subtitle } = selection
    //   return { ...selection, subtitle: author && `by ${author}` }
    // },
  },
})
