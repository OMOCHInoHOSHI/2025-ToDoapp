// タスクIDクラス
export class TaskName{
    // タスクのタイトル
    private task_title: string;

    // コンストラクタ
    constructor(task_title: string) {
        this.task_title = task_title;
    }

    // タスクのタイトルを取得するメソッド
    get TaskName(): string {
        return this.task_title;
    }

    // タスクのタイトルを設定するメソッド
    set TaskName(task_title: string) {
        this.task_title = task_title;
    }
}