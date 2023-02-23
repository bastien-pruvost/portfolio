import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hobbie',
  title: 'Loisirs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du loisir',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'iconName',
      title: `Nom de l'icone (dossier icons/hobbie-icons)`,
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
    // prepare(selection) {
    //   const { subtitle } = selection
    //   return { ...selection, subtitle: author && `by ${author}` }
    // },
  },
})
