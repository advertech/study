import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './list-item';
import { Banner } from './banner';




const MenuStyled = styled.main`  
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;



export const Menu = () => (
    <MenuStyled>
        <Banner />
        <SectionMenu>
            <h2> Burgers</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>
        <SectionMenu>
            <h2> Закуски и напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
);