export class TaskProgress {
    // タスクの進捗度 (例: 0% - 100%)
    private task_progress: number;

    // コンストラクタ
    constructor(task_progress: number) {
        if (task_progress < 0 || task_progress > 100) {
            throw new Error("タスクの進捗度は0から100の間で指定してください。");
        }
        this.task_progress = task_progress;
    }

    // 進捗度を取得するメソッド
    public getProgress(): number {
        return this.task_progress;
    }

    // 進捗度を設定するメソッド
    public setProgress(task_progress: number): void {
        // バリデーション
        // 進捗度は0から100の間で指定する
        if (task_progress < 0 || task_progress > 100) {
            throw new Error("タスクの進捗度は0から100の間で指定してください。");
        }
        this.task_progress = task_progress;
    }
}