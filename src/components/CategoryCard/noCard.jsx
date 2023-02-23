import { TbPlus } from 'react-icons/tb'
import React from 'react'
import styles from './noCard.module.scss';

const NoCard = () => {
  return (
    <div className={styles['no-card']}>
        <TbPlus className='icon' />
    </div>
  )
}

export default NoCard