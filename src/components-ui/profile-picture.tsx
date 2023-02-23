import Image from 'next/image'
import React from 'react'

export type ProfilePictureProps = {
  src: string
}

export const ProfilePicture = ({ src }: ProfilePictureProps) => {
  return <Image alt='Photo de profil de Bastien Pruvost' src={src} />
}
