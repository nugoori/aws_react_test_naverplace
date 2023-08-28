import './App.css';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import MainLayout from './components/MainLayout/MainLayout';
import MainHeader from './components/MainHeader/MainHeader';
import MainContent from './components/MainContent/MainContent';
import MainContentList from './components/MainContent/MainContentList/MainContentList';
import { Route, Routes } from 'react-router-dom';
import MainArticleLayout from './components/MainArticleLayout/MainArticleLayout';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <>
      <Reset />
      <Global css={S.GSCommon}/>
      <MainLayout >
        <MainHeader />
        <MainContent >
          <MainContentList />
        </MainContent>
          
        <MainArticleLayout >
          <Routes >
            <Route path='feed' element={ <Feed /> }/>
            <Route path='visit' />
            <Route path='review' />
          </Routes>
        </MainArticleLayout>
      </MainLayout>
    </>
  );
}

export default App;
