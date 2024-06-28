import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0);
  max-width: 500px;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 1.5rem;
      font-weight: bold;
      select {
        display: block;
        margin: 10px auto 0 auto;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      a {
        display: flex;
        align-items: center;
        border: 1px solid red;
        border-radius: 0.25rem;
        padding: 0 10px;
        height: 2rem;
        text-decoration: none;
        text-align: end;
      }
    }

  }
`;