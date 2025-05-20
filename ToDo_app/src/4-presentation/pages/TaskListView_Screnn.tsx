// タスク一覧画面

import React, { useEffect } from 'react';
import { useTask } from '../hooks/useTask';
import TaskButton from '../components/Task_Button';
import TaskCard from '../components/Task_Card';

// タスク一覧画面
export const TaskListView: React.FC = () => {
    const { tasks, fetchTasks } = useTask(); // useTaskフックを使用してタスク一覧を取得

    // タスク一覧を取得するためのuseEffectフック
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div>
            <h1>タスク一覧</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.taskID}
                        taskName={task.taskName}
                        taskCreatetime={task.taskCreateTime}
                        taskProgress={task.taskProgress}
                        onClick={() => console.log(`タスクID: ${task.taskID}がクリックされました`)}
                    />
                ))}
            </div>
            <TaskButton label="タスク作成" onClick={() => console.log('タスク作成ボタンがクリックされました')} />
        </div>
    );
}