import React from 'react'
import CategoryCard from './CategoryCard'
import NoCard from './NoCard'
import AddAmount from './modals/AddAmount'
import styles from'./allCards.module.scss'
import TransferAmount from './modals/TransferAmount'
import EditCategory from './modals/EditCategory'
import SubtractAmount from './modals/SubtractAmount'
import AddCategory from './modals/AddCategory'

const DUMMY_DATA = [
    { id: 1, title: 'essencials', amount: 440, percentage: 10 },
    { id: 2, title: 'Investimentos', amount: 840, percentage: 30 },
    { id: 3, title: 'pessoal', amount: 140, percentage: 50 },
];

const AllCards = () => {

  const cards = DUMMY_DATA.map(category => <CategoryCard key={category.id} data={category} />)

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