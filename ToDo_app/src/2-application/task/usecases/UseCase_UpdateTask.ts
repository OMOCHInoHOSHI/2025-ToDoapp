// 編集ユースケースを定義する

// import { Task } from "../../../1-domain/task/Task";
// import { TaskCreateTime } from "../../../1-domain/task/Task_CreateTime";
import { TaskID } from "../../../1-domain/task/Task_ID";
import { TaskName } from "../../../1-domain/task/Task_Name";
import { TaskContent } from "../../../1-domain/task/Task_Content";
import { TaskGenre } from "../../../1-domain/task/Task_Genre";
import { TaskProgress } from "../../../1-domain/task/Task_Progress";
import { TaskDueDate } from "../../../1-domain/task/Task_DueDate";
// import { TaskFinishFlag } from "../../../1-domain/task/Task_FinishFlag";
import { TaskRepository } from "../../../1-domain/task/Task_Repository";

export class UseCaseUpdateTask {
    private taskRepository: TaskRepository;

    // タスクリポジトリをコンストラクタで受け取る
    // 依存性の注入（DI）を行うことで、テストやモックの作成が容易になる
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    // タスクを更新するメソッド
    public async Use_UpdateTask(input: UpdateTaskInput): Promise<void> {
        const task = await this.taskRepository.FindTaskId(new TaskID(input.taskid));
        if (!task) throw new Error("Task not found");

        // 各値オブジェクトを生成
        task.TaskName = new TaskName(input.name);
        task.TaskContent = input.content ? new TaskContent(input.content) : undefined;
        task.TaskGenre = new TaskGenre(input.genre);
        task.TaskProgress = new TaskProgress(input.progress);
        task.TaskDueDate = new TaskDueDate(input.dueDate);

        // リポジトリにタスクを保存
        await this.taskRepository.UpdateTask(task);
    }
}

// タスク更新のユースケースの入力データ型
export interface UpdateTaskInput {
    taskid: string;
    name: string;
    content?: string | undefined;
    genre: string;
    progress: number;
    dueDate: Date;
}