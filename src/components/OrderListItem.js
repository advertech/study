import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trashbin.svg'

const OrderItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 0px 20px 0px 20px ;
`;
const ItemName = styled.span` 
margin-bottom: 30px;
    
`;

const ItemQty = styled.span` 

`;

const ItemPrice = styled.span` 
   
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

`;

export const OrderListItem = ({ ...order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <ItemQty>1 </ItemQty>
        <ItemPrice>{order.price}</ItemPrice>
        <TrashButton />
    </OrderItemStyled>



);