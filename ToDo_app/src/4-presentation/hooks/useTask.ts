import { useState, useEffect } from "react";
import { TaskDto } from "../../2-application/dto/TaskDto";
import { TaskMapper } from "../../2-application/dto/TaskDtoMapper";
import { LocalStorageTaskRepository } from "../../3-infrastructure/task/Inter_LocalSave";
import { UseCaseCreateTask } from "../../2-application/task/usecases/UseCase_Createtask";

export const useTask = () => {
    const [tasks, setTasks] = useState<TaskDto[]>([]);
    const taskRepository = new LocalStorageTaskRepository();

    // タスクを取得する
    const fetchTasks = async () => {
        const allTasks = await taskRepository.FindAll();
        const taskDtos = allTasks.map(task => TaskMapper.toDto(task));
        setTasks(taskDtos);
    };

    // タスクを作成する
    const createTask = async (input: { name: string; content?: string; genre: string; dueDate: Date }) => {
        const useCase = new UseCaseCreateTask(taskRepository);
        await useCase.execute(input);
        await fetchTasks(); // タスクを再取得して更新
    };

    // タスクを削除する
    const deleteTask = async (taskId: string) => {
        await taskRepository.DeleteTask({ TaskID: taskId });
        await fetchTasks(); // タスクを再取得して更新
    };

    // 初回レンダリング時にタスクを取得
    useEffect(() => {
        fetchTasks();
    }, []);

    return {
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
    };
};
