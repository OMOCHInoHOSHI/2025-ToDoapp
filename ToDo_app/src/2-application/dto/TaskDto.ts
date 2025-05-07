// プレゼンテーション層から渡されるデータを受け取るオブジェクト
// 受け取ったデータをもとに、ドメイン層のエンティティを生成するためのデータを持つ

// データ転送オブジェクト（DTO）
export interface TaskDto {
    taskCreateTime: string; // YYYY-MM-DDTHH:mm:ss.sssZ形式の文字列 // タスク作成時間
    taskID: string; // タスクID
    taskName: string;   // タスク名
    taskContent: string | undefined; // undefined許容
    taskGenre: string;  // タスクジャンル
    taskProgress: number; // 0-100の範囲    // タスク進捗度
    taskDueDate: string; // YYYY-MM-DD形式の文字列  // タスクの期限
    taskFinishFlag: boolean; // 完了フラグ
}