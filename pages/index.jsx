import AllCards from "src/components/CategoryCard/allCards";
import Header from "src/components/Header/Header";
import styles from "styles/initial.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>

  )
}
