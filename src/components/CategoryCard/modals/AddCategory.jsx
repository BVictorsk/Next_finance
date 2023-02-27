import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'src/components/UI/Modal'
import { toggleAddCategory } from 'src/store/ui-slice'
import styles from '../../../components/UI/Modal.module.scss'

const AddCategory = () => {

    const { isVisible, category } = useSelector((state) => state.ui.addCategory);
    const dispatch = useDispatch();

  return (
    <Modal isOpen={isVisible} onClose={() => dispatch(toggleAddCategory(null))} title="Nova Categoria">
        <div>
            <form className='.form'>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='title' name='title' />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="percentage" className='p'>Porcentagem Alocada</label>
                    <input type="percentage" id='percentage' name='amount' placeholder='Essencial' className='max-width' />
                </div>
                <div className={styles.buttons}>
                    <button type='submit' className='btn btn-primary' >
                        Editar
                    </button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export default AddCategory;