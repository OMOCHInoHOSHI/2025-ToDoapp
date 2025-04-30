// タスク集約
// タスクの状態を管理する

import { TaskCreateTime } from "./Task_CreateTime";
import { TaskID } from "./Task_ID";
import { TaskName } from "./Task_Name";
import { TaskContent } from "./Task_Content";
import { TaskGenre } from "./Task_Genre";
import { TaskProgress } from "./Task_Progress";
import { TaskDueDate } from "./Task_DueDate";
import { TaskFinishFlag } from "./Task_FinishFlag";

export class Task {

    // タスクの状態を管理するためのプロパティ
    private _taskID: TaskID;        // タスクID
    private _taskName: TaskName;    // タスク名
    private _taskContent: TaskContent;// タスク内容
    private _taskGenre: TaskGenre;  // タスクジャンル
    private _taskProgress: TaskProgress;    // タスク進捗度
    private _taskDueDate: TaskDueDate;  // タスクの期限
    private _taskFinishFlag: TaskFinishFlag;    // タスク完了フラグ
    private _taskCreateTime: TaskCreateTime;    // タスク作成時間

    // コンストラクタ
    constructor(
        taskID: TaskID,
        taskName: TaskName,
        taskContent: TaskContent,
        taskGenre: TaskGenre,
        taskProgress: TaskProgress,
        taskDueDate: TaskDueDate,
        taskFinishFlag: TaskFinishFlag,
        taskCreateTime: TaskCreateTime
    ) {
        this._taskID = taskID;
        this._taskName = taskName;
        this._taskContent = taskContent;
        this._taskGenre = taskGenre;
        this._taskProgress = taskProgress;
        this._taskDueDate = taskDueDate;
        this._taskFinishFlag = taskFinishFlag;
        this._taskCreateTime = taskCreateTime;
    }
}