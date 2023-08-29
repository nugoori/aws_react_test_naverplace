import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function ReviewContainer(props) {
    return (
        <div css={S.SReviewContainer}>
            <div css={S.SReviewLineMain}>
                <svg css={S.SReviewIcon}>flag</svg>
                <div css={S.SReviewMainStrong}>
                    정성스레 작성한 <strong>리뷰</strong>
                    <div>
                        내 리뷰를 모아 만든 <strong>테마리스트</strong>
                    </div>
                </div>
                <div css={S.SReviewMainText}>
                    나의 발자취를 소중한 기록으로 남겨보세요.
                </div>
                <div css={S.SReviewMainImgBox}>
                    <img css={S.SReviewMainImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png" alt="" />
                </div>

                <div css={S.SReviewMainButtonBox}>
                    <button css={S.SReviewMainButton}>
                        리뷰 참여하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewContainer;