import { css } from "@emotion/react";

export const SMainContentBox = css`
    width: 100%;
    background-color: #06b495;
`;

export const SMainProfileBox = css`
    margin: 0px auto;
    padding: 20px 0px 11px 0px;
    width: 335px;
    height: 120px;
    & > button {
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }

`;

export const SMainProfileButton = css`
    display: flex;
    align-items: center;
    background-color: #06b495;
    & > span {
        font-size: 16px;
        color: white;
    }
`;

export const SMainProfileButtonIcon = css`
    position: relative;
    top: 3px;
`;

export const SMainProfileImgBox = css`
    margin-right: 25px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    overflow: hidden;
`;

export const SMainProfileImg = css`
    box-sizing: border-box;
    width: 64px;
    height: 64px;
`;

export const SMainReviewButton = css`
    box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
    margin-top: 15px;
    border-radius: 10px;
    width: 226px;
    height: 38px;
    font-weight: 600;
    background-color: #0cc5a4;
`;

export const SMainReviewIcon = css`
    position: relative;
    top: 2px;
    margin-right: 2px;
`;

export const SMainMissionButton = css`
    box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
    margin-top: 15px;
    margin-left: 5px;
    border-radius: 10px;
    width: 102px;
    height: 38px;
    font-weight: 600;
    background-color: #0cc5a4;
`;

export const SMainMissionIcon = css`
        position: relative;
    top: 2px;
    margin-right: 2px;
`;

export const SMainContentList = css`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #06b495;
`;