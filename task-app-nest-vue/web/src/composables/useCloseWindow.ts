import { onMounted, onUnmounted, ref } from 'vue';

export const useCloseWindow = () => {

    const isAddingTask = ref(false);

    const closeAddTaskView = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            isAddingTask.value = false;
        }
    }

    onMounted(() => {
        window.addEventListener('keyup', closeAddTaskView);
    });
    
    onUnmounted(() => {
        window.removeEventListener('keyup', closeAddTaskView);
    });    

    return isAddingTask;
}