import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background: grey;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    max-width: 1100px;
    padding: 0 50px;
    width: 100%;
    h1{
        color: #000;
        font-weight: 600;
    }
    img{
        cursor: pointer;
        width: 40px;
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