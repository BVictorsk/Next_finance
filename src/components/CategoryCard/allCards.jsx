import React from 'react'
import CategoryCard from './CategoryCard'
import NoCard from './NoCard'
import Modal from '../UI/Modal'
import styles from'./allCards.module.scss'

const DUMMY_DATA = [
    { id: 1, title: 'essencials', amount: 440, percentage: 10 },
    { id: 2, title: 'Investimentos', amount: 840, percentage: 30 },
    { id: 3, title: 'pessoal', amount: 140, percentage: 50 },
];

const AllCards = () => {

  const cards = DUMMY_DATA.map(category => <CategoryCard key={category.id} data={category} />)

  return (
    <>
    <Modal />
    <section className={styles.section}>
      {cards}
      <NoCard />
    </section>
    </>
  )
}

export default AllCards