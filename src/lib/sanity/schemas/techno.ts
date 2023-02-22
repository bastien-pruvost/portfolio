import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'techno',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom de la techno',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie de la techno',
      type: 'string',
      options: {
        list: [
          { title: 'JS / TS', value: 'jsts' },
          { title: 'Front End', value: 'frontend' },
          { title: 'Back End', value: 'backend' },
          { title: 'Bases de données', value: 'database' },
          { title: 'Autres outils', value: 'other' },
        ],
      },
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'iconName',
      title: `Nom de l'icone (DevIcon)`,
      type: 'string',
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
    },
  },
})
