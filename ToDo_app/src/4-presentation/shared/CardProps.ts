// タスクカードの型定義

export type Props_Card = {
    // taskID: string; // タスクID
    taskName: string; // タスク名
    taskCreatetime: string; // タスクの作成時間
    taskProgress: number; // タスクの進捗
    onClick: () => void; // カードがクリックされたときの処理
}
