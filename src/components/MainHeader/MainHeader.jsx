import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { SiNaver } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
import couponImg from '../../assests/img/쿠폰이미지.png'

function MainHeader(props) {

    return (
        <>
            <div css={S.SHeaderTop}>
                <div css={S.SHeaderTopBox}>
                    <h1 css={S.SLogo}>
                        <button css={S.SLogoIconButton}>
                            <a href="https://naver.com"><SiNaver css={S.SLogoIcon}/>
                            </a>
                        </button>
                        <span>MY플레이스</span>
                    </h1>
                </div>
                <div css={S.SButtonBox}>
                    <button css={S.SCouponButton}>
                        <img src={couponImg} />
                    </button>
                    <button css={S.SHeaderMenu}>
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
            <div css={S.SHeaderBody}>

            </div>
        </>
    );
}

export default MainHeader;