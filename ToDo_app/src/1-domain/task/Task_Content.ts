// タスクIDクラス
export class TaskContent {
    // タスクの内容
    private task_content: string;

    // コンストラクタ
    constructor(task_content: string) {
        this.task_content = task_content;
    }

    // タスクの内容を取得するメソッド
    get TaskContent(): string {
        return this.task_content;
    }

    // タスクの内容を設定するメソッド
    set TaskContent(task_content: string) {
        this.task_content = task_content;
    }
}