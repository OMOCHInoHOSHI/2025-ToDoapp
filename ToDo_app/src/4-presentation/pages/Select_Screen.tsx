// 操作選択画面

import React from 'react';
import TaskButton from '../components/Task_Button';
// import { useTask } from '../hooks/useTask';
import { useNavigate } from 'react-router-dom';


export const SelectScreen = () => {
    // const { tasks, setTasks } = useTask();
  const navigate = useNavigate();

  // タスク一覧画面に遷移
    const nav_TaskLitView = () => {
    // navigate('/vistew');
    };

    // タスク作成画面に遷移
    const nav_Createtask = () => {
        navigate('/taskcreatescreen');
    };


    // 遷移ボタン表示
    return (
    <div>
        <h1>操作選択画面</h1>
        <div>
            <TaskButton label="タスクタスク作成" onClick={nav_Createtask} />
            <TaskButton label="タスク一覧" onClick={nav_TaskLitView} />
        </div>
    </div>
    );
}