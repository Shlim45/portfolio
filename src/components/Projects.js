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
                </div>
            </Link>
            <Link href="https://ral-construction.com" rel="noopener noreferrer" target="_blank">
                <div className={styles.card}>
                    <header>
                        Business Website
                    </header>
                    <h3><span>RAL Construction</span></h3>
                    <p>A business portfolio website developed using React client-side and NextJS server-side.</p>
                </div>
            </Link>
            <Link href="https://olmran.net" rel="noopener noreferrer" target="_blank">
                <div className={styles.card}>
                    <header>
                        Multiplayer RPG Game
                    </header>
                    <h3><span>Olmran MUD</span></h3>
                    <p>An online multi-user dungeon game developed in Java with a MySQL database using the CoffeeMUD engine.</p>
                </div>
            </Link>
        </section>
    )
}

export default Projects;