import { reactive } from "vue";

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
    addTask: (desc: string) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
}

export const useTaskStore = reactive<State & Actions>({
    tasks: [],
    async addTask(desc: string) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            desc,
            completed: false
        };
        this.tasks.push(newTask);
    },
    async removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    async toggleTask(id: string) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks[index].completed = !this.tasks[index].completed;
    }

});