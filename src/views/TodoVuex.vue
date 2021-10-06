<template>
  <h1>Lista de tareas de Thanos.</h1>
  <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
  <h4>Pendientes:  {{ pending.length }} </h4>

  <hr>
  <button
    :class="{ 'active': currentTab === 'all' }"
    @click="currentTab = 'all'"
  >Todos</button>
  <button
    :class="{ 'active': currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >Pendientes</button>
  <button
    :class="{ 'active': currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >Completados</button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id"
        :class="{ 'completed': todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <modal
    v-if="isOpen"
    title="Hola mundo"
    @on:close="closeModal"
  >
    <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <button>Salir</button>
    <h2>Título del modal.</h2> -->
    <template v-slot:header>
      <h2>Nueva tarea</h2>
      <hr>
    </template>
    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText); isOpen = false">
        <input v-model="newTodoText" type="text">
        <br>
        <br>
        <button type="submit">Crear</button>
      </form>
    </template>
  </modal>

  <!-- Modal -->
  <!-- 
    Formulario
    submit.prevent
    input
    createTodo( text )
   -->

</template>

<script>
import Modal from '@/components/Modal'
import useTodos from '@/composables/useTodos'

export default {

  components: { Modal },
  setup() {

    const { currentTab, getTodosByTab, pending, toggleTodo, openModal, isOpen, closeModal, createTodo } = useTodos()

    return {
      currentTab,
      getTodosByTab,
      pending,
      toggleTodo,
      openModal,
      isOpen,
      closeModal,
      createTodo,
    }

  }

}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>