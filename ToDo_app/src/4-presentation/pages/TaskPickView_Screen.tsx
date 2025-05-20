// タスク個別表示画面

import React, { useEffect } from 'react';
import { useTask } from '../hooks/useTask';
import TaskButton from '../components/Task_Button';
import TaskCard from '../components/Task_Card';
import { useNavigate } from 'react-router-dom';

export const TaskPickScreen: React.FC = () => {
    const { tasks, fetchTasks } = useTask();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    // タスク一覧画面に遷移
    const nav_TaskLitView = () => {
        navigate('/tasklistscreen');
    };

    return (
        <div>
            <h1>タスク選択画面</h1>
            <p>
                {/* 編集・削除ボタン */}
                <TaskButton
                    label="タスク一覧に戻る"
                    width='150px'
                    height='50px'
                    onClick={nav_TaskLitView}
                />
            </p>

            {tasks.length === 0 ? (
                <h3>タスクがありません</h3>
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

