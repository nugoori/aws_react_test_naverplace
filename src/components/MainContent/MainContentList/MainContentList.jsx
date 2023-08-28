import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useLocation, useNavigate } from 'react-router-dom';

function MainContentList(props) {

    const navigate = useNavigate();
    const location = useLocation();

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
        }
    ]

    const handleClick = (path) => {
        console.log(path);
        navigate(path);
    }

    return (
        <ul css={S.SContentListBox}>
            {menus.map(menu => (
                <li key={menu.id} onClick={handleClick(menu.path)}>
                    <button>
                        {menu.name}
                    </button>
                </li>
            ))}
            {/* <li  onClick={handleClick}>
                <button>
                    피드
                </button>
            </li>
            <li >
                <button >
                    타임라인
                </button>
            </li>
            <li>
                <button>
                    리뷰
                </button>
            </li> */}
        </ul>

    );
}

export default MainContentList;