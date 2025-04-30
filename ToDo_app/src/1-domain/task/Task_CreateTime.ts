// タスク作成時クラス

export class TaskCreateTime {
    // 作成日時
    private task_createdAt: Date;

    // コンストラクタ
    constructor(task_createdAt: Date) {
        this.task_createdAt = task_createdAt;
    }

    // 作成日時を取得するメソッド
    public getTaskCreateTime(): Date {
        return this.task_createdAt;
    }
}