import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function MainFooter(props) {
    return (
        <div css={S.SMainFooterContainer}>
            <div css={S.SMainFooterTop}>
                <span>
                    <button>
                        로그인
                    </button>
                </span>
                <span css={S.SMainFooterTopRight}>
                    <button >
                        전체서비스
                    </button>
                </span>
            </div>
            <div css={S.SMainFooterMiddle}>
                <span>
                    <button>
                        이용정책
                    </button>
                </span>
                <span css={S.SMainFooterMiddleRight}>
                    <button >
                        MY플레이스 고객센터
                    </button>
                </span>
                <span css={S.SMainFooterMiddleRight}>
                    <button>
                        신고센터
                    </button>
                </span>
                <span css={S.SMainFooterMiddleRight}>
                    <button >
                        공지사항
                    </button>
                </span>
            </div>
            <div css={S.SMainFooterMiddle}>
                <span >
                    <button >
                        ⓒ NAVER Corp.
                    </button>
                </span>
            </div>
        </div>
    );
}

export default MainFooter;