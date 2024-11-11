import styles from '../styles/Services.module.css';
import { Code, Palette, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: <Code size={48} />, title: 'Web Development', description: 'Custom websites tailored to your needs' },
    { icon: <Palette size={48} />, title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces' },
    { icon: <Globe size={48} />, title: 'SEO Optimization', description: 'Improve your online visibility and rankings' },
  ]

  return (
    <section className={styles.services}>
      <h2>My Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}