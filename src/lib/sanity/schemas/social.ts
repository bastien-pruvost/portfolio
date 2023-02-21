import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Réseaux sociaux',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du réseau social',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'iconName',
      title: `Nom de l'icone (DevIcon)`,
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'url',
      title: 'Url du réseau social',
      type: 'url',
      validation: (rule) => rule.required().error('Doit être une URL'),
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
      subtitle: 'url',
    },
  },
})
