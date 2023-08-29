import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function TimeLineVisit(props) {
    return (
        <div css={S.STimeLineContainer}>
            <div css={S.STimeLineMain}>
                <svg css={S.STimeLineIcon}>flag</svg>
                <div css={S.STimeLineMainStrong}>
                    <strong>영수증/카드내역 인증,예약,주문</strong>한
                    <div>
                        장소가 나의 기록이 됩니다.
                    </div>
                </div>
                <div css={S.STimeLineMainText}>
                    방문했던 곳을 한 눈에 모아보세요.
                </div>
                <div css={S.STimeLineMainImgBox}>
                    <img css={S.STimeLineMainImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png" alt="" />
                </div>

                <div css={S.STimeLineMainButtonBox}>
                    <button css={S.STimeLineMainButton}>
                        리뷰 참여하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimeLineVisit;