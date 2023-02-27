import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'src/components/UI/Modal'
import { toggleTransferAmount } from 'src/store/ui-slice'
import styles from '../../../components/UI/Modal.module.scss'

const TransferAmount = () => {

    const { isVisible, category } = useSelector((state) => state.ui.transferAmount);
    const dispatch = useDispatch();

  return (
    <Modal isOpen={isVisible} onClose={() => dispatch(toggleTransferAmount(null))} title="Transfer amount">
        <div>
            <form className='.form'>
                <div className={styles['label-input']}>
                    <p>De: </p>
                    <p className='caption'>Pessoal</p>
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="destination">Para:</label>
                    <select name="destination" id="destination" className='max-width'>
                        <option value="essencial">Essencial</option>
                        <option value="pessoal">Viagens</option>
                        <option value="investimentos">Investimentos</option>
                    </select>
                </div>
                <div className={styles['label-input']}>
                    <label htmlFor="title" className='p'>Titulo</label>
                    <input type="text" id='amount' name='amount' placeholder='R$' className='max-width' />
                </div>
                <div className={styles.buttons}>
                    <button type='submit' className='btn btn-primary' >
                        Transferir
                    </button>
                </div>
            </form>
        </div>
    </Modal>
  )
}

export default TransferAmount;