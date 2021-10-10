import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './list-item';
import bannerMenu from '../image/banner.png';




const MenuStyled = styled.main`  
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const BannerInMenu = styled.div`
    position: relative;
    width: 100%;
    height: 210px;
    background-image: url('${bannerMenu}');
    background-size: cover;    
    background-color: red;
    
`

export const Menu = () => (
    <MenuStyled>
        <BannerInMenu></BannerInMenu>
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