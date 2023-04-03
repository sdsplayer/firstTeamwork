import styled from "styled-components";

export const Wrapper = styled.div`
    color: black;
    display: grid;
    grid-template-rows:  repeat(3, 100px);
    grid-template-columns: repeat(3, 1fr);
`
export const Card = styled.div`
    color: black;
`
export const Text = styled.div`
    text-align: center;
    h4{
        margin-top: 10px;
        text-align: center;
        margin-right: 40px;
        color: #19191B;
        font-size: 20px;
    }
    p{
        color:#696871 ;
        margin-right: 20px;
        padding-top: 10px;
    }
`
export const Img = styled.div`
    color: black;
    text-align: center;
`