// タスクカードのコンポーネント
//  作成画面のタスク名とか、一覧のカードとか

import React from 'react';
import './Task_Card.css'; // スタイルを適用
import { Props_Card } from '../shared/CardProps';
import WordTask from '../Resource/Words_task.json';
// import WordScreen from '../Resource/Words_Screen.json';

// TaskCardコンポーネントの型定義S------------------------------------------
// 選択時のカードの型
// type TaskCard_Select = {
//     taskName: string; // タスク名
//     taskCreatetime: string; // タスクの作成時間
//     onClick: () => void; // カードがクリックされたときの処理
// };

// // タスク一覧の時のカードの型
// // TaskCard_Select を継承して進捗度を追加した型
// type TaskCard_List = TaskCard_Select & {
//     taskProgress: string; // タスクの進捗
// }

// // 各入力の型
// type TaskCard_Input = {
//     taskName: string; // タスク名
//     taskContent: string; // タスクの作成時間
//     taskGenre: string; // タスクのジャンル
//     taskProgress: string; // タスクの進捗
//     onClick: () => void; // カードがクリックされたときの処理
// };

// TaskCardコンポーネントの型定義E------------------------------------------



// TaskCardコンポーネント
// TaskCardコンポーネント
const TaskCard: React.FC<Props_Card> = ({ taskName, taskCreatetime, taskProgress, taskContent, taskGenre, taskDueDate, onClick , cardsize="mini" }) => {

    // タスクの進捗度に応じてクラス名を変更
    const progressClass = taskProgress === 100 ? "task-card-finish" : "task-card-unfinish";

    const styleMap = {
    mini: { width: '300px', height: '100px' },
    big: { width: '500px', height: '500px' },
    };

    // カードが小さいときの内容
    const miniTask = (
        <>
            <div>{WordTask.Taskname}: {taskName}</div>
            <div>{WordTask.createtime}: {new Date(taskCreatetime).toLocaleString()}</div>
            <div>{WordTask.progress}: {taskProgress}%</div>
        </>
    );

    // カードが大きいときの内容
    const bigTask = (
        <>
            <div>{WordTask.Taskname}: {taskName}</div>
            <div>{WordTask.content}: {taskContent}</div>
            <div>{WordTask.genre}: {taskGenre}</div>
            <div>{WordTask.progress}: {taskProgress}%</div>
            <div>{WordTask.duedate}: {taskDueDate?.toLocaleString()}</div>
            <div>{WordTask.createtime}: {new Date(taskCreatetime).toLocaleString()}</div>
        </>
    );

    return (
        <button
            className={`${progressClass}`}
            onClick={onClick}
            style={styleMap[cardsize]} // cardsizeに応じたスタイルを適用
        >
            {/* 大きさに応じたスタイルを適用 */}
            {cardsize === 'mini' ? miniTask : bigTask}

        </button>
    );
}


export default TaskCard;