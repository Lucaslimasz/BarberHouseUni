import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    position: absolute;
    z-index: -10;
    background: #fff;
`;

export const Items = styled.div`
    margin: 80px auto 0;
    width: 100%;
    padding: 40px;

    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Item = styled.div`
    width: 600px;
    padding: 10px;
    min-height: 200px;
    background: #cdcdcd;

    margin: 20px;

    display: flex;
    >img{
        width: 200px;
        height: 200px;
        margin-right: 20px;
    }
`;

export const Information = styled.div`
    font-size: 18px;
    >p:first-child{
        margin-top: 10px;
    }
    >p+p{
        margin: 10px 0;
    }
`;

export const Buttons = styled.div`
    margin-top: 20px;
`;

export const Accept = styled.button`
    background: green;
    color: #fff;
    padding: 10px 20px;
    font-size: 19px;

    position: relative;

    &:active{
        top: 2px;
        left: 2px;
    }
`;
export const Refuse = styled.button`
    background: red;
    color: #fff;
    padding: 10px 20px;
    margin-left: 15px;
    font-size: 19px;

    position: relative;

    &:active{
        top: 2px;
        left: 2px;
    }
`;
