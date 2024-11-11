import styles from '../styles/About.module.css'
import Image from 'next/image'
import { div } from 'framer-motion/client'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <Image src="/profile.png" alt="Taha Saif" width={300} height={300} className={styles.image} />
        <div className={styles.text}>
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer and designer with over 1 years of experience creating beautiful and functional websites. My goal is to bring your vision to life and help your business succeed online.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  )
}