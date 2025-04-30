export class TaskContent {
    // タスクの内容
    private task_content: string;

    // コンストラクタ
    constructor(task_content: string) {
        this.task_content = task_content;
    }

    // タスクの内容を取得するメソッド
    public getTaskContent(): string {
        return this.task_content;
    }
}