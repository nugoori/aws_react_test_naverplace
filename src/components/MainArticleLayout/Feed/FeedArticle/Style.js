import { css } from "@emotion/react";

export const SMainArticleHeader = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 66px;
    background-color: #E1EFE5;
`;

export const SMainArticleButtonBox = css`
    display: flex;
    justify-content: space-between;
    padding: 6px 0px;
    width: 720px;
    height: 54px;
    & > div > button:focus {
        color: white;
        background-color: skyblue;
    }
`;

export const SArticleLeftButtonBox = css`
    padding-top: 6px;
    & > button {
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 6px rgba(0,0,0,.06);
        height: 42px;
        font-size: 16px;
        font-weight: 500;
        background-color: white;
        cursor: pointer;
    }
`;

export const SShowAllButton = css`
    margin-right: 8px;
    width: 55px;

`;

export const SfollowingButton = css`
    margin-right: 8px;
    width: 69.5px;

`;

export const SPlusButton = css`
    margin-right: 8px;
    width: 98px;

`;

export const SArticleRightButtonBox = css`
    display: flex;
    align-items: center;
    & > * {
        color: #7f8daa;
    }
`;

export const SDivider = css`
    border-left: 1px solid #e2e5e8;
    width: 2px;
    height: 24px;
`;

export const SLocationButton = css`
    border: none;
    margin-right: 8px;
    width: 72px;
    height: 42px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
`;

export const SLocationIcon = css`
    position: relative;
    top: 2px;
    margin-right: 2px;
`;