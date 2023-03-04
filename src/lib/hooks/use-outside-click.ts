import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => unknown) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (!(event.target instanceof HTMLElement)) {
        return
      }
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    document.addEventListener('resize', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
      document.addEventListener('resize', handleClick)
    }
  }, [callback])

  return ref
}
