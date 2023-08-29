import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function MainArticleLayout({ children }) {
    return (
        <div css={S.SMainArticleLayout}>
            {children}
        </div>
    );
}

export default MainArticleLayout;