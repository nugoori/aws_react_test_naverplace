import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function MainLayout({ children }) {
    return (
        <div css={S.SMainLayout}>
            {children}
        </div>
    );
}

export default MainLayout;