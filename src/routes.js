import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Videos from '../pages/Videos';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/video' element={ <Videos/> }/>
            </Routes>
        </BrowserRouter>
    )
}