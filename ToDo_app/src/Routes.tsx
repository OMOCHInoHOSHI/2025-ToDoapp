// ルートの定義

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SelectScreen } from './4-presentation/pages/Select_Screen';
import { TaskCreateScreen } from './4-presentation/pages/TaskCreate_Screen';
import { TaskListScreen } from './4-presentation/pages/TaskListView_Screnn';
import { TaskPickScreen } from './4-presentation/pages/TaskPickView_Screen';
import { EditTaskScreen } from './4-presentation/pages/EditTask_Screen';

// 選択画面を初期に
const RoutesComponent = () => {
    return (
        <Routes>
        <Route path="/" element={<SelectScreen />} />   // 選択画面
        <Route path="/taskcreatescreen" element={<TaskCreateScreen />} />    // タスク作成画面
        <Route path="/tasklistscreen" element={<TaskListScreen />} />   // タスク一覧画面
        <Route path="/taskpickscreen" element={<TaskPickScreen />} />    // タスク選択画面
        <Route path="/edittaskscreen" element={<EditTaskScreen />} />   // タスク編集画面
        </Routes>
    );
}

export default RoutesComponent;