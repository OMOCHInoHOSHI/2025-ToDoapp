// ボタン用のコンポーネント(UI部品)

import React from 'react';
import './Task_Button.css'; // スタイルを適用

// TaskButtonコンポーネントの型定義
type TaskButtonProps = {
    label: string; // ボタンのラベル
    onClick: () => void; // ボタンがクリックされたときの処理
    width?: string; // ボタンの幅 (オプション)
    height?: string; // ボタンの高さ (オプション)
};

// TaskButtonコンポーネント
// 高さと幅を指定できるボタンコンポーネント
const TaskButton: React.FC<TaskButtonProps> = ({ label, onClick, width = '200px', height = '80px' }) => {
    return (
        <button
            className="task-button"
            onClick={onClick}
            style={{
                width: width,
                height: height,
            }}
                >
            {label}
        </button>
    );
};

export default TaskButton;
