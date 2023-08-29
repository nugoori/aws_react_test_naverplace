import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';

function FeedList(props) {

    const scrollRef = useRef(null);
    const [ isDrag, setIsDrag ] = useState(false);
    const [ startX, setStartX ] = useState();

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    }

    const onDragMove = (e) => {
        if(isDrag) {
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    }

    const onDragEnd = () => {
        setIsDrag(false);
    }

    return (
        <>
            <div css={S.SFeedTagContainer}>
                <div css={S.SFeedTagBox}>
                    <div css={S.SFeedTagVericalWrap}
                        onMouseDown={onDragStart}
                        onMouseMove={onDragMove}
                        onMouseUp={onDragEnd}
                        onMouseLeave={onDragEnd}
                        ref={scrollRef}
                    >
                        {/* list로 만드는게 더 나은가? */}
                        <button>
                            한식
                        </button>
                        <button>
                            아이와 함께
                        </button>
                        <button>
                            아무리 길어져도 갠찮은가
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                        <button>
                            한식
                        </button>
                    </div>
                    {/* <button css={S.SFeedListToRight}>
                        <span>
                            <MdOutlineKeyboardArrowLeft />
                        </span>
                    </button>
                    <button css={S.SFeedListToLeft}>
                        <span>
                            <MdKeyboardArrowRight />
                        </span>
                    </button> */}
                </div>
            </div>  
        </>
    );
}

export default FeedList;