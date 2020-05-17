
import React from 'react'
import styled from 'styled-components';

const Button = ({ price }) => {

    return (
        <ButtonBuyNow>
            ${price} - Buy now
        </ButtonBuyNow>
    );
}



const ButtonBuyNow = styled.button`
    background-color: #5D1BFF;
    border-radius: 10px;
    padding: 15px 40px;
    color: white;
    font-size: 1.5em;
    outline: none;
    transition: all .5s;
    cursor: pointer;

    &:hover{
        background-color: var(--PrimaryColor);
    }

`

export default Button