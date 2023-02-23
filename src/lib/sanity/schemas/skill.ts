import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Compétences',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom de la compétence',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'description',
      title: 'Description (blockContent)',
      type: 'blockContent',
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'technos',
      title: 'Technologies maitrisées',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techno' } }],
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'priority',
      title: `Priorité d'affichage`,
      type: 'number',
      validation: (rule) => rule.required().min(1).error('Doit être suppérieur à 1'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
