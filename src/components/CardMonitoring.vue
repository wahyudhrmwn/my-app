<template>
  <div class="col">
    <div class="row row-monitor">
      <div class="col col-monitor">
        <div class="header-content">
          <div class="title-loket">{{ data.loketName }}</div>
        </div>
      </div>
    </div>

    <div v-if="data.items.find(item => item.type === 'content-1')" class="container__content-1">
      <div class="row content-1">
      <div class="col col-content-1">
        <div class="text-content">
          <div class="text-nomor">No Antrian</div>
          <div class="text-angka">{{ data.items.find(item => item.type === 'content-1').nomorAntrian }}</div>
          <div class="text-loket">ke Loket {{ data.items.find(item => item.type === 'content-1').isLoket }}</div>
        </div>
      </div>
    </div>
    </div>
    
    
    <div v-if="data.items.find(item => item.type === 'content-2')" class="container__content-2">
      <div class="row content-2">
      <div class="col col-content-2" v-for="item in data.items.filter(item => item.type === 'content-2')" :key="item.id">
        <div class="text-content">
          <div class="text-nomor">No Antrian</div>
          <div class="text-angka">{{ item.nomorAntrian }}</div>
          <div class="text-loket">ke Loket {{ item.isLoket }}</div>
        </div>
      </div>
      <!-- <div class="col col-content-2" >
        <div class="text-content">
          <div class="text-nomor">No Antrian</div>
          <div class="text-angka">{{ 12 }}</div>
          <div class="text-loket">ke Loket {{ 3 }}</div>
        </div>
      </div> -->
    </div>
    </div>
    

    <!-- <div v-if="data.type === 'content-1'" class="row content-1">
      <div v-for="item in data.items" :key="item.id" class="col col-content-1">
        <div class="text-content">
          <div class="text-nomor">No Antrian</div>
          <div class="text-angka">{{ item.nomorAntrian }}</div>
          <div class="text-loket">ke Loket {{ item.isLoket }}</div>
        </div>
      </div>
    </div> -->
    <!-- <div v-else-if="data.type === 'content-2'" class="row content-2">
      <div v-for="item in data.items" :key="item.id" class="col col-content-2">
        <div class="text-content">
          <div class="text-nomor">No Antrian</div>
          <div class="text-angka">{{ item.nomorAntrian }}</div>
          <div class="text-loket">ke Loket {{ item.isLoket }}</div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: Object
})

</script>

<style scoped>
.col {
  background-color: #2a2f4f;
  margin: 5px;
  height: 200px;
  width: 30%;
  height: auto;
  padding: 5px;
  border-radius: 15px;
}

.row-monitor {
  display: flex;
  width: 100%;
  height: 20%;
}

.col-monitor {
  background-color: #0d42ff;
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.header-content {
  text-align: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.content-1 {
  display: flex;
  width: 100%;
  height: 40%;
}

.col-content-1 {
  background-color: #dfeffa;
  width: 100%;
  border-radius: 0px;
}

.content-2 {
  display: flex;
  width: 100%;
  height: 40%;
}

.col-content-2 {
  background-color: #dfeffa;
  width: 50%;
  border-radius: 0 0 10px 10px;
}

.text-content {
  text-align: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.text-angka {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 40px;
}

.title-loket {
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>
