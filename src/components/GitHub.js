import Link from 'next/link';
import styles from '@/styles/GitHub.module.css'

const GitHub = ({ repos }) => {
    return (
        <section className={styles.projects}>
            <h2>
                <Link href="https://www.github.com/shlim45" rel="noopener noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="32px" style={{ marginRight: '1rem' }}>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                    GitHub Repositories
                </Link>
            </h2>
            {repos?.map((project, index) => (
                <Link href={`${project.html_url}`} rel="noopener noreferrer" target="_blank" key={index}>
                    <div className={styles.card}>
                        <header>
                            {project.language}
                        </header>
                        <h3><span>{project.full_name}</span></h3>
                        <p>{project.description}</p>
                        <svg className={styles.link_icon} fill="none" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" width="12px" style={{ marginLeft: '.5rem' }}>
                            <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                            <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                        </svg>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default GitHub;