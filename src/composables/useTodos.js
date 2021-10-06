import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

    const store = useStore()

    const currentTab = ref('all')

    const isOpen = ref(false)

    const newTodoText = ref('')

    return {
        currentTab,
        isOpen,
        newTodoText,

        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
  
        all: computed( () => store.getters['allTodos'] ),
        completed: computed( () => store.getters['completedTodos'] ),
        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value) ),
        pending: computed( () => store.getters['pendingTodos'] ),
  
        toggleTodo: ( id ) => store.commit('toggleTodo', id),
        createTodo: ( text ) => store.commit('createTodo', text),
    }

}

export default useTodos