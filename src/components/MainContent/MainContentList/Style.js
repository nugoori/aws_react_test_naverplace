import { css } from "@emotion/react";

export const SContentListBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 50px;
    & > li > button {
        border: none;
        width: 73px;
        height: 50px;
        font-size: 15px;
        font-weight: 600;
        color: #dbdbdb;
        cursor: pointer;
    background-color: #06b495;
    }
    & > li > button:focus {
        border-bottom: 2px solid white;
        color: white;
    }
`;

