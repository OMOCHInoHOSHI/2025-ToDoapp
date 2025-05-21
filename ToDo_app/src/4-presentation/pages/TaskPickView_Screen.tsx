// タスク個別表示画面

import React, { useEffect } from 'react';
import { useTask } from '../hooks/useTask';
import TaskButton from '../components/Task_Button';
import TaskCard from '../components/Task_Card';
import { useNavigate, useLocation } from 'react-router-dom';
import WordScreen from '../Resource/Words_Screen.json';
import WordTask from '../Resource/Words_task.json';

export const TaskPickScreen: React.FC = () => {
    const { tasks, fetchTasks } = useTask();
    const navigate = useNavigate();

    // タスク一覧画面からの遷移時に渡されたタスクIDを取得
    const location = useLocation();
    const taskID = location.state?.taskID;

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    // タスク一覧画面に遷移
    const nav_TaskLitView = () => {
        console.log('タスク一覧画面に遷移');
        navigate('/tasklistscreen');
    };

    // タスク編集画面に遷移
    const nav_EditTask = () => {
        console.log('タスク編集画面に遷移');
        navigate('/edittaskscreen', {
            state: {
                taskID: taskID
            }
        });
    }

    return (
        <div>
            <h1>{WordScreen.TaskPick}{WordScreen.Screen}</h1>

            <p>
                {/* タスク一覧画面に戻るボタン */}
                <TaskButton
                    label={WordScreen.back}
                    width='150px'
                    height='50px'
                    onClick={nav_TaskLitView}
                />

                {/* タスク編集画面に遷移 */}
                <TaskButton
                    label={WordScreen.Edit}
                    width='150px'
                    height='50px'
                    onClick={nav_EditTask}
                />
            </p>


            {/* 渡されたタスクIDのタスクを表示 */}
            {tasks.length === 0 ? (
                // 一応タスクがない場合
                <h3>{WordTask.Notask}</h3>
            ) : (
                <div>
                    {tasks.map((task) => (
                        task.taskID === taskID && (
                            <TaskCard
                                key={task.taskID}
                                taskName={task.taskName}
                                taskCreatetime={task.taskCreateTime}
                                taskProgress={task.taskProgress}
                                taskContent={task.taskContent}
                                taskGenre={task.taskGenre}
                                taskDueDate={task.taskDueDate}
                                onClick={() => console.log(`タスクID: ${task.taskID}がクリックされました`)}
                                cardsize="big"
                            />
                        )
                    ))}
                </div>
            )}

        </div>
    );
}

