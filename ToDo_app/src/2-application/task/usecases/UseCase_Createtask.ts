// ユースケースクラス
// タスク作成のユースケースを定義するクラス

import { Task } from "../../../1-domain/task/Task";
import { TaskCreateTime } from "../../../1-domain/task/Task_CreateTime";
import { TaskID } from "../../../1-domain/task/Task_ID";
import { TaskName } from "../../../1-domain/task/Task_Name";
import { TaskContent } from "../../../1-domain/task/Task_Content";
import { TaskGenre } from "../../../1-domain/task/Task_Genre";
import { TaskProgress } from "../../../1-domain/task/Task_Progress";
import { TaskDueDate } from "../../../1-domain/task/Task_DueDate";
import { TaskFinishFlag } from "../../../1-domain/task/Task_FinishFlag";
import { TaskRepository } from "../../../1-domain/task/Task_Repository";
export class UseCaseCreateTask {
    private taskRepository: TaskRepository;

    // タスクリポジトリをコンストラクタで受け取る
    // 依存性の注入（DI）を行うことで、テストやモックの作成が容易になる
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    // タスクを作成するメソッド
    // input:CreateTaskInput タスク作成に必要な情報を持つオブジェクト
    // 戻り値:Task 作成されたタスクオブジェクト
    public Use_CreateTask(input: CreateTaskInput): Task {
        // 各値オブジェクトを生成
        // setterを使用して値オブジェクトを生成
        const taskCreateTime = new TaskCreateTime(new Date());
        const taskID = new TaskID(taskCreateTime.TaskCreateTime.toString()); // タスクIDは作成日時を基に生成 日時を文字に変換
        const taskName = new TaskName(input.name);
        const taskContent = input.content ? new TaskContent(input.content) : undefined;
        const taskGenre = new TaskGenre(input.genre);
        const taskProgress = new TaskProgress(0); // 初期進捗度は0%
        const taskDueDate = new TaskDueDate(input.dueDate);
        const taskFinishFlag = new TaskFinishFlag(false); // 初期状態は未完了

        // タスクを生成
        const task = new Task(
            taskCreateTime,
            taskID,
            taskName,
            taskContent,
            taskGenre,
            taskProgress,
            taskDueDate,
            taskFinishFlag,
        );

        // リポジトリにタスクを保存
        this.taskRepository.SaveTask(task);

        return task;
    }
}

// ユースケースの入力データ型
export interface CreateTaskInput {
    name: string;
    content?: string;
    genre: string;
    dueDate: Date;
}