import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'src/components/UI/Modal'
import { toggleAddSalary } from 'src/store/ui-slice'
import styles from '../../../components/UI/Modal.module.scss'

const AddSalary = () => {

    const { isVisible, category } = useSelector((state) => state.ui.addSalary);
    const dispatch = useDispatch();

  return (
    <Modal isOpen={isVisible} onClose={() => dispatch(toggleAddSalary(null))} title="Adicionar salario">
        <div>
            <form className='.form'>
            <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Valor</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' className='max-width' />
                </div>
                <div className={styles.buttons}>
                    <button type='submit' className='btn btn-primary' >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export default AddSalary;