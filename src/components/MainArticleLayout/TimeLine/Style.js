import { css } from "@emotion/react";

export const STimeLineContainer = css`
padding: 25px 20px;
    width: 100%;
    height: 490px;
`;

export const STimeLineMain = css`
    margin: 0px auto;
    border-radius: 15px;
    padding: 34px 30px 40px;
    text-align: center;
    width: 650px;
    height: 360px;
    color: #fff;
    background-color: #55abab;
`;

export const STimeLineIcon = css`
    margin: 0 auto 10px;
    width: 19px;
    height: 20px;
`;

export const STimeLineMainStrong = css`
    font-size: 18px;
    & > strong {
        font-size: 20px;
        font-weight: 700;
    }
    & > div {
        margin-top: 5px;
    }
`;

export const STimeLineMainText = css`
    margin-top: 10px;
    font-size: 14px;
    color: #dbdbdb;
`;

export const STimeLineMainImgBox = css`
    margin: 30px auto 0px;
`;

export const STimeLineMainImg = css`
    box-sizing: border-box;
    width: 235px;
    height: 155px;
`;

export const STimeLineMainButtonBox = css`
    margin: 22px auto 0px;
`;

export const STimeLineMainButton = css`
    border: 1px solid #dbdbdb;
    border-radius: 50px;
    padding: 9px 0px;
    width: 140px;
    height: 43px;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
`;