import Head from 'next/head'
import Image from 'next/image'
import self from '@/../public/self.jpg'
import styles from '@/styles/page.module.css'
import GitHub from '@/components/GitHub'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import { Octokit } from "octokit";

export const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const res = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  // TODO(jon): Error checking
  if (res.status !== 200) {
    return { props: { repos: undefined } }
  }

  const repos = res.data
    .filter(repo => {
      const date = new Date(repo.updated_at);
      return date.getFullYear() >= 2022 && repo.private == false;
    })
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

  return {
    props: {
      repos,
    },
    revalidate: 60,
  }
}

export default function Home({ repos }) {
  return (
    <>
      <Head>
        <title>Jonathan Hawranko</title>
        <meta name="keywords" content="jonathan jon hawranko software web developer pittsburgh" />
        <meta name="description" content="Full-stack web and software developer from Pittsburgh, PA." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <main className={styles.main}>
        <section className={styles.description}>
          <div className={styles.photo}>
            <Image
              src={self}
              alt='Photograph of Jonathan Hawranko'
              fill
              sizes="(max-width: 700px) 125px, (max-width: 1120px) 150px, 175px"
              quality={100}
              priority={true}
            />
          </div>
          <h1>Jonathan Hawranko</h1>
          <h2>Software Developer</h2>
          <p>Full-stack web and software developer from Pittsburgh, PA.  I have recently earned a Bachelor of Science, majoring in Computer Science at Western Governors University.  My passion is learning new technologies and turning ideas into experiences.</p>
          <Footer />
        </section>

        <Projects />
        <GitHub repos={repos} />

      </main>

    </>
  )
}
