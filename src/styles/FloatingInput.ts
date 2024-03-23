import styled from 'styled-components';


interface InputLabelProps {
    $focused: boolean;
}

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 20px;
`;
export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 18px;
`;

export const InputLabel = styled.label<InputLabelProps>`
    pointer-events: none;
    z-index: 0;  
    position: absolute;
    top: ${({ $focused }) => ($focused ? '-15px' : '8px')};
    left: 10px;
    transition: top 0.3s, font-size 0.3s;
    font-size: ${({ $focused }) => ($focused ? '14px' : '18px')};
    color: ${({ $focused }) => ($focused ? '#fff' : '#fff')};
`;