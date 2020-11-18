import styled from "styled-components";

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  background: #fff;
  height: 100%;
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-out;
    transform: translateY(-5px);

    h2 {
      color: #9e1c1c;
    }
  }
`;
