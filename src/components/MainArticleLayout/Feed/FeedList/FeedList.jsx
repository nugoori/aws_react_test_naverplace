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

    const tags = [
        {
            id: 1,
            name: "한식"
        },
        {
            id: 2,
            name: "물놀이"
        },
        {
            id: 3,
            name: "카페"
        },
        {
            id: 4,
            name: "피크닉"
        },
        {
            id: 5,
            name: "양식"
        },
        {
            id: 6,
            name: "클래스·소품"
        },
        {
            id: 7,
            name: "일식"
        },
        {
            id: 8,
            name: "테마파크"
        },
        {
            id: 9,
            name: "등산·트레킹"
        },
        {
            id: 10,
            name: "분식/치킨"
        },
        {
            id: 11,
            name: "체험관광"
        },
        {
            id: 12,
            name: "중식"
        },
        {
            id: 13,
            name: "숙박"
        },
        {
            id: 14,
            name: "아시아/퓨전음식"
        },
        {
            id: 15,
            name: "뷔페/레스토랑"
        }
    ]

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
                            캠핑
                        </button>
                        {tags.map(tag => (
                            <button key={tag.id}>{tag.name}</button>
                        ))}
                    </div>
                </div>
            </div>  
        </>
    );
}

export default FeedList;