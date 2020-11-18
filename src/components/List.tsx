import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 25px;
  list-style: none;
`;
