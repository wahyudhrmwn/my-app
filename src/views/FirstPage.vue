<template>

  <div class="container">
    <div class="box box1-fp">
      <div class="contentBox1-fp">
        <font-awesome-icon icon="fa-solid fa-users" class="iconUsers-fp" />
        <p>Nomor Antrian</p>
      </div>
    </div>

    <div class="box box2-fp">
      <div class="box box2-1-fp">
        <div class="textAntrian-fp">ANTRIAN</div>
        <div class="nomorAntrian-fp">{{ nomorAnda.nomorAntrian }}</div>
      </div>
      <div class="box box2-2-fp">
        <div class="contentBox2-2-fp" @click="btnAmbilAntrian">
          <font-awesome-icon icon="fa-solid fa-circle-plus" class="iconPlus-fp" />
          <p>Ambil Nomor</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watchEffect, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { useStoreAntrian } from '@/stores/storeAntrian'

/*Using Store*/
const storeAntrian = useStoreAntrian()
// const router = useRouter()

let typeData = ref('')

let nomorAnda = ref({})

onMounted(() => {
   typeData.value = JSON.parse(localStorage.getItem('jenisAntrian')).type

  storeAntrian.getAllAntrian(typeData.value)
})

const btnAmbilAntrian = () => {
  typeData.value = JSON.parse(localStorage.getItem('jenisAntrian')).type

  storeAntrian.ambilAntrian(nomorAnda.value.nomorAntrian, typeData.value)
}


watchEffect(() => {
  if (storeAntrian.dataAntrian.length > 0) {
    let dataQueue = storeAntrian.dataAntrian.filter((data) => data.isQueue === true)
    let dataAktif = storeAntrian.dataAntrian.filter((data) => data.isActive === true)
    let allData = storeAntrian.dataAntrian
    let typeData = JSON.parse(localStorage.getItem('jenisAntrian')).type
    console.log('typeData : ',typeData)
    console.log('dataQueue : ',dataQueue)
    console.log('dataAktif : ',dataAktif)
    console.log('allData : ',allData)

    if (dataQueue.length === 0) {
      let dataAktifTerbesar = dataAktif

        dataAktifTerbesar.sort((a, b) => parseInt(b.id) - parseInt(a.id))

        nomorAnda.value = {
          id: (parseInt(dataAktifTerbesar[0].id) + 1).toString(),
          isActive: false,
          isCompleted: false,
          isLoket: 0,
          isQueue: true,
          nomorAntrian: (parseInt(dataAktifTerbesar[0].nomorAntrian) + 1).toString(),
          type: typeData.value
        }
    } else {
      for (var i = 0; i < dataQueue.length; i++) {
          let lengthData = allData.length
          if (parseInt(dataQueue[i].id) === lengthData) {
            nomorAnda.value = {
              id: (parseInt(dataQueue[i].id) + 1).toString(),
              isActive: false,
              isCompleted: false,
              isLoket: 0,
              isQueue: true,
              nomorAntrian: (parseInt(dataQueue[i].nomorAntrian) + 1).toString()
            }
          }
        }
    }

    // if (dataQueue.length === 0 && dataAktif.length === 0) {
    //   nomorAnda.value = {
    //     id: '1',
    //     isActive: false,
    //     isCompleted: false,
    //     isLoket: 0,
    //     isQueue: true,
    //     nomorAntrian: '1'
    //   }
    // } else {
    //   if (dataQueue.length === 0) {
    //     let dataAktifTerbesar = dataAktif

    //     dataAktifTerbesar.sort((a, b) => parseInt(b.id) - parseInt(a.id))

    //     nomorAnda.value = {
    //       id: (parseInt(dataAktifTerbesar[0].id) + 1).toString(),
    //       isActive: false,
    //       isCompleted: false,
    //       isLoket: 0,
    //       isQueue: true,
    //       nomorAntrian: (parseInt(dataAktifTerbesar[0].nomorAntrian) + 1).toString()
    //     }
    //   } else {
    //     for (var i = 0; i < dataQueue.length; i++) {
    //       let lengthData = storeAntrian.dataAntrian.length - 1
    //       if (parseInt(dataQueue[i].id) === lengthData) {
    //         nomorAnda.value = {
    //           id: (parseInt(dataQueue[i].id) + 1).toString(),
    //           isActive: false,
    //           isCompleted: false,
    //           isLoket: 0,
    //           isQueue: true,
    //           nomorAntrian: (parseInt(dataQueue[i].nomorAntrian) + 1).toString()
    //         }
    //       }
    //     }
    //   }
    // }

    // let localData = JSON.parse(localStorage.getItem('nomorAntrianAnda'))
    // let dataLocalError = true

    // if(localData !== null) {
    //   for (var z = 0; z < allData.length; z++) {
    //   if (localData.nomorAntrian === allData[z].nomorAntrian) {
    //     dataLocalError = false
    //     if (allData[z].isCompleted === true) {
    //       localStorage.removeItem('nomorAntrianAnda')
    //     } else {
    //       router.replace('/second')
    //     }
    //   }
    // }
    
    // if(dataLocalError) {
    //     localStorage.removeItem('nomorAntrianAnda')
    //   }
    // }
    

    
  } else {
    nomorAnda.value = {
        id: '1',
        isActive: false,
        isCompleted: false,
        isLoket: 0,
        isQueue: false,
        nomorAntrian: '1',
        type: typeData.value
      }
  }
})
</script>

