import { css } from "@emotion/react";

export const SFeedTagContainer = css`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SFeedTagBox = css`
    display: flex;
    flex-wrap: nowrap;
    padding-top: 10px;
    width: 720px;
    height: 40px;
`;

export const SFeedTagVericalWrap = css`
    z-index: 1;
    max-width: 700px;
    height: 48px;
    overflow: scroll;
    overflow: auto;
    white-space: nowrap;
    &::-webkit-scrollbar{
        display: none;
    }
    & > button {
        margin-right: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 50px;
        padding: 0px 13px;
        width: auto;
        height: 36px;
        cursor: pointer;
        background-color: transparent;
    }
    & > button:focus {
        color: white;
        background-color: black;
    }
`;

export const SFeedListToRight = css`
    z-index: 10;
    position: relative;
    left: -685px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const SFeedListToLeft = css`
    z-index: -10;
    position: relative;
    right: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
