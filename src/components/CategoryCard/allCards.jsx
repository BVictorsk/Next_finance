import React from 'react'
import CategoryCard from './CategoryCard'
import NoCard from './NoCard'
import AddAmount from './modals/AddAmount'
import styles from'./allCards.module.scss'
import TransferAmount from './modals/TransferAmount'
import EditCategory from './modals/EditCategory'
import SubtractAmount from './modals/SubtractAmount'
import AddCategory from './modals/AddCategory'
import { useSelector } from 'react-redux'

const AllCards = () => {

  const categories = useSelector(state => state.app.categories)

  const cards = categories.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ));

  return (
    <>
    <AddAmount />
    <SubtractAmount />
    <TransferAmount />
    <EditCategory />
    <AddCategory />

    <section className={styles.section}>
      {cards}
      <NoCard />
    </section>
    </>
  )
}

export default AllCards