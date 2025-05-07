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

// export class TaskFactory {

//     // タスクを生成するファクトリメソッド
//     // タスクの状態を管理するためのプロパティ
//     static createTask(
//         taskID: TaskID,
//         taskName: TaskName,
//         taskContent: TaskContent,
//         taskGenre: TaskGenre,
//         taskProgress: TaskProgress,
//         taskDueDate: TaskDueDate,
//         taskFinishFlag: TaskFinishFlag,
//         taskCreateTime: TaskCreateTime
//     ): Task {   // Taskクラスを返す

//         // タスクの状態を管理するためのプロパティを初期化する
//         return new Task(
//         taskID,
//         taskName,
//         taskContent,
//         taskGenre,
//         taskProgress,
//         taskDueDate,
//         taskFinishFlag,
//         taskCreateTime
//         );
//     }
// }

// タスクを生成するファクトリクラス
// タスクの状態を管理するためのプロパティを初期化する
export class TaskFactory
 {
    // タスクを生成するファクトリメソッド
    static createTaskFromInput(
        name: string,
        content: string | undefined,
        genre: string,
        dueDate: Date
    ): Task {   // Taskクラスを返す
        // 各値オブジェクトを生成
        const taskCreateTime = new TaskCreateTime(new Date());
        const taskID = new TaskID(taskCreateTime.toString()); // タスクIDは作成日時を基に生成 日時を文字に変換
        const taskName = new TaskName(name);
        const taskContent = content ? new TaskContent(content) : undefined;
        const taskGenre = new TaskGenre(genre);
        const taskProgress = new TaskProgress(0); // 初期進捗度は0%
        const taskDueDate = new TaskDueDate(dueDate);
        const taskFinishFlag = new TaskFinishFlag(false); // 初期状態は未完了

        // タスクを生成
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