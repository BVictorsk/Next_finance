import React from 'react'
import useCloseMenu from 'src/hooks/useCloseMenu'
import CardMenu from '../UI/cardMenu'

const HeaderMenu = ({ toggleMenuHandler }) => {
    const cardRef = useCloseMenu(toggleMenuHandler);

    return (
    <CardMenu ref={cardRef}>
        <li>Adicionar Salário</li>
    </CardMenu>
  )
}

export default HeaderMenu