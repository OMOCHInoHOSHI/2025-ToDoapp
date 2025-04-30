// ドメインモデルを定義する

// タスクのドメインモデルを定義
export class Task {
    // 作成日時
    private task_createdAt: Date;
    
    // タスクID
    private task_id: string;

    // タスクのタイトル
    private task_title: string;

    // タスクのの内容
    private task_content: string;

    // タスクのジャンル (例: 仕事, プライベート)進捗度
    private task_genre: string;

    // タスクの進捗度 (例: 0% - 100%)
    private task_progress: number;

    // 期限日時
    private task_dueDate?: Date;

    // タスク完了ステータス
    private task_isCompleted: boolean;

    // コンストラクタ
    constructor(
        task_id: string,
        task_title: string,
        task_content: string,
        task_genre: string,
        task_progress: number,
        task_createdAt: Date,
        task_dueDate?: Date,
        task_isCompleted: boolean = false
    ){
        // バリデーション
        if (task_progress < 0 || task_progress > 100) {
            throw new Error("タスクの進捗度は0から100の間で指定してください。");
        }
        this.task_id = task_id;
        this.task_title = task_title;
        this.task_content = task_content;
        this.task_genre = task_genre;
        this.task_progress = task_progress;
        this.task_createdAt = task_createdAt;
        this.task_dueDate = task_dueDate;
        this.task_isCompleted = task_isCompleted;
    }

}