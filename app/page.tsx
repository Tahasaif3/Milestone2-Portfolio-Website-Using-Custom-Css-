'use client'

import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Contact from '../components/Contact'
import styles from '../styles/page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
      </motion.div>
    </main>
  )
}