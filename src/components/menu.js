import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './list-item';


const MenuStyled = styled.main`
    background-color: #ccc;
    height:300px;
    margin-top: 85px;
`;


export const Menu = () => (
    <MenuStyled>
        <section>
            <h2> Burgers</h2>
            <ListItem />
        </section>
    </MenuStyled>
);