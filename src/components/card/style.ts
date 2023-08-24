import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const CartItem = styled(Link)`
    max-width: 302px;
    text-decoration: none;
    display: inline-block;
`;

export const CartCustomImg = styled.img`
    width: 100%;
    border-radius: 7px;
`;
