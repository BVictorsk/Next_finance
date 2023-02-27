import { TbPlus } from 'react-icons/tb'
import React from 'react'
import styles from './noCard.module.scss';
import { toggleAddCategory } from 'src/store/ui-slice';
import { useDispatch } from 'react-redux';

const NoCard = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles['no-card']} onClick={() => dispatch(toggleAddCategory(null))}>
        <TbPlus className='icon' />
    </div>
  )
}

export default NoCard