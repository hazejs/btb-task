import styled from "styled-components";

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`;

export const LoginFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    padding: 15px 50px 50px 50px;
    justify-content: space-between;
    border: 2px solid grey;
    border-radius: 22px;
    position: relative;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0.8;
    overflow: hidden;
`;

export const Input = styled.input`
    outline: none;
    background: transparent;
    height: 50px;
    color: #fff;
    border: 1px solid #c3c3c3;
    border-radius: 25px;
    width: 100%;
    font-size: 18px;
    padding-left: 8px;
    margin-bottom: 20px;
    
    &:last-child {
        margin: 0;
    }
`;

export const LoginTitle = styled.h2`
    font-size: 25px;
    color: #fff;
`;

export const Button = styled.button`
    margin-bottom: 50px;
    height: 55px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 19px;
    font-weight: 600;
    border: none;
    background: linear-gradient(90deg, rgb(34 0 36) 0%, rgb(39 39 223) 35%, rgb(0 255 150) 100%);
    &:hover {
        color: #fff;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 19px;
    position: absolute;
    bottom: 0;
`;