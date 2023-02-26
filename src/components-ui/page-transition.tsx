'use client'
import { AnimatePresence, motion } from 'framer-motion'

import type { PropsWithChildren } from 'react'

export const PageTransition = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence presenceAffectsLayout mode='wait'>
      <motion.div
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
