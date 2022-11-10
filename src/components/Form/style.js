import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-bottom: solid #000 1px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  max-width: 1100px;
  padding: 50px;
  width: 100%;
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
    min-height: 50vh;
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
  color: gray;
  height: 40px;
  margin-bottom: 25px;
`;

export const InputSelect = styled.select`
  background: #fff;
  border-radius: 5px;
  color: gray;
  height: 40px;
  margin-bottom: 25px;
  width: 100%;
`;

export const SubmitBtn = styled.input`
  background: #333333;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 40px;
  width: 100%;
`;
