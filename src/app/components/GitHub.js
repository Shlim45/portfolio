'use client'

import Link from 'next/link';
import styles from '@/app/styles/GitHub.module.css'
import { useState, useEffect } from 'react';

const GitHub = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const dummyProjects = [
            {
                languages: ['Java', 'MySQL'],
                title: 'Olmran MUD',
                description: "A Custom MUD Engine for Olmran, written in Java.  Heavily inspired by Darkness Falls: The Crusade, a MUD from the 1990's.",
                url: 'https://www.olmran.net'
            },
            {
                languages: ['JavaScript', 'React', 'Next.js', 'Supabase', 'Cloudinary'],
                title: 'RC Custom Millworks Website',
                description: "A server-side rendered business website created for a cabinet shop.  Includes custom CMS for updating content.",
                url: 'https://www.rccustommillworks.com'
            },
            {
                languages: ['C/C++'],
                title: 'Olmran MUD Client',
                description: 'A Custom MUD Client for Olmran, written in C/C++ for Windows.',
                url: 'https://github.com/shlim45/Olmran_Client'
            },
            {
                languages: ['JavaScript', 'React', 'Next.js', 'API'],
                title: 'NHL Stats App',
                description: 'A web application for viewing NHL statistics. Uses Next.js for rendering React components from the server.',
                url: 'https://github.com/shlim45/nhl-stats-app'

            },
            {
                languages: ['Go', 'MySQL'],
                title: 'goMud',
                description: 'MUD engine written in goLang.',
                url: 'https://github.com/shlim45/goMud'

            },
            {
                languages: ['Java', 'MySQL'],
                title: 'Appointment Scheduler',
                description: 'A GUI-based scheduling desktop application.',
                url: 'https://github.com/shlim45/scheduler'
            }
        ];

        setProjects(dummyProjects);
    }, [])

    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            {projects?.map((project, index) => (
                <Link href={`${project.url}`} rel="noopener noreferrer" target="_blank" key={index}>
                    <div className={styles.card}>
                        <header>
                            {project.languages?.join(', ')}
                        </header>
                        <h3><span>{project.title}</span></h3>
                        <p>{project.description}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default GitHub;