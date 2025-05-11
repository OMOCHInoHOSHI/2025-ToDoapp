// ボタン用のコンポーネント(UI部品)

import React from 'react';
import './Task_Button.css'; // スタイルを適用

type TaskButtonProps = {
    label: string; // ボタンのラベル
    onClick: () => void; // ボタンがクリックされたときの処理
};

const TaskButton: React.FC<TaskButtonProps> = ({ label, onClick }) => {
    return (
        <button className="task-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default TaskButton;
