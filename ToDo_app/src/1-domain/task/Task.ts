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
import { TaskDto } from "../../2-application/dto/TaskDto";

export class Task {

    // タスクの状態を管理するためのプロパティ
    private _taskCreateTime: TaskCreateTime;    // タスク作成時間
    private _taskID: TaskID;        // タスクID
    private _taskName: TaskName;    // タスク名
    private _taskContent: TaskContent | undefined; // タスク内容 (undefined許容)
    private _taskGenre: TaskGenre;  // タスクジャンル
    private _taskProgress: TaskProgress;    // タスク進捗度
    private _taskDueDate: TaskDueDate;  // タスクの期限
    private _taskFinishFlag: TaskFinishFlag;    // タスク完了フラグ

    // コンストラクタ
    constructor(
        taskCreateTime: TaskCreateTime,
        taskID: TaskID,
        taskName: TaskName,
        taskContent: TaskContent | undefined,
        taskGenre: TaskGenre,
        taskProgress: TaskProgress,
        taskDueDate: TaskDueDate,
        taskFinishFlag: TaskFinishFlag,
    ) {
        this._taskCreateTime = taskCreateTime;
        this._taskID = taskID;
        this._taskName = taskName;
        this._taskContent = taskContent;
        this._taskGenre = taskGenre;
        this._taskProgress = taskProgress;
        this._taskDueDate = taskDueDate;
        this._taskFinishFlag = taskFinishFlag;
    }

    // ゲッターS---------------------------------------------------------
    // ここにもgetterを使うことで、プロパティにアクセスする際にメソッドを呼び出すような形になる
    // カプセル化のため
    public get TaskID(): TaskID {
        return this._taskID;
    }

    public get TaskCreateTime(): TaskCreateTime {
        return this._taskCreateTime;
    }

    public get TaskName(): TaskName {
        return this._taskName;
    }

    public get TaskContent(): TaskContent | undefined {
        return this._taskContent;
    }

    public get TaskGenre(): TaskGenre {
        return this._taskGenre;
    }

    public get TaskProgress(): TaskProgress {
        return this._taskProgress;
    }

    public get TaskDueDate(): TaskDueDate {
        return this._taskDueDate;
    }

    public get TaskFinishFlag(): TaskFinishFlag {
        return this._taskFinishFlag;
    }
    // ゲッターE---------------------------------------------------------


    // jsonからTaskを生成するファクトリメソッド
    static fromJSON(json: TaskDto): Task {
        return new Task(
            new TaskCreateTime(new Date(json.taskCreateTime)),
            new TaskID(json.taskID),
            new TaskName(json.taskName),
            json.taskContent ? new TaskContent(json.taskContent) : undefined,
            new TaskGenre(json.taskGenre),
            new TaskProgress(json.taskProgress),
            new TaskDueDate(new Date(json.taskDueDate)),
            new TaskFinishFlag(json.taskFinishFlag)
        );
    }

    // タスク進捗度が100%の時、完了ステータスを完了にする
    // ビジネスルール
    public updateProgress(newProgress: TaskProgress): void {
        this._taskProgress = newProgress;

        // 進捗度が100%なら完了フラグを true にする
        if (newProgress.TaskProgress === 100) {
            this._taskFinishFlag = new TaskFinishFlag(true);
        }
    }
}
