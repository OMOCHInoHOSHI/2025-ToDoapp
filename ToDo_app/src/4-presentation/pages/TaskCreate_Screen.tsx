// タスク作成画面

import React, { useState } from 'react';
import TaskInput from '../components/Task_Input';
import TaskTextArea from '../components/Task_TextArea';
import { useTask } from '../hooks/useTask';


export const TaskCreateScreen = () => {

    const { createTask } = useTask();   // useTaskフックを使用してタスク作成関数を取得

    // タスクの状態を管理するためのuseStateフック
    // 入力を管理
    const [taskName, setTaskName] = useState<string>('');
    const [taskContent, setTaskContent] = useState<string>('');
    const [taskGenre, setTaskGenre] = useState<string>('');
    const [taskProgress, setTaskProgress] = useState<number>(0);
    const [taskDueDate, setTaskDueDate] = useState<Date>(new Date());

    // タスク作成処理
    const handleCreateTask = (e: React.FormEvent) => {

        // フォームのデフォルトの送信動作を防ぐ //ページのリロードを防ぐ
        e.preventDefault();


        // 入力値の必須チェック
        // タスク内容以外が必須
        if (!taskName || !taskGenre || taskProgress < 0 || !taskDueDate) {
            alert('必須項目が未入力です。');
            return;
        }

        // タスク作成処理をここに実装
        console.log('タスク作成:', { taskName, taskContent, taskGenre, taskProgress, taskDueDate });

        // タスク作成関数を呼び出す
        createTask({
            name: taskName,
            content: taskContent,
            genre: taskGenre,
            progress: taskProgress,
            dueDate: taskDueDate,
        });
    };

    return (
        <div>
            <h1>タスク作成画面</h1>
            <form onSubmit={handleCreateTask}>
                <TaskInput label="タスク名" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <TaskTextArea label="タスク内容" type="text" value={taskContent} onChange={(e) => setTaskContent(e.target.value)} />
                <TaskInput label="ジャンル" type="text" value={taskGenre} onChange={(e) => setTaskGenre(e.target.value)} />
                <TaskInput label="進捗度" type="number" value={taskProgress} onChange={(e) => setTaskProgress(Number(e.target.value))} />
                <TaskInput label="期限" type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(new Date(e.target.value))} />
                <button type="submit">タスク作成</button>
            </form>
        </div>
    );
}