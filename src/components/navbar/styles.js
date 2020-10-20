import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;

    background: #F09034;
    position: fixed;
`;

export const Limit = styled.div`
    max-width: 1260px;
    margin: auto;
    height: 100%;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    >ul{
        display: flex;
        font-size: 20px;
        >li{
            margin-left: 30px;
            cursor: pointer;
        }
    }
`;