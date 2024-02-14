import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string;
    btnType: "primary" | "outlined";
    active?: boolean;
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: 2px solid #4E71FE;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    margin: 10px;
    box-shadow: none;
    font-size: 12px;
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
   `}
    color: ${props => props.color || "#4E71FE"};
    background-color: ${props => props.color}"transparent";
    
    &:hover {
        background-color: #4E71FE;
        color: #FFFFFF;
    }

    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
   `}
    color: ${props => props.color || "#4E71FE"};
    background-color: ${props => props.color}"transparent";

    &:hover {
        background-color: #4E71FE;
        color: #FFFFFF;
    }
`;