import React from 'react'
import Modal from 'src/components/UI/Modal'
import styles from '../../../components/UI/Modal.module.scss'

const AddAmount = () => {
  return (
    <Modal isOpen={true}conClose={() => {}} title="Add Amount">
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