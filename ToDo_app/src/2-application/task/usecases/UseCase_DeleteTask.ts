// 削除ユースケース
// タスク削除のユースケースを定義する

// import { Task } from "../../../1-domain/task/Task";
// import { TaskCreateTime } from "../../../1-domain/task/Task_CreateTime";
import { TaskID } from "../../../1-domain/task/Task_ID";
// import { TaskName } from "../../../1-domain/task/Task_Name";
// import { TaskContent } from "../../../1-domain/task/Task_Content";
// import { TaskGenre } from "../../../1-domain/task/Task_Genre";
// import { TaskProgress } from "../../../1-domain/task/Task_Progress";
// import { TaskDueDate } from "../../../1-domain/task/Task_DueDate";
// import { TaskFinishFlag } from "../../../1-domain/task/Task_FinishFlag";
import { TaskRepository } from "../../../1-domain/task/Task_Repository";


export class UseCaseDeleteTask {

    private taskRepository: TaskRepository;

    // タスクリポジトリをコンストラクタで受け取る
    // 依存性の注入（DI）を行うことで、テストやモックの作成が容易になる
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    // タスクを削除するメソッド
    public async Use_DeleteTask(input: DeleteTaskInput): Promise<void> {
        await this.taskRepository.DeleteTask(new TaskID(input.taskId));
    }
}

// タスク削除のユースケースの入力データ型
export interface DeleteTaskInput {
    taskId: string;
}