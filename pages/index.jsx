import { useDispatch } from "react-redux";
import AllCards from "src/components/CategoryCard/AllCards";
import Header from "src/components/Header/Header";
import useGetDocs from "src/hooks/useGetDocs";
import { setCategories } from "src/store/app-slice";
import styles from "styles/initial.module.scss"

export default function Home() {

  const dispatch = useDispatch();

  dispatch(setCategories(useGetDocs('categorias')));

  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
    </main>

  )
}
