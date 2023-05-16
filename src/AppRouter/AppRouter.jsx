import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import MainPage from '../Pages/MainPage/MainPage';
import Searchpage from '../Pages/SearchPage/Searchpage';
import SoonInCinemaPage from '../Pages/SoonInCinemaPage/SoonInCinemaPage';
import FavouritesPage from '../Pages/FavouritesPage/FavouritesPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/main' element = {<Searchpage/>}></Route>
            <Route path='/mainpage' element = {<MainPage/>}></Route>
            <Route path='/favourites' element = {<FavouritesPage/>}></Route>
            <Route path='/soonincinema' element = {<SoonInCinemaPage/>}></Route>
            <Route path="*" element={<Navigate to="/main" replace />}/>
        </Routes>
    );
};


export default AppRouter;