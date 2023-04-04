import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding-inline: 180px;
    margin-bottom: 100px;
    .navList{
        display: flex;
        gap:49px;
        align-items: center;
        li{
            list-style: none;
            font-size: 15px;
            color: #696871;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover{
                color: #19191B;
                border-bottom: 2px solid #5454D4;
            }
            &:first-child{
                color: #19191B;
                border-bottom: 2px solid #5454D4;
            }
        }
    }
`