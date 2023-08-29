import React from 'react';
import MainArticleLayout from '../../components/MainArticleLayout/MainArticleLayout';
import ReviewContainer from '../../components/MainArticleLayout/ReviewContainer/ReviewContainer';

function Review(props) {
    return (
        <>
            <MainArticleLayout>
                <ReviewContainer />
            </MainArticleLayout>
        </>
    );
}

export default Review;