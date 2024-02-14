import styled from "styled-components";

export const Title= styled.h1<{titleType:string}>`
    font-weight: ${props=>props.titleType || 'bold'};
    color: #000000;
`;

