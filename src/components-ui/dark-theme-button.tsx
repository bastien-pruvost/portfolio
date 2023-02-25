'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils/classname'

export const DarkThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select
      className={cn(
        'absolute bottom-8 left-8 rounded-sm bg-grey-50 p-1 text-grey-800 dark:bg-grey-800 dark:text-grey-50',
      )}
      onChange={(e) => setTheme(e.target.value)}
      value={theme}
    >
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  )
}