import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps>  = ({ title, onClick, disable}) => {
  return <ButtonContainer onClick={onClick} disabled={disable}>{title}</ButtonContainer>;
};

export default Button;
