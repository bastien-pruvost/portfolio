import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'techno',
  title: 'Technologies utilisées',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label à afficher',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    // defineField({
    //   name: 'name',
    //   title: 'Nom DB',
    //   type: 'string',
    //   validation: (rule) =>
    //     rule.required().min(1).max(60).error('Min 1 charactères, Max 60 charactères'),
    // }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'priority',
      title: `Priorité d'affichage`,
      type: 'number',
      validation: (rule) => rule.required().min(1).error('Doit être suppérieur à 1'),
    }),
  ],
})
