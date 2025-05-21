import React, { useState, useEffect } from 'react';
import { useTask } from '../hooks/useTask';
import TaskInput from '../components/Task_Input';
import { useNavigate, useLocation } from 'react-router-dom';
import TaskButton from '../components/Task_Button';
import WordScreen from '../Resource/Words_Screen.json';
import WordTask from '../Resource/Words_task.json';

export const EditTaskScreen: React.FC = () => {
    const { tasks, updateTask } = useTask();
    const navigate = useNavigate();

    // 遷移時に渡されたタスクIDを取得
    const location = useLocation();
    const taskID = location.state?.taskID;

    console.log("タスクID:", taskID);

    // 編集対象タスクを取得
    const task = tasks.find(t => t.taskID === taskID);

    // if (!task) {
    //     return <div>読み込み中...</div>;
    // }

    // 初期値をuseStateで管理
    const [name, setName] = useState(task?.taskName || "");
    const [content, setContent] = useState(task?.taskContent || "");
    const [genre, setGenre] = useState(task?.taskGenre || "");
    const [progress, setProgress] = useState(task?.taskProgress || 0);
    const [dueDate, setDueDate] = useState(task?.taskDueDate || "");

    useEffect(() => {
        if (task) {
            setName(task.taskName);
            setContent(task.taskContent || "");
            setGenre(task.taskGenre);
            setProgress(task.taskProgress);
            setDueDate(task.taskDueDate);
        }
    }, [task]);

    const handleSubmit = async () => {
        await updateTask({
            // taskID: taskId,
            name,
            content,
            genre,
            progress,
            dueDate: new Date(dueDate),
        });
        navigate('/tasklistscreen');
    };

    return (
        <div>
            <h1>{WordScreen.TaskEdit}</h1>

            <p>
                <TaskButton
                    label={WordScreen.back}
                    width='150px'
                    height='50px'
                    onClick={() => navigate('/tasklistscreen')}
                />

                <TaskButton
                    label={WordScreen.selectscreen}
                    width='150px'
                    height='50px'
                    onClick={() => navigate('/')}
                />

            </p>

            <TaskInput
                label="タスク名"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TaskInput
                label="タスク内容"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <TaskInput
                label="タスクジャンル"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <TaskInput
                label="タスク進捗"
                type="number"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
            />
            <TaskInput
                label="タスク期限"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />


            <p>
                <TaskButton
                    label={WordScreen.Edit}
                    width='150px'
                    height='50px'
                    onClick={handleSubmit}
                />
            </p>

            <p>
                <TaskButton
                    label={WordScreen.Delete}
                    width='150px'
                    height='50px'
                    onClick={() => {
                        console.log('削除ボタンがクリックされました');
                        navigate('/tasklistscreen');
                    }}
                />
            </p>
        </div>
    );
};