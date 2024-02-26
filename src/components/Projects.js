import Link from 'next/link';
import styles from '@/styles/GitHub.module.css'

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h2>
                Freelance Projects
            </h2>
            <Link href="https://rccustommillworks.com" rel="noopener noreferrer" target="_blank">
                <div className={styles.card}>
                    <header>
                        Business Website
                    </header>
                    <h3><span>RC Custom Millworks</span></h3>
                    <p>A business portfolio website developed using React client-side and NextJS with SupaBase for database interactions, Cloudinary for image storage and manipulation, and SendGrid for email server-side.</p>
                    <svg className={styles.link_icon} fill="none" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" width="12px" style={{ marginLeft: '.5rem' }}>
                        <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                        <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                </div>
            </Link>
            <Link href="https://ral-construction.com" rel="noopener noreferrer" target="_blank">
                <div className={styles.card}>
                    <header>
                        Business Website
                    </header>
                    <h3><span>RAL Construction</span></h3>
                    <p>A business portfolio website developed using React client-side and NextJS server-side.</p>
                    <svg className={styles.link_icon} fill="none" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" width="12px" style={{ marginLeft: '.5rem' }}>
                        <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                        <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                </div>
            </Link>
            <Link href="https://olmran.net" rel="noopener noreferrer" target="_blank">
                <div className={styles.card}>
                    <header>
                        Multiplayer RPG Game
                    </header>
                    <h3><span>Olmran MUD</span></h3>
                    <p>An online multi-user dungeon game developed in Java with a MySQL database using the CoffeeMUD engine.</p>
                    <svg className={styles.link_icon} fill="none" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" width="12px" style={{ marginLeft: '.5rem' }}>
                        <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                        <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
                    </svg>
                </div>
            </Link>
        </section>
    )
}

export default Projects;