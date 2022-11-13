import styled from "styled-components";

export const StyledFavorito = styled.div`

    h2 {
        margin-left: 16px;
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        margin: auto;
    }

    span {
        font-weight: bold;
        display: flex;
        font-size: 14px;
        width: 100%;
        justify-content: center;
        margin-top: 0.5em;
    }

    a {
        display: inline-block;
        margin-left: 10px;
        width: 150px;
        height: 100%;
        gap: 8px;
        color: #FFF;
    }

    section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

`;