import React from 'react';
import TimeLineVisit from '../../components/MainArticleLayout/TimeLine/TimeLineVisit';
import MainArticleLayout from '../../components/MainArticleLayout/MainArticleLayout';

function TimeLine(props) {
    return (
        <>
            <MainArticleLayout >
                <TimeLineVisit />
            </MainArticleLayout>
        </>
    );
}

export default TimeLine;