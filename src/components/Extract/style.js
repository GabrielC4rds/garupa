import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: solid #000 1px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  max-width: 1100px;
  padding: 50px;
  width: 100%;
  h1 {
    color: #000;
  }
  label {
    color: #000;
    font-size: 15px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 50px 20px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const TitleDiv = styled.div`
  border-bottom: 1px solid #000;
  color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 0 25px;
    h2{
      font-size: 15px;
    }
  }
`;

export const DataDiv = styled.div`
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  width: 100%;
  div{
    display: flex;
    justify-content: space-between;
    max-width: 200px;
  }
  label{
    margin: 0 5px;
  }
`;

export const ResultDiv = styled.div`
  border-top: 1px solid #000;
  color: #000;
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  padding: 20px 10px;
  width: 100%;
  h2{
    margin: 0;
  }
  div{
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }
  label{
    margin: 0 5px;
  }
  @media only screen and (max-width: 600px) {
    h2{
      font-size: 15px;
    }
  }
`;


