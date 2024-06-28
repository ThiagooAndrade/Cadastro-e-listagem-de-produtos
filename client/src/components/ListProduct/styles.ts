import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    thead {
      tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
        th {
          text-align: start;
          padding: 12px 15px;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #dddddd;
      }
      tr:nth-of-type(even) {
        background-color: #f3f3f3;
      }
      tr:last-of-type {
        border-bottom: 2px solid #009879;
      }
    }
  }

  div {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
    a {
      display: flex;
      justify-content: center;
      background-color: #009879;
      align-items: center;
      font-weight: bold;
      text-decoration: none;
      color: black;
      border: 1px solid red;
      border-radius: 0.25rem;
      padding: 0 10px;
      height: 2rem;
    }
  }
`;