'use client'

import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Taha Saif
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Web Developer & Web Designer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Creating stunning websites that leave a lasting impression.
        </motion.p>
        <motion.a
          href="#contact"
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch <ArrowRight className={styles.icon} />
        </motion.a>
      </div>
    </section>
  )
}