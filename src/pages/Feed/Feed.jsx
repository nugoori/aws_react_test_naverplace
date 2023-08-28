import React, { Children } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import MainArticleLayout from '../../components/MainArticleLayout/MainArticleLayout';

function Feed({ children }) {
    return (
        <>
            <MainArticleLayout >
                {children}
            </MainArticleLayout>
        </>
    );
}

export default Feed;