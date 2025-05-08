// TaskDtoとの変換を行う
// ドメイン層（Taskエンティティ）とDTO層（TaskDto）の相互変換を担うマッパー
// プレゼンテーション層とドメイン層の依存を切り離し、カプセル化を維持するために使用

import { Task } from "../../1-domain/task/Task";
import { TaskCreateTime } from "../../1-domain/task/Task_CreateTime";
import { TaskID } from "../../1-domain/task/Task_ID";
import { TaskName } from "../../1-domain/task/Task_Name";
import { TaskContent } from "../../1-domain/task/Task_Content";
import { TaskGenre } from "../../1-domain/task/Task_Genre";
import { TaskProgress } from "../../1-domain/task/Task_Progress";
import { TaskDueDate } from "../../1-domain/task/Task_DueDate";
import { TaskFinishFlag } from "../../1-domain/task/Task_FinishFlag";
import { TaskDto } from "./TaskDto";

// ドメインエンティティ Task <-> DTO TaskDto の変換
export const TaskMapper = {
    toDto(task: Task): TaskDto {
        // TaskDtoに変換する
        return {
            taskCreateTime: task.TaskCreateTime.TaskCreateTime.toISOString(),
            taskID: task.TaskID.TaskID,
            taskName: task.TaskName.TaskName,
            taskContent: task.TaskContent?.TaskContent,
            taskGenre: task.TaskGenre.TaskGenre,
            taskProgress: task.TaskProgress.TaskProgress,
            taskDueDate: task.TaskDueDate.TaskDueDate.toISOString(),
            taskFinishFlag: task.TaskFinishFlag.TaskFinishFlag
        };
    },

    // DTO TaskDto から ドメインエンティティ Task に変換する
    fromDto(dto: TaskDto): Task {
        return new Task(
            new TaskCreateTime(new Date(dto.taskCreateTime)),
            new TaskID(dto.taskID),
            new TaskName(dto.taskName),
            dto.taskContent ? new TaskContent(dto.taskContent) : undefined,
            new TaskGenre(dto.taskGenre),
            new TaskProgress(dto.taskProgress),
            new TaskDueDate(new Date(dto.taskDueDate)),
            new TaskFinishFlag(dto.taskFinishFlag),
        );
    }
};
