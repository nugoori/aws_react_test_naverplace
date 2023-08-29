import { css } from "@emotion/react";

export const SFeedContentContainer = css`
    width: 100%;
`;

export const SFeedContentBox = css`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    max-width: 720px;
    max-height: 700px;
`;

export const SFeedProfileBox = css`
    margin: 0px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 710px;
    height: 52px;
    & > button {
        border: none;
        cursor: pointer;
    }
`;

export const SFeedProfileRightButton = css`
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #ffffff;
`;

export const SFeedProfileImgBox = css`
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    overflow: hidden;
`;

export const SFeedProfileImg = css`
    box-sizing: border-box;
    width: 56px;
    height: 56px;
`;

export const SFeedProfileText = css`
    display: flex;
    padding-left: 12px;
    width: 142px;
    height: 20px;
    & > p {
        font-size: 16px;
        font-weight: 700;
        color: #242424;
    }
    & > span {
        font-size: 13px;
        color: #8F8F8F;
    }
    &:last-child {
        margin-top: 3px;
    }
`;

export const SFeedProfileLeftButton = css`
    display: flex;
    align-items: center;
    & > button {
        border: none;
        cursor: pointer;
    }
`;

export const SFeedProfileFollowButton = css`
    border-radius: 5px;
    width: 70px;
    height: 30px;
    font-weight: 600;
    color: #287CFF;
`;

export const SFeedProfileIconButton = css`
    width: 30px;
    height: 30px;
    color: #dbdbdb;
    background-color: transparent;
`;

export const SFeedContentImgBox = css`
    display: flex;
    margin-top: 5px;
    max-width: 720px;
`;

export const SFeedContentImgLeft = css`
    margin-right: 1px;
    border: 1px solid #dddddd;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 400px;
    height: 360px;
`;

export const SFeedContentImgRight_top = css`
    margin-bottom: 1px;
    border: 1px solid #dddddd;
    border-top-right-radius: 5px;
    width: 300px;
    height: 178.5px;
`;

export const SFeedContentImgRight_bottom = css`
    border: 1px solid #dddddd;
    border-bottom-right-radius: 5px;
    width: 300px;
    height: 178.5px;
`;

export const SFeedContentSentence = css`
    word-wrap: break-word;
    max-width: 705px;
    margin-top: 10px;
    height: auto;
    
`;

export const SFeedTagBox = css`
    display: flex;
    flex-wrap: nowrap;
    padding-top: 10px;
    width: 720px;
    height: 40px;
`;

export const SFeedEmoteBox = css`
    width: 680px;
    height: 33px;
   
    & > div > button {
        border: none;
        align-items: center;
        font-size: 16px;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const SFeedEmoteIcon = css`
    position: relative;
    top: 8px;
    left: -5px;
    font-size: 28px;
`;

export const SFeedLocationBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 13px 16px 12px 18px;
    width: 670px;
    height: 33px;
    
`;

export const SFeedLocationLeftButton = css`
    font-size: 16px;
    color: #242424;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const SFeedLocationLeftButtonIcon = css`
    position: relative;
    top: 4px;
    font-size: 20px;
`;

export const SFeedLocationLeftText = css`
    font-size: 13px;
    color: #8f8f8f;
`;

export const SFeedLocationRightButton = css`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: #8f8f8f;
    border: none;
        background-color: transparent;
        cursor: pointer;
`;

export const SFeedLocationRightButtonIcon = css`
    margin-bottom: 3px;
    font-size: 20px;
`;