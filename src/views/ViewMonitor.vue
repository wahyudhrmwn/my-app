<template>
  <div class="container">
    <div class="row row-1">
        <CardMonitoring v-for="list in listLoket1" :key="list.id" :loket="list" />
    </div>

    <div class="row row-2">
      <CardMonitoring v-for="list in listLoket2" :key="list.id" :loket="list" />
    </div>
  </div>
</template>

<script setup>
import CardMonitoring from "../components/CardMonitoring.vue";

const listLoket1 = [
  {
    id: 1,
    loket: 'Loket CS'
  },
  {
    id: 2,
    loket: 'Loket Dukcapil'
  },
  {
    id: 3,
    loket: 'Loket Pembayaran'
  }
]

const listLoket2 = [
  {
    id: 4,
    loket: 'Loket BPR'
  },
  {
    id: 5,
    loket: 'Loket Event / Seminar'
  }
]
</script>

<style scoped>
.container {
  height: 100vh;
  margin: auto;
}

.row-1 {
  height: 50%;
  display: flex;
  justify-content: center;
}

.row-2 {
  height: 50%;
  display: flex;
  justify-content: center;
}

</style>
