import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Modal/ModalItem';


const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0 ,0 ,0, 0.25);

`;
const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display: flex;
    margin: 0px 20px 30px 20px ;
    & span:first-child {
        flex-grow: 1;
    }
 
`;

const EmptyList = styled.p`
    text-align: center;
`;


export const Order = ({ orders }) => {

    const total = orders.reduce((result, order) =>
        totalPriceItems(order) + result, 0)

    return (
        <OrderStyled>
            <OrderTitle> Your Order</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map(order => <OrderListItem order={order} />)}
                    </OrderList> :
                    <EmptyList>List is Empty</EmptyList>}
            </OrderContent>
            <Total>
                <span>итого</span>
                <span>{total}</span>
            </Total>
            <ButtonCheckout>Plase an Order</ButtonCheckout>
        </OrderStyled>
    )
}