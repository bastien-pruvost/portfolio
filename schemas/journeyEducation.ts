import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Informations de la page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom de la formation',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'school',
      title: `Nom de l'école`,
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'degree',
      title: 'Diplôme',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'startDate',
      title: `Date de début`,
      type: 'date',
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'endDate',
      title: `Date de fin`,
      type: 'date',
      validation: (rule) =>
        rule
          .required()
          .min(rule.valueOfField('startDate'))
          .error('Doit être suppérieur à la date de début'),
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
