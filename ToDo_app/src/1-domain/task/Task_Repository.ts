// タスクリポジトリのインターフェース
// 定義だけ

import { Task } from "./Task";
import { TaskID } from "./Task_ID";

export interface TaskRepository {

    // promiseは非同期処理を表すオブジェクト
    // async/awaitを使うことで、非同期処理を同期的に書くことができる

    // タスクを保存する
    SaveTask(task: Task): Promise<void>;

    // タスクを取得する
    FindTaskId(taskId: TaskID): Promise<Task | null>;

    // タスクを全て取得する
    FindAll(): Promise<Task[]>;

    // タスクを削除する
    DeleteTask(taskId: TaskID): Promise<void>;
}