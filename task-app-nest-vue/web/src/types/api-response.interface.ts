import { Task } from "../store/task.store";

export interface ApiResponse {
    data: Task[] | null;
    message: string;
    code: number
}