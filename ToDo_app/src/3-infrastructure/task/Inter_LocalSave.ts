// ローカルストレージに保存するロジック

import { Task } from "../../1-domain/task/Task";
import { TaskID } from "../../1-domain/task/Task_ID";
import { TaskRepository } from "../../1-domain/task/Task_Repository";
import { TaskDto } from "../../2-application/dto/TaskDto";
import { TaskMapper } from "../../2-application/dto/TaskDtoMapper";

export class LocalStorageTaskRepository implements TaskRepository {

    private storageKey: string = "tasks"; // ローカルストレージのキー

    // タスクを保存する
    public async SaveTask(task: Task): Promise<void> {
    const tasks = await this.FindAll();
    tasks.push(task);
    // DTO形式で保存
    localStorage.setItem(this.storageKey, JSON.stringify(tasks.map(t => TaskMapper.toDto(t))));
}

    // タスクを取得する
    public async FindTaskId(taskId: TaskID): Promise<Task | null> {
        const tasks = await this.FindAll(); // すべてのタスクを取得
        const task = tasks.find(t => t.TaskID.TaskID === taskId.TaskID); // タスクIDでフィルタリング
        return task ? task : null; // タスクが見つからなければnullを返す
    }

    // タスクを全て取得する
    // public async FindAll(): Promise<Task[]> {
    //     const tasks = localStorage.getItem(this.storageKey); // ローカルストレージから取得
    //     return tasks ? JSON.parse(tasks) : []; // 取得したタスクをパースして返す
    // }/
    public async FindAll(): Promise<Task[]> {
    const tasks = localStorage.getItem(this.storageKey);
    if (!tasks) return [];
    return (JSON.parse(tasks) as TaskDto[]).map((taskData) => Task.fromJSON(taskData));
}

    // タスクを更新する
    public async UpdateTask(task: Task): Promise<void> {
        const tasks = await this.FindAll(); // すべてのタスクを取得
        const updatedTasks = tasks.map(t => t.TaskID.TaskID === task.TaskID.TaskID ? task : t); // タスクIDでフィルタリングして更新
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks)); // ローカルストレージに保存
    }


    // タスクを削除する
    public async DeleteTask(taskId: TaskID): Promise<void> {
        const tasks = await this.FindAll(); // すべてのタスクを取得
        const updatedTasks = tasks.filter(task => task.TaskID.TaskID !== taskId.TaskID); // タスクIDでフィルタリング
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks)); // ローカルストレージに保存
    }
}
