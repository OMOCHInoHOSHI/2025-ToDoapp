// タスクカードのコンポーネント
//  作成画面のタスク名とか、一覧のカードとか

import React from 'react';
import './Task_Card.css'; // スタイルを適用
import { Props_Card } from '../shared/CardProps';

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
const TaskCard: React.FC<Props_Card> = ({ taskName, taskCreatetime, taskProgress, onClick }) => {

    // タスクの進捗度に応じてクラス名を変更
    const progressClass = taskProgress === 100 ? "task-card-finish" : "task-card-unfinish";

    return (
        <button
            className={`${progressClass}`}
            onClick={onClick}
            style={{
                width: '300px',
                height: '200px',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'flex-start',
                // padding: '16px',
                // textAlign: 'left',
            }}
        >
            <div style={{ fontWeight: 'bold', fontSize: '1.2em', marginBottom: '8px' }}>
                {taskName}
            </div>
            <div style={{ color: '#666', marginBottom: '8px' }}>
                作成日時: {new Date(taskCreatetime).toLocaleString()}
            </div>
            <div>
                進捗: {taskProgress}%
            </div>
        </button>
    );
}

export default TaskCard;