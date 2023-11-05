import { reactive } from "vue";
import { api } from "../service/api";
import { ApiResponse } from "../types/api-response.interface";

export interface Task {
    // id: `${string}-${string}-${string}-${string}-${string}`;
    id: string;
    desc: string;
    completed: boolean;
}

type State = {
    tasks: Task[];
}

type Actions = {
    getAllTask: () => Promise<void>;
    addTask: (desc: string) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
}

export const useTaskStore = reactive<State & Actions>({
    tasks: [],
    async getAllTask() {
        const { data } = await api.get<ApiResponse>('/all');

        this.tasks = data.data as Task[];
    },
    async addTask(description: string) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            desc: description,
            completed: false
        };

        await api.post('/create', {
            id: newTask.id,
            description
        })

        this.tasks.push(newTask);
    },
    async removeTask(id: string) {
        await api.delete(`/delete/${id}`);
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    async toggleTask(id: string) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks[index].completed = !this.tasks[index].completed;
        await api.put(`/update/${id}`, {
            completed: this.tasks[index].completed 
        })
    }

});