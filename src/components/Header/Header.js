import styled from "styled-components";
import config from '../../../config.json';

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .social span{
        position: initial;
        float: right;
    }

    .social span a{
        margin: 5px;
        font-size: 30px;
        cursor: pointer;
        text-decoration: none;
        color: ${({ theme }) => theme.textColorBase};
    }
`;

export const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;