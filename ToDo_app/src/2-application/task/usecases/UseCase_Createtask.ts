// ユースケースクラス
// タスク作成のユースケースを定義するクラス

import { Task } from "../../../1-domain/task/Task";
import { TaskID } from "../../../1-domain/task/Task_ID";
import { TaskName } from "../../../1-domain/task/Task_Name";
import { TaskContent } from "../../../1-domain/task/Task_Content";
import { TaskGenre } from "../../../1-domain/task/Task_Genre";
import { TaskProgress } from "../../../1-domain/task/Task_Progress";
import { TaskDueDate } from "../../../1-domain/task/Task_DueDate";
import { TaskFinishFlag } from "../../../1-domain/task/Task_FinishFlag";
import { TaskCreateTime } from "../../../1-domain/task/Task_CreateTime";
import { TaskRepository } from "../../../1-domain/task/Task_Repository";
export class UseCaseCreateTask {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public execute(input: CreateTaskInput): Task {
        // 各値オブジェクトを生成
        const taskID = new TaskID(); // IDは自動生成
        const taskName = new TaskName(input.name);
        const taskContent = input.content ? new TaskContent(input.content) : undefined;
        const taskGenre = new TaskGenre(input.genre);
        const taskProgress = new TaskProgress(0); // 初期進捗度は0%
        const taskDueDate = new TaskDueDate(input.dueDate);
        const taskFinishFlag = new TaskFinishFlag(false); // 初期状態は未完了
        const taskCreateTime = new TaskCreateTime(new Date());

        // タスクを生成
        const task = new Task(
            taskID,
            taskName,
            taskContent,
            taskGenre,
            taskProgress,
            taskDueDate,
            taskFinishFlag,
            taskCreateTime
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