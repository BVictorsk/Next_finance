import AllCards from "src/components/CategoryCard/AllCards";
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
