import React from 'react'
import { useDispatch } from 'react-redux';
import useCloseMenu from 'src/hooks/useCloseMenu';
import { toggleAddAmount } from 'src/store/ui-slice';
import CardMenu from '../UI/CardMenu'

const CategoryMenu = ({ toggleMenuHandler, data }) => {

  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
        <li>Editar</li>
        <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
        <li>Descontar</li>
        <li>Excluir</li>
    </CardMenu>
  )
}

export default CategoryMenu