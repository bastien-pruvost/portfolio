import type { FormEvent } from 'react'

export const adjustTextareaHeight = (event: FormEvent<HTMLTextAreaElement>) => {
  const textarea = event.target

  if (!(textarea instanceof HTMLTextAreaElement)) {
    return
  }

  textarea.style.height = '112px'
  textarea.style.height = textarea.scrollHeight + 'px'
}
