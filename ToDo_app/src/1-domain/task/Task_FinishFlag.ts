// タスク完了ステータス

export class TaskFinishFlag {
    private _isFinished: boolean;

    // タスク完了フラグ (例: true - false)
    constructor(isFinished: boolean) {
        this._isFinished = isFinished;
    }

    // タスク完了フラグを取得するメソッド
    // getterメソッド
    get TaskFinishFlag(): boolean {
        return this._isFinished;
    }

    // タスク完了フラグを設定するメソッド
    // setterメソッド
    set TaskFinishFlag(newIsFinished: boolean) {
        this._isFinished = newIsFinished;
    }
}