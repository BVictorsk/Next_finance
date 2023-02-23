import React from 'react'
import styles from'./categoryCard.module.scss'
import { TbPencil } from 'react-icons/tb'
import useGetCurrency from '@/src/hooks/useGetCurrency';
import CategoryMenu from '../CategoryMenu/categoryMenu';

const CategoryCard = ({ data }) => {

  const { title, amount, percentage } = data;

  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
        <div className={styles.edit}>
            <TbPencil className='icon hover' />
            <CategoryMenu />
        </div>
        <h2>{title}</h2>
        <h3>{formatedAmount}</h3>
        <h4>Alocado: {percentage}%</h4>
    </div>
  )
}

export default CategoryCard