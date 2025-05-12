// ルートの定義

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SelectScreen } from './4-presentation/pages/Select_Screen';

// 選択画面を初期に
const RoutesComponent = () => {
    return (
        <Routes>
        <Route path="/" element={<SelectScreen />} />
        {/* <Route path="/add" element={<AddTask />} /> */}
        {/* <Route path="/view" element={<ViewTask />} /> */}
        {/* <Route path="/edit/:id" element={<EditTask />} /> */}
        </Routes>
    );
}

export default RoutesComponent;