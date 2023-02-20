import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Informations de la page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du poste',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'company',
      title: `Nom de l'entreprise`,
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'companyLogo',
      title: `Logo de l'entreprise`,
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'description',
      title: `Description de l'experience pro`,
      type: 'blockContent',
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
      subtitle: 'company',
      media: 'companyLogo',
    },
  },
})
