import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10vh;
    max-width: 1100px;
    background: grey;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    h1{
        color: #000;
        font-weight: 600;
    }
    img{
        width: 40px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        padding: 0 25px;
        h1{
            font-size: 20px;
        }
        img{
            width: 25px;
        }
    }

`;