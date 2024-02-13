import './App.css';
import styled from 'styled-components';
import imgTest from '../src/images/Rectangle.png';
import React from "react";
import {Title} from "./components/Title";
import {SubTitle} from "./components/SubTitle";
import {StyledBtn} from "./components/StyledBtn";


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
function App() {
    return (
        <div className="App">
            <BoxCard>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    margin: "10px"
                }}>
                    <img src={imgTest} alt="Main image" style={{
                        margin: "0 5px",
                        height: "170px",
                        width: "280px",
                    }}/>
                </div>
                <Title>Headline</Title>
                <SubTitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.</SubTitle>
                <StyledBtn>See more</StyledBtn>
                <StyledBtn>Save</StyledBtn>
            </BoxCard>
        </div>
    );
}

export default App;

