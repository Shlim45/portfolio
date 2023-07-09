import styles from './page.module.css'
import GitHub from './components/GitHub'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.description}>
          <h1>Jonathan Hawranko</h1>
          <h2>Software/Web Developer</h2>
          <p>Occaecat ipsum exercitation veniam officia id ex aute in esse cupidatat sint non. Tempor non laborum minim magna ipsum enim nisi occaecat dolor. Dolore non ex et laborum ipsum consequat eiusmod pariatur. In cillum elit consequat nulla dolor laborum id et. Laboris sit incididunt adipisicing fugiat mollit fugiat pariatur magna elit minim aliqua ullamco exercitation Lorem. Commodo sint adipisicing qui proident labore ex duis deserunt culpa magna. Commodo anim irure nisi in voluptate.</p>
          <p>Fugiat fugiat aute nostrud elit elit ullamco do sunt nostrud laboris dolore est. Irure anim enim nisi esse ex aute ipsum duis officia do tempor eu irure. Amet consequat fugiat duis ad sint non enim adipisicing quis laborum mollit duis proident.</p>
          <Footer />
        </section>

        <GitHub />

      </main>

    </>
  )
}
