// タスクカードのコンポーネント
//  作成画面のタスク名とか、一覧のカードとか

import React from 'react';
import './Task_Card.css'; // スタイルを適用

// TaskCardコンポーネントの型定義S------------------------------------------
// 選択時のカードの型
type TaskCard_Select = {
    taskName: string; // タスク名
    taskCreatetime: string; // タスクの作成時間
    onClick: () => void; // カードがクリックされたときの処理
};

// タスク一覧の時のカードの型
// TaskCard_Select を継承して進捗度を追加した型
type TaskCard_List = TaskCard_Select & {
    taskProgress: string; // タスクの進捗
}

// 各入力の型
type TaskCard_Input = {
    taskName: string; // タスク名
    taskContent: string; // タスクの作成時間
    taskGenre: string; // タスクのジャンル
    taskProgress: string; // タスクの進捗
    onClick: () => void; // カードがクリックされたときの処理
};

// TaskCardコンポーネントの型定義E------------------------------------------



// TaskCardコンポーネント

// TaskCardコンポーネント
