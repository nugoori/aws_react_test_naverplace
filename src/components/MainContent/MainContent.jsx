import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { BsCheck2Circle } from 'react-icons/bs';
import MainContentList from './MainContentList/MainContentList';

function MainContent(props) {

    return (
        <div css={S.SMainContentBox}>
            <div css={S.SMainProfileBox}>
                <button css={S.SMainProfileButton}>
                    <div css={S.SMainProfileImgBox}>
                        <img css={S.SMainProfileImg} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-WJn17ZGh_xJ_b5hrk_do9fGdPEqMlDbhUdkfvEfweXIEyIEq" alt="" />
                    </div>
                    <span>
                        로그인하기
                        <MdKeyboardArrowRight css={S.SMainProfileButtonIcon}/>
                    </span>
                </button>
                <button css={S.SMainReviewButton} >
                    <PiPencilSimpleLineFill css={S.SMainReviewIcon}/>
                    리뷰 쓰기
                </button>
                <button css={S.SMainMissionButton}>
                    <BsCheck2Circle css={S.SMainMissionIcon}/>
                    미션
                </button>
            </div>
            <div css={S.SMainContentList}>
                <MainContentList />
            </div>
        </div>
    );
}

export default MainContent;