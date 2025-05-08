// タスクの進捗度を管理
// タスク進捗度のビジネスルール(ドメインロジック)を実装するクラス
export class TaskProgress {
    private _progress: number;

    // タスク進捗度 (例: 0% - 100%)
    constructor(progress: number) {
        this.assertValidProgress(progress);
        this._progress = progress;
    }

    // タスク進捗度を取得するメソッド
    // getterメソッド
     get TaskProgress(): number {
        return this._progress;
    }

    // タスク進捗度を設定するメソッド
    // setterメソッド
    set TaskProgress(newProgress: number) {
        this.assertValidProgress(newProgress);
        this._progress = newProgress;
    }

    // タスク進捗度のバリデーションを
    private assertValidProgress(progress: number): void {
        if (progress < 0 || progress > 100) {
        throw new Error("タスクの進捗度は0から100の間で指定してください。");
    }
  }
}