import { css } from "@emotion/react";

export const SMainFooterContainer = css`
    text-align: center;
    padding: 50px 0 36px;
    width: 100%;
    height: 160px;
`;

export const SMainFooterTop = css`
    & > span > button {
        border: none;
        font-size: 14px;
        color: #8f8f8f;
        background-color: transparent;
        cursor: pointer;
    }
    & > span:last-child::before {

    }
`;

export const SMainFooterTopRight = css`
    &:before {
        display: inline-block;
        margin: 2px 9px 0px;
        width: 1px;
        height: 13px;
        background: rgba(225, 225, 225, 1);
        content: "";
    }
`;

export const SMainFooterMiddle = css`
    margin-top: 8px;
    & > span > button {
        border: none;
        font-size: 12px;
        color: #666666;
        background-color: transparent;
        cursor: pointer;
    }
`
export const SMainFooterMiddleRight = css`
    &:before {
        display: inline-block;
        margin: 2px 9px 0px;
        width: 1px;
        height: 12px;
        background: rgba(225, 225, 225, 1);
        content: "";
    }
`;

