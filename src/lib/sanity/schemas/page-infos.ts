import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'pageInfos',
  title: 'Informations de la page',
  type: 'document',
  fields: [
    defineField({
      name: 'profilePic',
      title: 'Photo de profil',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'fullName',
      title: 'Nom complet (Prénom / Nom)',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'job',
      title: 'Métier',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'city',
      title: 'Ville',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'birthDate',
      title: 'Date de naissance',
      type: 'date',
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'email',
      title: 'Email de contact',
      type: 'string',
      validation: (rule) =>
        rule.required().email().error('Doit être au format email exemple@email.fr'),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'socials',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'social' } })],
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'profileTitle',
      title: 'Titre de la partie "Profil"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'profileSubTitle',
      title: 'Sous Titre de la partie "Profil"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'projectsTitle',
      title: 'Titre de la partie "Projets"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'projectsSubTitle',
      title: 'Sous Titre de la partie "Projets"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'skillsTitle',
      title: 'Titre de la partie "Compétences"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'skillsSubTitle',
      title: 'Sous Titre de la partie "Compétences"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    // defineField({
    //   name: 'journeyTitle',
    //   title: 'Titre de la partie "Parcours"',
    //   type: 'string',
    //   validation: (rule) =>
    //     rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    // }),
    // defineField({
    //   name: 'journeySubTitle',
    //   title: 'Sous Titre de la partie "Parcours"',
    //   type: 'string',
    //   validation: (rule) =>
    //     rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    // }),
    defineField({
      name: 'contactTitle',
      title: 'Titre de la partie "Contact"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'contactSubTitle',
      title: 'Sous Titre de la partie "Contact"',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'job',
      media: 'profilePic',
    },
  },
})
