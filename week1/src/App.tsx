import './App.css';
import styled from 'styled-components';
import imgRectangle from '../src/images/Rectangle.png';
import imgWilliam from '../src/images/Shakespeare.png'
import imgNature from '../src/images/Nature.jpg'
import React from "react";
import {Card} from "./components/Card";


export const BoxCard = styled.div`
    max-width: 300px;
    height: 100%;
    border: double black;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    
    button {
        cursor: pointer;
    }
`
const cardData = {
    myImage : imgRectangle,
    titleText : 'Headline' ,
    subtitleText : 'Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'
}
const cardsData = [
    {
        myImage : imgWilliam,
        titleText : 'Title' ,
        subtitleText : 'Some description'
    },{
        myImage : imgRectangle,
        titleText : 'Title' ,
        subtitleText : 'Some description'
    },{
        myImage : imgNature,
        titleText : 'Title' ,
        subtitleText : 'Some description'
    },
]
function App() {
    return (
        <>
            <Card {...cardData} />
            <Card myImage={imgRectangle} titleText={'Headliner'} subtitleText={'Something more to read Something more to read'} />
            <Card myImage={imgNature} titleText={'A walk in nature walks the soul back home'} subtitleText={'Something more to read Something more to read Something more to readSomething more to read Something more to readSomething more to read Something more to readSomething more to read Something more to readSomething more to read Something more to readSomething more to read Something more to read Something more to read'} />
            <Card myImage={imgWilliam} titleText={'To be or not to be'} subtitleText={'That is a question'} />{/*buttonText='Button TExt'*/}
        </>
            );
}

export default App;

