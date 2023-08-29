import { css } from "@emotion/react";

export const SContentListBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
    height: 50px;
    & > li > button {
        border: none;
        width: auto;
        height: 50px;
        font-size: 17px;
        font-weight: 600;
        color: rgba(255,255,255,.7);
        cursor: pointer;
    background-color: #06b495;
    }
    & > li > button:focus {
        border-bottom: 2px solid white;
        color: white;
    }
`;

