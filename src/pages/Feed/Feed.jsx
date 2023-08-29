import React from 'react';
import MainArticleLayout from '../../components/MainArticleLayout/MainArticleLayout';
import FeedArticle from '../../components/MainArticleLayout/Feed/FeedArticle/FeedArticle';
import FeedContent from '../../components/MainArticleLayout/Feed/FeedContent/FeedContent';
import FeedList from '../../components/MainArticleLayout/Feed/FeedList/FeedList';

function Feed() {
    return (
        <>
            <MainArticleLayout >
                <FeedArticle />
                <FeedList />
                <FeedContent />
            </MainArticleLayout>
        </>
    );
}

export default Feed;