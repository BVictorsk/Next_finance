import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'src/components/UI/Modal'
import { toggleAddAmount } from 'src/store/ui-slice'
import styles from '../../../components/UI/Modal.module.scss'

const AddAmount = () => {

    const { isVisible, category } = useSelector((state) => state.ui.addAmount);
    const dispatch = useDispatch();

  return (
    <Modal isOpen={isVisible} onClose={() => dispatch(toggleAddAmount(null))} title="Add Amount">
        <div>
            <form className='.form'>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='title' name='title' placeholder='ex: venda' />
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' className='max-width' />
                </div>
                <div className={styles.buttons}>
                    <button type='submit' className='btn btn-primary' >
                        Add
                    </button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export default AddAmount