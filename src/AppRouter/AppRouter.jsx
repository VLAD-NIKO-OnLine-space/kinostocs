import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import MainPage from '../Pages/MainPage/MainPage';
import Searchpage from '../Pages/SearchPage/Searchpage';
import SoonInCinemaPage from '../Pages/SoonInCinemaPage/SoonInCinemaPage';
import FavouritesPage from '../Pages/FavouritesPage/FavouritesPage';
import KinostocsPage from '../Pages/KinostocsPage/KinostocsPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/kinostocs' element = {<KinostocsPage/>}></Route>
            <Route path='/main' element = {<Searchpage/>}></Route>
            <Route path='/mainpage' element = {<MainPage/>}></Route>
            <Route path='/favourites' element = {<FavouritesPage/>}></Route>
            <Route path='/soonincinema' element = {<SoonInCinemaPage/>}></Route>
            <Route path="*" element={<Navigate to="/main" replace />}/>
        </Routes>
    );
};


export default AppRouter;