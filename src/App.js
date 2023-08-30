import './App.css';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import MainLayout from './components/MainLayout/MainLayout';
import MainHeader from './components/MainHeader/MainHeader';
import MainContent from './components/MainContent/MainContent';
import MainContentList from './components/MainContent/MainContentList/MainContentList';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import TimeLine from './pages/TimeLine/TimeLine';
import Review from './pages/Review/Review';
import MainFooter from './components/MainFooter/MainFooter';

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
          
          <Routes >
            <Route path='/feed' element={ <Feed /> }/>
            <Route path='/visit' element={ <TimeLine /> }/>
            <Route path='/review' element={ <Review /> }/>
          </Routes>

        <MainFooter />
      </MainLayout>
    </>
  );
}

export default App;
