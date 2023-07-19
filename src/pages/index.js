import Image from 'next/image'
import self from '@/../public/self.jpg'
import styles from '@/styles/page.module.css'
import GitHub from '@/components/GitHub'
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
          <h2>Software/Web Developer</h2>
          <p>Occaecat ipsum exercitation veniam officia id ex aute in esse cupidatat sint non. Tempor non laborum minim magna ipsum enim nisi occaecat dolor. Dolore non ex et laborum ipsum consequat eiusmod pariatur. In cillum elit consequat nulla dolor laborum id et. Laboris sit incididunt adipisicing fugiat mollit fugiat pariatur magna elit minim aliqua ullamco exercitation Lorem. Commodo sint adipisicing qui proident labore ex duis deserunt culpa magna. Commodo anim irure nisi in voluptate.</p>
          <p>Fugiat fugiat aute nostrud elit elit ullamco do sunt nostrud laboris dolore est. Irure anim enim nisi esse ex aute ipsum duis officia do tempor eu irure. Amet consequat fugiat duis ad sint non enim adipisicing quis laborum mollit duis proident.</p>
          <Footer />
        </section>

        <GitHub repos={repos} />

      </main>

    </>
  )
}
