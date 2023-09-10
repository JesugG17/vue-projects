export interface Todo {
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date | null;
    completed: boolean;
}