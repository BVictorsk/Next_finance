import { toggleAddAmount, toggleEditCategory, toggleSubtractAmount, toggleTransferAmount } from 'src/store/ui-slice';
import { useDispatch } from 'react-redux';
import React from 'react'
import useCloseMenu from 'src/hooks/useCloseMenu';
import CardMenu from '../UI/CardMenu'

const CategoryMenu = ({ toggleMenuHandler, data }) => {

  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
        <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
        <li onClick={() => dispatch(toggleSubtractAmount(data))}>Descontar</li>
        <li onClick={() => dispatch(toggleEditCategory(data))}>Editar</li>
        <li onClick={() => dispatch(toggleTransferAmount(data))}>Transferir</li>
        <li>Excluir</li>
    </CardMenu>
  )
}

export default CategoryMenu