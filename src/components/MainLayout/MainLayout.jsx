import React, { Children } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import MainHeader from '../MainHeader/MainHeader';
import MainContent from '../MainContent/MainContent';
import MainArticleLayout from '../MainArticleLayout/MainArticleLayout';


function MainLayout() {
    return (
        <div css={S.SMainLayout}>
            <MainHeader />
            <MainContent />
            <MainArticleLayout >
            </MainArticleLayout>
        </div>
    );
}

export default MainLayout;