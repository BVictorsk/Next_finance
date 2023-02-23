import useCloseMenu from 'src/hooks/useCloseMenu';
import React from 'react'
import CardMenu from '../UI/cardMenu'

const CategoryMenu = ({ toggleMenuHandler }) => {

  const menuRef = useCloseMenu(toggleMenuHandler);

  return (
    <CardMenu ref={menuRef}>
        <li>Editar</li>
        <li>Adicionar</li>
        <li>Descontar</li>
        <li>Excluir</li>
    </CardMenu>
  )
}

export default CategoryMenu