import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useNavigate } from 'react-router-dom';

function MainContentList(props) {

    const navigate = useNavigate();

    const menus = [
        {
            id: 1,
            name: "피드",
            path: "/feed"
        },
        {
            id: 2,
            name: "타임라인",
            path: "/visit"
        },
        {
            id: 3,
            name: "리뷰",
            path: "/review"
        },
        {
            id: 4,
            name: "예약·주문",
            path: "/"
        },
        {
            id: 5,
            name: "저장",
            path: "/"
        }
    ]

    const handleClick = (path) => {
        console.log(path);
        navigate(path);
    }

    return (
        <ul css={S.SContentListBox}>
            {menus.map(menu => (
                <li key={menu.id} onClick={() => handleClick(menu.path)}>
                    <button>
                        {menu.name}
                    </button>
                </li>
            ))}
        </ul>

    );
}

export default MainContentList;