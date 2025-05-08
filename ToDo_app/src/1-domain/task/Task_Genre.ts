// タスクジャンルのドメインロジックを定義するクラス
export class TaskGenre{
    // タスクのジャンル (例: 仕事, プライベート)
    private task_genre: string;

    // コンストラクタ
    constructor(task_genre: string) {
        this.task_genre = task_genre;
    }

    // ジャンルを取得するメソッド
    get TaskGenre(): string {
        return this.task_genre;
    }

    // ジャンルを設定するメソッド
    set TaskGenre(task_genre: string) {
        this.task_genre = task_genre;
    }
}