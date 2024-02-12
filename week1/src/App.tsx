import './App.css';
import styled, {css} from 'styled-components';
import {myTheme} from "./components/Theme.styles";
import {GlobalStyles} from "./components/GlobalStyles";
import imgTest from '../src/images/Rectangle.png';


const BoxCard = styled.div`
    max-width: 300px;
    width: 100%;
    height: 100%;
    border: double black;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    

    button {
        cursor: pointer;
    }
`

type StyledBtnPropsType = {
    color?: string;
    background?: string;
    btnType?: "selected" | "notSelected";
}

const StyledBtn = styled.button<StyledBtnPropsType>`
    background-color: transparent;
    color: #4E71FE;
    border: 2px solid #4E71FE;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    margin: 10px;
    box-shadow: none;
    font-size: 12px; 
    
    &:hover {
        background-color: #4E71FE;
        color: #FFFFFF;
    }
`;

const Title = styled.h1`
    font-weight: bold;
    color: #000000;
`;

const SubTitle = styled.p`
    color: #ABB3BA;
`;

function App() {
    return (
        <div className="App">
            <BoxCard>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: "auto",
                    width: "280px",
                    margin: "0 5px"
                }}>
                    <img src={imgTest} alt="Main image"/>
                </div>
                <Title>Headline</Title>
                <SubTitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.</SubTitle>
                <StyledBtn btnType={"selected"}>See more</StyledBtn>
                <StyledBtn btnType={"notSelected"}>Save</StyledBtn>
            </BoxCard>
        </div>
    );
}

export default App;

