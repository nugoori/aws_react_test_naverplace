import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSmile, AiOutlineStar } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

function FeedContent(props) {
    return (
            < >
                <ul css={S.SFeedContentContainer}>
                    {/*  */}
                    {/* 작성글을 리스트로? */}
                    <li>
                        <div css={S.SFeedContentBox}>
                            <div css={S.SFeedProfileBox}>
                                <button css={S.SFeedProfileRightButton}>
                                    <div css={S.SFeedProfileImgBox}>
                                        <img css={S.SFeedProfileImg} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-WJn17ZGh_xJ_b5hrk_do9fGdPEqMlDbhUdkfvEfweXIEyIEq" />
                                    </div>
                                    <div >
                                        <div css={S.SFeedProfileText}>
                                            <p>쩡이수</p>
                                        </div>
                                        <div css={S.SFeedProfileText}>
                                            <span >사진리뷰 () · 팔로워 ()</span>
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

                            <div css={S.SFeedContentSentence}>
                                testtest
                            </div>

                            <div css={S.SFeedTagBox}>
                                <img src="" alt="" />
                                <span></span>
                            </div>

                            <div css={S.SFeedEmoteBox}>
                                <div>
                                    <button onClick={""}>
                                        <AiOutlineSmile css={S.SFeedEmoteIcon}/>
                                        반응 남기기
                                    </button>
                                </div>
                                <div>
                                    <span></span>
                                </div>
                            </div>

                            <div css={S.SFeedLocationBox}>
                                <div>
                                    <div>
                                        <button css={S.SFeedLocationLeftButton}>
                                            가게명
                                            <RiArrowRightSLine css={S.SFeedLocationLeftButtonIcon}/>
                                        </button>
                                    </div>
                                    <div css={S.SFeedLocationLeftText}>
                                        생선회·경상남도 통영시 태평동
                                    </div>
                                </div>
                                <div>
                                    <button css={S.SFeedLocationRightButton}>
                                        <AiOutlineStar css={S.SFeedLocationRightButtonIcon  }/>
                                        저장
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*  */}
                </ul>
            </>
    );
}

export default FeedContent;