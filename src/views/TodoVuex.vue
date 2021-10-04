<template>
  <h1>Lista de tareas de Thanos.</h1>
  <!-- <h4>Pendientes: {{ $store.state.todos.filter( t => !t.completed ).length }}</h4> -->
  <h4>Pendientes:  {{ pending.length }} </h4>

  <hr>

  <h4>Todos:  {{ all.length }} </h4>
  <h4>Completados:  {{ completed.length }} </h4>

</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

  setup() {

    const store = useStore()

    //NOTE
    /* Se tiende a crear la propiedad computada directo en el return si solamente se utilizará en el template.
    Se genera en el setup si la necesitamos manipular para otra función, atributo o propiedad. */

    return {
      pending: computed( () => store.getters['pendingTodos'] ),
      all: computed( () => store.getters['allTodos'] ),
      completed: computed( () => store.getters['completedTodos'] ),
    }

  }

}
</script>

<style>

</style>