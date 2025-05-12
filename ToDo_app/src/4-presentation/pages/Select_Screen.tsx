// 操作選択画面

import React from 'react';
import TaskButton from '../components/Task_Button';
// import { useTask } from '../hooks/useTask';
// import { useNavigate } from 'react-router-dom';


export const SelectScreen = () => {
    // const { tasks, setTasks } = useTask();
  // const navigate = useNavigate();

  // タスク一覧画面に遷移
    const nav_TaskVewi = () => {
    // navigate('/view');
    };

    // タスク作成画面に遷移
    const nav_Createtask = () => {
    // navigate('/add');
    };


    // 遷移ボタン表示
    return (
    <div>
        <h1>操作選択画面</h1>
        <div>
            <TaskButton label="タスク追加" onClick={nav_TaskVewi} />
            <TaskButton label="タスク表示" onClick={nav_Createtask} />
        </div>
    </div>
    );
}