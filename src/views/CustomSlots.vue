<template>
  <h1>Aprendiendo Slots</h1>
  <button>Abrir modal</button>

  <modal title="Hola mundo">
    <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    <button>Salir</button>
    <h2>Título del modal.</h2> -->
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button>Salir</button>
    </template>
    <template v-slot:header>
      <h2>Título del modal</h2>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {

    components: { Modal },
    setup() {

    }

}
</script>

<style scoped>

</style>