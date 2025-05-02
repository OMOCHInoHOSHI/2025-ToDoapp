// タスクの期日のビジネス
export class TaskDueDate {

    // 期日
    private task_dueDate: Date;

    // コンストラクタ
    constructor(task_dueDate: Date) {
        this.task_dueDate = task_dueDate;
    }

    // 期日を取得するメソッド
    get TaskDueDate(): Date {
        return this.task_dueDate;
    }

    // 期日を設定するメソッド
    set TaskDueDate(task_dueDate: Date) {
        this.task_dueDate = task_dueDate;
    }
}