import styled from "styled-components";

export const SubTitle = styled.p<{subtitleType: string}>`
    font-weight: ${props=>props.subtitleType || 'solid'};
    color: #ABB3BA;
`;