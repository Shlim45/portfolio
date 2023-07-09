'use client'

import Link from 'next/link';
import styles from '@/app/styles/GitHub.module.css'
import { useState, useEffect } from 'react';

const GitHub = () => {
    const [projects, setProjects] = useState(null);

    const dummyProjects = [
        {
            languages: ['C++'],
            title: 'Olmran MUD Client',
            description: 'A Custom MUD Client for Olmran, written in C/C++ for Windows.',
            url: 'Olmran_Client'
        },
        {
            languages: ['JavaScript'],
            title: 'NHL Stats App',
            description: 'A web application for viewing NHL statistics. Uses next.js for rendering react components from the server.',
            url: 'nhl-stats-app'

        },
        {
            languages: ['Go'],
            title: 'goMud',
            description: 'MUD engine written in goLang.',
            url: 'goMud'

        },
        {
            languages: ['Java'],
            title: 'Appointment Scheduler',
            description: 'A GUI-based scheduling desktop application.',
            url: 'scheduler'
        }
    ];

    useEffect(() => {
        setProjects(dummyProjects);
    }, [dummyProjects])

    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            {projects?.map(project => (
                <Link href={`https://github.com/shlim45/${project.url}`} rel="noopener noreferrer" target="_blank">
                    <div className={styles.card}>
                        <header>{project.languages?.map(lang => `${lang} `)}</header>
                        <h3><span>{project.title}</span></h3>
                        <p>{project.description}</p>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default GitHub;