import {Title} from "./Title";
import {SubTitle} from "./SubTitle";
import {StyledBtn} from "./StyledBtn";
import React from "react";
import {BoxCard} from "../App";
import {MyImage} from "./Image";

type CardProps = {
    myImage : string
    titleText: string
    subtitleText:  string
}

export function Card(props: CardProps) {
    return (
        <BoxCard>
            <MyImage src={props.myImage} alt="Main image"  />
            <Title titleType={"bold"}>{props.titleText}</Title>
            <SubTitle subtitleType={"solid"}>{props.subtitleText}</SubTitle>
            <div>
                {/*<StyledBtn btnType={"primary"}>{props.buttonText}</StyledBtn>*/}
                <StyledBtn btnType={"primary"}>See more</StyledBtn>
                <StyledBtn btnType={"outlined"}>Save</StyledBtn>
            </div>
        </BoxCard>
    )
}


