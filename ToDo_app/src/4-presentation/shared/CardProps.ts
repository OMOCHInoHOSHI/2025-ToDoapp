// タスクカードの型定義

export type Props_Card = {
    // taskID: string; // タスクID
    taskName: string; // タスク名
    taskCreatetime: string; // タスクの作成時間
    taskProgress: number; // タスクの進捗
    onClick: () => void; // カードがクリックされたときの処理
    taskContent?: string; // タスク内容（省略可能）
    taskGenre?: string;   // ジャンル（省略可能）
    taskDueDate?: string;  // 期限（省略可能）
    cardsize?: 'mini' | 'big'; // cardsizeの型
}
