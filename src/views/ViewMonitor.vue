<template>
  <div class="container">
    <div class="row row-1">
      <CardMonitoring v-for="list in dataTop" :key="list.loketName" :data="list" />
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import CardMonitoring from '../components/CardMonitoring.vue'

const dataTop = [
  {
    loketName: 'Loket CS',
    category: 'CS',
    items: [
      { id: 1, isLoket: 1, nomorAntrian: '1', type: 'content-1' },
      { id: 2, isLoket: 2, nomorAntrian: '2', type: 'content-2' },
      { id: 3, isLoket: 3, nomorAntrian: '3', type: 'content-2' }
    ]
  },
  {
    loketName: 'Loket Dukcapil',
    category: 'Dukcapil',
    items: [
      { id: 1, isLoket: 3, nomorAntrian: '3', type: 'content-1' },
      { id: 2, isLoket: 2, nomorAntrian: '4', type: 'content-2' },
      { id: 3, isLoket: 1, nomorAntrian: '5', type: 'content-2' }
    ]
  },
  {
    loketName: 'Loket BPR',
    category: 'BPR',
    items: [
      { id: 1, isLoket: 2, nomorAntrian: '7', type: 'content-1' },
      { id: 2, isLoket: 1, nomorAntrian: '8', type: 'content-2' },
      { id: 3, isLoket: 3, nomorAntrian: '9', type: 'content-2' }
    ]
  },
  {
    loketName: 'Loket Pembayaran',
    category: 'Pembayaran',
    items: [
      { id: 1, isLoket: 1, nomorAntrian: '10', type: 'content-1' },
      { id: 2, isLoket: 2, nomorAntrian: '11', type: 'content-2' },
      { id: 3, isLoket: 3, nomorAntrian: '12', type: 'content-2' }
    ]
  },
  {
    loketName: 'Loket Event / Seminar',
    category: 'Event / Seminar',
    items: [
      { id: 1, isLoket: 1, nomorAntrian: '14', type: 'content-1' },
      { id: 2, isLoket: 2, nomorAntrian: '15', type: 'content-2' },
      { id: 3, isLoket: 3, nomorAntrian: '16', type: 'content-2' }
    ]
  }
]
</script>

<style scoped>
.container {
  height: 100vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row-1 {
  display: flex;
  justify-content: center;
  align-content: stretch;
  flex-wrap: wrap;
}
</style>
