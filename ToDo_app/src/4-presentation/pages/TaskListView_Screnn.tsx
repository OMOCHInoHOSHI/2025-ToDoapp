// タスク一覧画面

import React, { useEffect } from 'react';
import { useTask } from '../hooks/useTask';
import TaskButton from '../components/Task_Button';
import TaskCard from '../components/Task_Card';
import WordScreen from './Resource/Words_Screen.json';
import WordTask from './Resource/Words_task.json';


// タスク一覧画面
export const TaskListView: React.FC = () => {
    const { tasks, fetchTasks } = useTask();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div>

            <h1>{WordScreen.TaskList}{WordScreen.Screen}</h1>

            <p>
            {/* 編集・削除ボタン */}
            <TaskButton
                label={WordScreen.EditandDelete}
                onClick={() => console.log('編集・削除ボタンがクリックされました')}
            />
            </p>


            {tasks.length === 0 ? (
                <h3>{WordTask.Notask}</h3>
            ) : (
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
            )}
        </div>
    );
}