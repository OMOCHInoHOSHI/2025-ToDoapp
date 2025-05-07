// ローカルストレージに保存するロジック

import { Task } from "../../1-domain/task/Task";
import { TaskID } from "../../1-domain/task/Task_ID";
import { TaskRepository } from "../../1-domain/task/Task_Repository";

export class LocalStorageTaskRepository implements TaskRepository {

    private storageKey: string = "tasks"; // ローカルストレージのキー

    // タスクを保存する
    public async SaveTask(task: Task): Promise<void> {
        const tasks = await this.FindAll(); // 既存のタスクを取得
        tasks.push(task); // 新しいタスクを追加
        localStorage.setItem(this.storageKey, JSON.stringify(tasks)); // ローカルストレージに保存
    }

    // タスクを取得する
    public async FindTaskId(taskId: TaskID): Promise<Task | null> {
        const tasks = await this.FindAll(); // すべてのタスクを取得
        return tasks.find(task => task === taskId.TaskID) || null; // タスクIDでフィルタリング
    }

    // タスクを全て取得する
    public async FindAll(): Promise<Task[]> {
        const tasks = localStorage.getItem(this.storageKey); // ローカルストレージから取得
        return tasks ? JSON.parse(tasks) : []; // 取得したタスクをパースして返す
    }
    
    // タスクを更新する
    public UpdateTask(task: Task): void {
        const tasks = this.FindAll(); // すべてのタスクを取得
        const index = tasks.findIndex(t => t.TaskID.TaskID === task.TaskID.TaskID); // 更新するタスクのインデックスを取得
        if (index !== -1) {
            tasks[index] = task; // タスクを更新
            localStorage.setItem(this.storageKey, JSON.stringify(tasks)); // ローカルストレージに保存
        }
    }
    
    // タスクを削除する
    public async DeleteTask(taskId: TaskID): Promise<void> {
        const tasks = await this.FindAll(); // すべてのタスクを取得
        const updatedTasks = tasks.filter(task => task.TaskID.TaskID !== taskId.TaskID); // タスクIDでフィルタリング
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks)); // ローカルストレージに保存
    }
}
