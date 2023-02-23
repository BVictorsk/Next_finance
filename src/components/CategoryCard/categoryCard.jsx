import { TbPencil } from 'react-icons/tb'
import useGetCurrency from 'src/hooks/useGetCurrency';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import useMenu from 'src/hooks/useMenu';
import styles from'./categoryCard.module.scss'

const CategoryCard = ({ data }) => {

  const { title, amount, percentage } = data;
  const [isVisible, toggleMenuHandler] = useMenu()

  const formatedAmount = useGetCurrency(amount);

  return (
    <div className={styles.card}>
        <div className={styles.edit}>
            <TbPencil className='icon hover' onClick={toggleMenuHandler}/>
            {isVisible && <CategoryMenu toggleMenuHandler={toggleMenuHandler} />}
        </div>
        <h2>{title}</h2>
        <h3>{formatedAmount}</h3>
        <h4>Alocado: {percentage}%</h4>
    </div>
  )
}

export default CategoryCard