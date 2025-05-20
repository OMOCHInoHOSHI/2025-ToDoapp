// 操作選択画面

import React from 'react';
import TaskButton from '../components/Task_Button';
// import { useTask } from '../hooks/useTask';
import { useNavigate } from 'react-router-dom';
import WordsScreen from '../Resource/Words_Screen.json';


export const SelectScreen = () => {
    // const { tasks, setTasks } = useTask();
  const navigate = useNavigate();

  // タスク一覧画面に遷移
    const nav_TaskLitView = () => {
        navigate('/tasklistscreen');
    };

    // タスク作成画面に遷移
    const nav_Createtask = () => {
        navigate('/taskcreatescreen');
    };


    // 遷移ボタン表示
    return (
    <div>
        <h1>{WordsScreen.selectscreen}</h1>
        <div>
            <TaskButton label={WordsScreen.TaskCreate} onClick={nav_Createtask} />
            <TaskButton label={WordsScreen.TaskList} onClick={nav_TaskLitView} />
        </div>
    </div>
    );
}