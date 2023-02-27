import React from 'react'
import { useDispatch } from 'react-redux';
import useCloseMenu from 'src/hooks/useCloseMenu'
import { toggleAddSalary } from 'src/store/ui-slice';
import CardMenu from '../UI/CardMenu'

const HeaderMenu = ({ toggleMenuHandler }) => {

    const cardRef = useCloseMenu(toggleMenuHandler);
    const dispatch = useDispatch();

    return (
    <CardMenu ref={cardRef}>
        <li onClick={() => dispatch(toggleAddSalary(null))}>Adicionar Salário</li>
    </CardMenu>
  )
}

export default HeaderMenu