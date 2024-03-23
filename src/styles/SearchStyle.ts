import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: auto;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 80%;
    height: 55px;
    padding-left: 15px;
    border-radius: 30px;
    border: 1px solid grey;
    font-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    &:focus {
        border: none;
    }
`;

export const Suggestions = styled.ul`

    padding: 0;
    list-style-type: none;
    margin: 0;
    position: relative;
    top: 0px;
    width: 80%;
    background: #fafafa;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const Suggestion = styled.li`
    font-size: 18px;
    padding: 7px;
    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(139,255,128,1) 0%, rgba(183,219,45,1) 35%, rgba(255,175,0,1) 100%);
    }
`;


// Logout button
export const FloatingLogoutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    left: 50px;
    background: red;
    color: #fff;
    border: none;
    border-radius: 25px;
    width: 80px;
    height: 50px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;
