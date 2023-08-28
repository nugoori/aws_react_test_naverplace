import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { MdLocationSearching } from 'react-icons/md';

function FeedArticle(props) {
    return (
        <>
            <div css={S.SMainArticleHeader}>
                <div css={S.SMainArticleButtonBox}>
                    <div css={S.SArticleLeftButtonBox}>
                        <button css={S.SShowAllButton}>전체</button>
                        <button css={S.SfollowingButton}>팔로잉</button>
                        <button css={S.SPlusButton}>+관심지역</button>
                    </div>
                    <div css={S.SArticleRightButtonBox}>
                        <div css={S.SDivider}></div>
                        <button css={S.SLocationButton}>
                            <MdLocationSearching css={S.SLocationIcon}/>
                            현위치
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    );
}

export default FeedArticle;