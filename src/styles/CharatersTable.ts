import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const SelectedSuggestion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
`;

export const SelectedSuggestionImg = styled.img`
    border-radius: 50%;
`;

export const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;

    th, td {
        padding: 8px;
        border-bottom: 1px solid #e0e0e0;
        color: #333;
    }

    th {
        background-color: #f8f8f8;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
`;