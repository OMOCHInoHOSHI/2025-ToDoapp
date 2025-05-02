// プレゼンテーション層から渡されるデータを受け取るオブジェクト
// 受け取ったデータをもとに、ドメイン層のエンティティを生成するためのデータを持つ

// データ転送オブジェクト（DTO）
export interface TaskDto {
    taskID: string;
    taskName: string;
    taskContent: string | undefined; // undefined許容
    taskGenre: string;
    taskProgress: number; // 0-100の範囲
    taskDueDate: string; // YYYY-MM-DD形式の文字列
    taskFinishFlag: boolean; // 完了フラグ
    taskCreateTime: string; // YYYY-MM-DDTHH:mm:ss.sssZ形式の文字列
}