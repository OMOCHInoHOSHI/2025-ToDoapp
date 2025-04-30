// タスクジャンルのドメインロジックを定義するクラス
export class TaskGenre{
    // タスクのジャンル (例: 仕事, プライベート)
    private task_genre: string;

    // コンストラクタ
    constructor(task_genre: string) {
        this.task_genre = task_genre;
    }

    // ジャンルを取得するメソッド
    public getGenre(): string {
        return this.task_genre;
    }

    // ジャンルを設定するメソッド
    public setGenre(task_genre: string): void {
        this.task_genre = task_genre;
    }
}