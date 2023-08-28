import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import FeedArticle from './FeedArticle/FeedArticle';
import FeedList from './FeedList/FeedList';
import FeedContent from './FeedContent/FeedContent';

function MainArticleLayout() {
    return (
        <div css={S.SMainArticleLayout}>
            <FeedArticle />
            <FeedList />
            <FeedContent />
        </div>
    );
}

export default MainArticleLayout;