import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { BsThreeDotsVertical } from 'react-icons/bs';

function FeedContent(props) {
    return (
            < >
                <ul css={S.SFeedContentContainer}>
                    <li>
                        <div css={S.SFeedContentBox}>
                            <div css={S.SFeedProfileBox}>
                                <button css={S.SFeedProfileRightButton}>
                                    <div css={S.SFeedProfileImg}>
                                        <img src="" />
                                    </div>
                                    <div >
                                        <div css={S.SFeedProfileText}>
                                            <p>쩡이수</p>
                                        </div>
                                        <div css={S.SFeedProfileText}>
                                            <span >사진리뷰 · 팔로워</span>
                                        </div>
                                    </div>
                                </button>
                                <div css={S.SFeedProfileLeftButton}>
                                    <button css={S.SFeedProfileFollowButton}>
                                        팔로우
                                    </button>
                                    <button css={S.SFeedProfileIconButton}>
                                        <div>
                                            <BsThreeDotsVertical />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div css={S.SFeedContentImgBox}>
                                <div css={S.SFeedContentImgLeft}>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <div css={S.SFeedContentImgRight_top}>
                                        <img src="" alt="" />
                                    </div>
                                    <div css={S.SFeedContentImgRight_bottom}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
    );
}

export default FeedContent;