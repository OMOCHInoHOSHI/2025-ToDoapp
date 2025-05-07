// タスク関連のインポートをまとめるためにファイル作成
// タスクエンティティを生成するファクトリクラス

import { Task } from "./Task";
import { TaskCreateTime } from "./Task_CreateTime";
import { TaskID } from "./Task_ID";
import { TaskName } from "./Task_Name";
import { TaskContent } from "./Task_Content";
import { TaskGenre } from "./Task_Genre";
import { TaskProgress } from "./Task_Progress";
import { TaskDueDate } from "./Task_DueDate";
import { TaskFinishFlag } from "./Task_FinishFlag";

export class TaskFactory {

    // タスクを生成するファクトリメソッド
    // タスクの状態を管理するためのプロパティ
    static createTask(
        taskID: TaskID,
        taskName: TaskName,
        taskContent: TaskContent,
        taskGenre: TaskGenre,
        taskProgress: TaskProgress,
        taskDueDate: TaskDueDate,
        taskFinishFlag: TaskFinishFlag,
        taskCreateTime: TaskCreateTime
    ): Task {   // Taskクラスを返す

        // タスクの状態を管理するためのプロパティを初期化する
        return new Task(
        taskID,
        taskName,
        taskContent,
        taskGenre,
        taskProgress,
        taskDueDate,
        taskFinishFlag,
        taskCreateTime
        );
    }
}