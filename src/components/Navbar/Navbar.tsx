import React, { FC, MouseEvent, useState } from 'react';
import { AppMenu } from './Menu/Menu';
import { FriendsBlock } from './Friends/FriendsBlock';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = styled.nav`
    max-width: 100%;
    background-color: var(--bg-navbar);  
    z-index: 1;

    @media(max-width: 599px) {
        position: absolute;
        top: 96px;
        left: -464px;
    }
`;

const Burger = styled.button`
    background-color: transparent;
    border-radius: 0.3em;
    border: none;
    display: none;

    @media(max-width: 599px) {
        display: block;
        position: absolute;
        top: -80px;
        left: 488px;
    }
`;

export const AppNavbar: FC = () => {
    const [opened, setOpened] = useState(false);
    const handleBurgerClick = (event: MouseEvent<HTMLButtonElement>) => {
        setOpened(prevOpened => !prevOpened)
        const navbar = event.currentTarget.parentElement;
        const burger = event.currentTarget;
        if (navbar) {
            if (opened === true) {
                navbar.style.left = '-464px';
                burger.style.left = '488px';
            } else {
                navbar.style.left = '24px';
                burger.style.left = '0px';
            }
        }
    }
    return (
        <Navbar>
            <Burger onClick={handleBurgerClick}>
                {opened 
                ? <MenuOpenIcon fontSize="large"/>
                : <MenuIcon fontSize="large"/>
                }
            </Burger>
            <AppMenu />
            <FriendsBlock />
        </Navbar>
    )
}
