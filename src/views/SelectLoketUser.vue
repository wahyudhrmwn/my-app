<template>
  <div class="container">
    <div class="box box1">
      <div class="contentBox1">
        <font-awesome-icon icon="fa-solid fa-users" class="iconUsers" />
        <p>Pilih Loket Antrian</p>
      </div>
    </div>

    <div class="box box2">

      <div class="box box2-1">
        <div class="contentBox2-1" @click="btnLoket('CS')">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="iconPlus" />
          <p>Antri ke Loket CS</p>
        </div>
      </div>

      <div class="box box2-2">
        <div class="contentBox2-2" @click="btnLoket('Dukcapil')">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="iconPlus" />
          <p>Antri Ke Loket Dukcapil</p>
        </div>
      </div>

      <div class="box box2-3">
        <div class="contentBox2-3" @click="btnLoket('Unpam')">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="iconPlus" />
          <p>Antri Ke Loket Pembayaran Unpam</p>
        </div>
      </div>

      <div class="box box2-4">
        <div class="contentBox2-4" @click="btnLoket('BPR')">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="iconPlus" />
          <p>Antri Ke Loket BPR</p>
        </div>
      </div>

      <div class="box box2-5">
        <div class="contentBox2-5" @click="btnLoket('Event')">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="iconPlus" />
          <p>Antri Ke Loket Event/Seminar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreAntrian } from '@/stores/storeAntrian';

const storeAntrian = useStoreAntrian()

const btnLoket = (typeAntrian) => {
  storeAntrian.jenisAntrian(typeAntrian)
}


</script>

<style scoped>

.iconUsers {
  color: white;
  height: 25px;
  width: 25px;
}

.container {
  height: 100vh;
  padding: 10px;
}

.box1 {
  margin: auto;
  width: 40%;
  margin-top: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: #2a2f4f;
  padding: 0;
  padding-top: 10px;
}

.contentBox1 {
  display: flex;
  justify-content: center;
}

.contentBox1 p {
  color: white;
  margin-left: 10px;
}

.box2 {
  margin: auto;
  margin-top: 20px;
  width: 40%;
  height: 350px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #2a2f4f;
}


.box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
  margin: 10px;
  height: 50px;
  border-radius: 15px;
  padding: 0;
  padding-top: 10px;
  cursor: pointer;
}

.iconPlus {
  color: #0d42ff;
  height: 25px;
  width: 25px;
}

.contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
  display: flex;
  margin-left: 15px;
}


.contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
  color: #2a2f4f;
  margin-left: 10px;
}


@media only screen and (max-width: 399px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 80%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 80%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 10px;
    margin-top: 3px;
  }
  
}

@media only screen and (min-width: 400px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 70%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 70%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 500px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 60%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 60%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 600px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 60%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 60%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 768px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 50%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 50%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 992px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 40%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 40%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 1200px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 35%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 35%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 1366px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 35%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 35%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 1440px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 30%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 30%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}

@media only screen and (min-width: 1920px) {
  .iconUsers {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconPlus {
    color: #0d42ff;
    height: 20px;
    width: 20px;
  }
  
  .container {
    height: 100vh;
    padding: 10px;
  }
  
  .box1 {
    margin: auto;
    width: 30%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2 {
    margin: auto;
    margin-top: 20px;
    width: 30%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1, .box2-2, .box2-3, .box2-4, .box2-5 {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 15px;
    cursor: pointer;
  }
  
  .contentBox1 {
    display: flex;
    justify-content: center;
  }
  
  .contentBox1 p {
    color: white;
    margin-left: 10px;
  }

  .contentBox2-1, .contentBox2-2, .contentBox2-3, .contentBox2-4, .contentBox2-5 {
    display: flex;
    margin-left: 10px;
  }
  
  
  .contentBox2-1 p, .contentBox2-2 p, .contentBox2-3 p, .contentBox2-4 p, .contentBox2-5 p {
    color: #2a2f4f;
    font-size: 12px;
  }
}
</style>
