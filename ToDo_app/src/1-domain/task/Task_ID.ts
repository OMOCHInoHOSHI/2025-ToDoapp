// タスクIDクラス
export class TaskID {
    // タスクID
    private task_id: string;

    // コンストラクタ
    constructor(task_id: string) {
        this.task_id = task_id;
    }

    // タスクIDを取得するメソッド
    get TaskID(): string {
        return this.task_id;
    }

    // タスクIDを設定するメソッド
    set TaskID(task_id: string) {
        this.task_id = task_id;
    }
}