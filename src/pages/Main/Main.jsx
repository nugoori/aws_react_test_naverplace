import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
/** @jsxImportSource @emotion/react */

function Main({ children }) {
    return (
        <>
            <MainLayout >
                {children}
            </MainLayout>
        </>
    );
}

export default Main;