export class TaskName{
    // タスクのタイトル
    private task_title: string;

    // コンストラクタ
    constructor(task_title: string) {
        this.task_title = task_title;
    }

    // タスクのタイトルを取得するメソッド
    public getTaskName(): string {
        return this.task_title;
    }
}