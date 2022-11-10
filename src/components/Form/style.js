import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #fff;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  padding: 50px;
  width: 100%;
  border-bottom: solid #000 1px;
  form {
    display: flex;
    flex-direction: column;
   
  }
  label {
    color: #000;
    font-size: 15px;
    margin-bottom: 10px;
  }
  img {
    cursor: pointer;
    width: 40px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 25px;
    h1 {
      font-size: 20px;
    }
    img {
      width: 25px;
    }
  }
`;

export const InputText = styled.input`
  background: #fff;
  border-radius: 5px;
  border: 1px solid grey;
  height: 40px;
  color: gray;
  margin-bottom: 25px;
`;

export const InputSelect = styled.select`
  background: #fff;
  color: gray;
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  border-radius: 5px;
`;

export const SubmitBtn = styled.input`
  width: 100%;
  height: 40px;
  background: #333333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
