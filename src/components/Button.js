import styled from "styled-components";
import { Button as ButtonAntd } from "antd";

const Button = styled("ButtonAntd")`
  background-color: ${(props) => (props.primary ? "green" : "red")};
  color: ${(props) =>
    props.primary ? "red" : "green"}; //! Ф-я називається "Інтерполяйія".
  &:hover {
    background-color: #ccc;
  }
  &:focus {
    background-color: aqua;
  }
`;

export default Button;