<style scoped>
.iconUsers-fp {
  color: white;
  height: 25px;
  width: 25px;
}

.container {
  height: 100vh;
  padding: 10px;
}

.box1-fp {
  margin: auto;
  width: 30%;
  margin-top: 30px;
  height: 50px;
  border-radius: 15px;
  background-color: #2a2f4f;
  padding: 0;
  padding-top: 10px;
}

.contentBox1-fp {
  display: flex;
  justify-content: center;
}

.contentBox1-fp p {
  color: white;
  margin-left: 10px;
}

.box2-fp {
  margin: auto;
  margin-top: 20px;
  width: 30%;
  height: 350px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #2a2f4f;
}

.box2-1-fp {
  margin: 10px;
  height: 220px;
  border-radius: 15px;
  text-align: center;
}

.box2-2-fp {
  margin: 10px;
  height: 50px;
  border-radius: 15px;
  padding: 0;
  padding-top: 10px;
  cursor: pointer;
}

.iconPlus-fp {
  color: #0d42ff;
  height: 25px;
  widows: 25px;
}

.contentBox2-2-fp {
  display: flex;
  justify-content: center;
}

.contentBox2-2-fp p {
  color: #2a2f4f;
  margin-left: 10px;
}

.textAntrian-fp {
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
}

.nomorAntrian-fp {
  font-size: 60px;
  font-weight: bold;
}

/* Extra small devices (phones, 400px and down) */
@media only screen and (max-width: 399px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 80%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 80%;
    height: 275px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .textAntrian-fp {
    font-size: 30px;
    font-weight: bold;
    margin-top: 5px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }

  .box2-1-fp {
    margin: 10px;
    height: 180px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 30px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .box2-2-fp {
    margin: 10px;
    height: 35px;
    border-radius: 15px;
    padding: 0;
    padding-top: 5px;
  }
}

/* Extra small devices (phones, 400px and up) */
@media only screen and (min-width: 400px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 70%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 70%;
    height: 280px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 180px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 40px;
    border-radius: 15px;
    padding: 0;
    padding-top: 7px;
  }

  .textAntrian-fp {
    font-size: 32px;
    font-weight: bold;
    margin-top: 0px;
  }
}

@media only screen and (min-width: 500px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 70%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 70%;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 180px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 40px;
    border-radius: 15px;
    padding: 0;
    padding-top: 7px;
  }

  .textAntrian-fp {
    font-size: 32px;
    font-weight: bold;
    margin-top: 0px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 70%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 70%;
    height: 310px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 190px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 40px;
    border-radius: 15px;
    padding: 0;
    padding-top: 7px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 0px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 45%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 45%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 40%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 20px;
    width: 40%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 45%;
    margin-top: 30px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 45%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

@media only screen and (min-width: 1280px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 35%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 35%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

@media only screen and (min-width: 1366px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 35%;
    margin-top: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 35%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

@media only screen and (min-width: 1440px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 30%;
    margin-top: 100px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 30%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

@media only screen and (min-width: 1920px) {
  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .iconUsers-fp {
    color: white;
    height: 25px;
    width: 25px;
  }

  .container {
    height: 100vh;
    padding: 10px;
  }

  .box1-fp {
    margin: auto;
    width: 30%;
    margin-top: 180px;
    height: 50px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 10px;
  }

  .contentBox1-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox1-fp p {
    color: white;
    margin-left: 10px;
  }

  .box2-fp {
    margin: auto;
    margin-top: 15px;
    width: 30%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2a2f4f;
  }

  .box2-1-fp {
    margin: 10px;
    height: 220px;
    border-radius: 15px;
    text-align: center;
  }

  .box2-2-fp {
    margin: 10px;
    height: 50px;
    border-radius: 15px;
    padding: 0;
    padding-top: 10px;
  }

  .iconPlus-fp {
    color: #0d42ff;
    height: 25px;
    widows: 25px;
  }

  .contentBox2-2-fp {
    display: flex;
    justify-content: center;
  }

  .contentBox2-2-fp p {
    color: #2a2f4f;
    margin-left: 10px;
  }

  .textAntrian-fp {
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
  }

  .nomorAntrian-fp {
    font-size: 60px;
    font-weight: bold;
  }
}

.loader {
  display: block;
  position: relative;
  height: 20px;
  width: 140px;
  background-image: linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 20px auto;
  background-position: 0 0, 40px 0, 80px 0, 120px 0;
  animation: pgfill 1s linear infinite;
}

@keyframes pgfill {
  0% {
    background-image: linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
  }

  25% {
    background-image: linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
  }

  50% {
    background-image: linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#ff3d00 20px, transparent 0), linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
  }

  75% {
    background-image: linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#ff3d00 20px, transparent 0), linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0);
  }

  100% {
    background-image: linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#ff3d00 20px, transparent 0), linear-gradient(#ff3d00 20px, transparent 0),
      linear-gradient(#ff3d00 20px, transparent 0);
  }
}
</style>
