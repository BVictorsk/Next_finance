import React from 'react'
import useCloseMenu from 'src/hooks/useCloseMenu';
import CardMenu from '../UI/CardMenu'

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