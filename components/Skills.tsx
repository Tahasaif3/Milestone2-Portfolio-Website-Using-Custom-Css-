import styles from '../styles/Skills.module.css'

export default function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'UI/UX Design']

  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}