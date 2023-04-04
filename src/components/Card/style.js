import styled from "styled-components";

export const Wrapper = styled.div`
    color: black;
    margin-top: 40px;
    /* display: flex;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: auto auto ;
`
export const Index = styled.div`
    color: black;
`
export const Text = styled.div`
    color: black;
    margin-top: 180px;
    padding-left: 140px;
    h1{
        color: #19191B;
        font-size: 40px;
        margin-left: 40px;
        font-size: 50px;
        line-height: 57px;

        letter-spacing: -1.56316px;

        color: #19191B;
    }
    p{
        margin-left: 40px;
    }
    .vertical{
        margin-top: 20px;
        color: #696871;
    }
    .more{
        padding-top: 20px;
        color: #5454D4;
        font-weight: 600;
    }
`