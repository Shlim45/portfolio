import Link from 'next/link';
import styles from '@/styles/GitHub.module.css'

const GitHub = ({ repos }) => {
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            {repos?.map((project, index) => (
                <Link href={`${project.html_url}`} rel="noopener noreferrer" target="_blank" key={index}>
                    <div className={styles.card}>
                        <header>
                            {project.language}
                        </header>
                        <h3><span>{project.full_name}</span></h3>
                        <p>{project.description}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default GitHub;