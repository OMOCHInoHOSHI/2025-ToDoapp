// ToDoアプリケーションのタスクに関するカスタムフック
// タスクの取得、作成、削除を行うためのフック

import { useState, useEffect } from "react";
import { TaskDto } from "../../2-application/dto/TaskDto";
import { TaskMapper } from "../../2-application/dto/TaskDtoMapper";
import { LocalStorageTaskRepository } from "../../3-infrastructure/task/Inter_LocalSave";
import { UseCaseCreateTask } from "../../2-application/task/usecases/UseCase_Createtask";
import { UseCaseDeleteTask } from "../../2-application/task/usecases/UseCase_DeleteTask";
import { UseCaseUpdateTask } from "../../2-application/task/usecases/UseCase_UpdateTask";

// タスクの取得、作成、削除を行うためのカスタムフック
export const useTask = () => {
    const [tasks, setTasks] = useState<TaskDto[]>([]);
    const taskRepository = new LocalStorageTaskRepository();

    // タスクを取得する 
    const fetchTasks = async () => {
        const allTasks = await taskRepository.FindAll();
        const taskDtos = allTasks.map(task => TaskMapper.toDto(task));
        setTasks(taskDtos);
    };

    // タスク作成の呼び出し
    const createTask = async (input: { name: string; content?: string; genre: string; progress: number; dueDate: Date }) => {
        const useCase = new UseCaseCreateTask(taskRepository);
        await useCase.Use_CreateTask(input);
    };

    // タスク削除の呼び出し
    const deleteTask = async (taskId: string) => {
        const useCase = new UseCaseDeleteTask(taskRepository); // 削除用のユースケースを使用
        await useCase.Use_DeleteTask({ taskId });
        await fetchTasks(); // タスクを再取得して更新
    };

    // タスク更新(編集)の呼び出し
    const updateTask = async (input: { taskId: string; name: string; content?: string; genre: string; progress: number; dueDate: Date }) => {
        const useCase = new UseCaseUpdateTask(taskRepository); // 更新も同じユースケースを使用
        await useCase.Use_UpdateTask({
            taskid: input.taskId,
            name: input.name,
            content: input.content,
            genre: input.genre,
            progress: input.progress,
            dueDate: input.dueDate
        });
        await fetchTasks(); // タスクを再取得して更新
    }


    // 初回レンダリング時にタスクを取得
    useEffect(() => {
        fetchTasks();
    }, []);

    // タスクの取得、作成、削除を行う関数を返す
    // これにより、コンポーネントから簡単にタスクを操作できるようになる
    // 例えば、コンポーネント内で useTask().createTask({ name: "New Task", genre: "Work", dueDate: new Date() }) のように使用できる
    return {
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
        updateTask
    };
};
