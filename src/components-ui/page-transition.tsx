'use client'
import { cn } from '@/lib/utils/classname'
import { AnimatePresence, motion } from 'framer-motion'

import type { PropsWithChildren } from 'react'

export type PageTransitionProps = PropsWithChildren<{
  className?: string
}>

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <AnimatePresence presenceAffectsLayout mode='wait'>
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
