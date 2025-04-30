export class TaskID {
    // タスクID
    private task_id: string;

    // コンストラクタ
    constructor(task_id: string) {
        this.task_id = task_id;
    }

    // タスクIDを取得するメソッド
    public getTaskID(): string {
        return this.task_id;
    }

    // タスクIDを設定するメソッド
    public setTaskID(task_id: string): void {
        this.task_id = task_id;
    }
}