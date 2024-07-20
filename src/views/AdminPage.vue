<template>
  <div class="container">
    <meta />
    <div class="row1">
      <div class="columns columns1">
        <div class="column column1-row1 is-two-fifths">
          <div class="box border-box-column1">
            <div class="box box1-column1-row1">Admin : {{ adminLogin.nama }}</div>
            <div class="box box2-column1-row1">Email : {{ adminLogin.email }}</div>
          </div>
        </div>
        <div class="column column2-row1 is-two-fifths">
          <div class="box border-box-column2">
            <div class="posisiLoket">Anda di Loket {{ adminLogin.isLoket }}</div>
            <div>
              <div class="col">Loket 1</div>
              <div class="col">Loket 2</div>
              <div class="col">Loket 3</div>
            </div>
            <div>
              <div class="col-icon">
                <font-awesome-icon
                  v-if="adminLogin.isLoket === 1"
                  icon="fa-solid fa-circle-check"
                />
                <font-awesome-icon v-else icon="fa-solid fa-circle-xmark" />
              </div>
              <div class="col-icon">
                <font-awesome-icon
                  v-if="adminLogin.isLoket === 2"
                  icon="fa-solid fa-circle-check"
                />
                <font-awesome-icon v-else icon="fa-solid fa-circle-xmark" />
              </div>
              <div class="col-icon">
                <font-awesome-icon
                  v-if="adminLogin.isLoket === 3"
                  icon="fa-solid fa-circle-check"
                />
                <font-awesome-icon v-else icon="fa-solid fa-circle-xmark" />
              </div>
            </div>
          </div>
        </div>
        <div class="column column3-row1">
          <div class="row1-col3">
            <div class="box box1-column3-row1">{{ day + ', ' + formattedDate }}</div>
          </div>
          <div class="row1-col3" @click="storeAdmin.resetAntrian()">
            <div class="box box2-column3-row1">Reset Antrian</div>
          </div>
          <div class="row1-col3" @click="storeAuth.logoutUser(allAdminLogin)">
            <div class="box box3-column3-row1">Logout</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="columns columns2">
        <div class="column is-one-thirds column1-row2">
          <div class="box box1-row2-column1">LOKET 1 {{ loketAdmin.type === 'Pembayaran' ? 'Pembayaran Unpam' : loketAdmin.type }}</div>
          <div class="box box2-row2-column1">
            {{ admin1.isLogin === true ? admin1.nama : 'CLOSE' }}
          </div>
          <div class="box box3-row2-column1">
            {{ loket1Off === true ? 'X' : antrian1.nomorAntrian }}
          </div>
          <div
            v-if="adminLogin.isLoket === 1 && firstTenData.length !== 0"
            class="box box4-row2-column1"
            @click="btnAntrianSelanjutnya(1)"
          >
            Antrian Selanjutnya
          </div>
        </div>
        <div class="column is-one-thirds column2-row2">
          <div class="box box1-row2-column1">LOKET 2 {{ loketAdmin.type === 'Pembayaran' ? 'Pembayaran Unpam' : loketAdmin.type }}</div>
          <div class="box box2-row2-column1">
            {{ admin2.isLogin === true ? admin2.nama : 'CLOSE' }}
          </div>
          <div class="box box3-row2-column1">
            {{ loket2Off === true ? 'X' : antrian2.nomorAntrian }}
          </div>
          <div
            v-if="adminLogin.isLoket === 2 && firstTenData.length !== 0"
            class="box box4-row2-column1"
            @click="btnAntrianSelanjutnya(2)"
          >
            Antrian Selanjutnya
          </div>
        </div>
        <div class="column is-one-thirds column3-row2">
          <div class="box box1-row2-column1">
            LOKET 3 {{ loketAdmin.type === 'Pembayaran' ? 'Pembayaran Unpam' : loketAdmin.type }}
          </div>
          <div class="box box2-row2-column1">
            {{ admin3.isLogin === true ? admin3.nama : 'CLOSE' }}
          </div>
          <div class="box box3-row2-column1">
            {{ loket3Off === true ? 'X' : antrian3.nomorAntrian }}
          </div>
          <div
            v-if="adminLogin.isLoket === 3 && firstTenData.length !== 0"
            class="box box4-row2-column1"
            @click="btnAntrianSelanjutnya(3)"
          >
            Antrian Selanjutnya
          </div>
        </div>
      </div>
    </div>

    <div class="row3">
      <div class="columns columns3">
        <div class="column is-one-quarter nextQueue">Antrian yang sedang menunggu</div>
        <div class="column queue" v-for="(antrian, index) in firstTenData" :key="index">
          <div class="box box-queue">
            {{ antrian.nomorAntrian }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreAdmin } from '@/stores/storeAdmin'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useStoreAntrian } from '@/stores/storeAntrian'
import { useStoreAuth } from '@/stores/storeAuth'
// import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { updateDoc, doc, collection } from 'firebase/firestore'
import { db } from '@/js/firebase'

const storeAntrian = useStoreAntrian()
const storeAdmin = useStoreAdmin()
const storeAuth = useStoreAuth()

let allAdminLogin = ref([])
let antrianAktif = ref([])
let antrianMenunggu = ref([])
let adminLogin = JSON.parse(localStorage.getItem('isUserLogin'))
let loketAdmin = JSON.parse(localStorage.getItem('jenisLoket'))

const weekday = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const currentDate = new Date()
const dayOfMonth = currentDate.getDate()
const month = currentDate.getMonth() + 1
const year = currentDate.getFullYear()
const day = weekday[currentDate.getDay()]
const formattedDate = `${dayOfMonth.toString().padStart(2, '0')}-${month
  .toString()
  .padStart(2, '0')}-${year}`

let antrian1 = ref({})
let antrian2 = ref({})
let antrian3 = ref({})
let admin1 = ref({
  email: '',
  id: '',
  isLogin: false,
  isLoket: 0,
  nama: '',
  password: ''
})
let admin2 = ref({
  email: '',
  id: '',
  isLogin: false,
  isLoket: 0,
  nama: '',
  password: ''
})
let admin3 = ref({
  email: '',
  id: '',
  isLogin: false,
  isLoket: 0,
  nama: '',
  password: ''
})

let loket1Off = ref(true)
let loket2Off = ref(true)
let loket3Off = ref(true)

let dataMenunggu = ref([])

onMounted(() => {
  storeAntrian.getAllAntrian()
  storeAdmin.getAllAdmin()
})

const btnAntrianSelanjutnya = (isLoket) => {
  let dataSebelum = antrianAktif.value

  for (var i = 0; i < dataSebelum.length; i++) {
    if (dataSebelum[i].isLoket === isLoket) {
      updateDoc(doc(collection(db, 'dataAntrian'), dataSebelum[i].id), {
        id: dataSebelum[i].id,
        nomorAntrian: dataSebelum[i].nomorAntrian,
        isActive: false,
        isQueue: false,
        isCompleted: true,
        isLoket: 0
      })

      let antrianSebelumnya = {
        id: dataSebelum[i].id,
        isActive: false,
        isCompleted: true,
        isLoket: 0,
        isQueue: false,
        nomorAntrian: dataSebelum[i].nomorAntrian
      }

      localStorage.setItem('nomorAntrianAnda', JSON.stringify(antrianSebelumnya))
    }
  }

  if (antrianAktif.value.length === 0 && antrianMenunggu.value.length === 0) {
    storeAdmin.resetAntrian()
  } else {
    updateAntrianBaru(isLoket)
  }
}

const updateAntrianBaru = (isLoket) => {
  let antrianSelanjutnya = dataMenunggu.value[0]

  if (antrianSelanjutnya.isQueue === true && antrianSelanjutnya.isLoket === 0) {
    updateDoc(doc(collection(db, 'dataAntrian'), antrianSelanjutnya.id), {
      id: antrianSelanjutnya.id,
      nomorAntrian: antrianSelanjutnya.nomorAntrian,
      isActive: true,
      isQueue: false,
      isCompleted: false,
      isLoket: isLoket
    })
  }
}

const mappingDataAktif = () => {
  for (var i = 0; i < antrianAktif.value.length; i++) {
    if (antrianAktif.value[i].isLoket === 1) {
      antrian1.value = antrianAktif.value[i]
    }

    if (antrianAktif.value[i].isLoket === 2) {
      antrian2.value = antrianAktif.value[i]
    }

    if (antrianAktif.value[i].isLoket === 3) {
      antrian3.value = antrianAktif.value[i]
    }
  }
}

const mappingDataAdmin = () => {
  for (var i = 0; i < allAdminLogin.value.length; i++) {
    if (allAdminLogin.value[i].isLogin === true && allAdminLogin.value[i].isLoket === 1) {
      admin1.value = {
        email: allAdminLogin.value[i].email,
        id: allAdminLogin.value[i].id,
        isLogin: allAdminLogin.value[i].isLogin,
        isLoket: allAdminLogin.value[i].isLoket,
        nama: allAdminLogin.value[i].nama,
        password: allAdminLogin.value[i].password
      }

      loket1Off.value = false
    }

    if (allAdminLogin.value[i].isLogin === true && allAdminLogin.value[i].isLoket === 2) {
      admin2.value = {
        email: allAdminLogin.value[i].email,
        id: allAdminLogin.value[i].id,
        isLogin: allAdminLogin.value[i].isLogin,
        isLoket: allAdminLogin.value[i].isLoket,
        nama: allAdminLogin.value[i].nama,
        password: allAdminLogin.value[i].password
      }

      loket2Off.value = false
    }

    if (allAdminLogin.value[i].isLogin === true && allAdminLogin.value[i].isLoket === 3) {
      admin3.value = {
        email: allAdminLogin.value[i].email,
        id: allAdminLogin.value[i].id,
        isLogin: allAdminLogin.value[i].isLogin,
        isLoket: allAdminLogin.value[i].isLoket,
        nama: allAdminLogin.value[i].nama,
        password: allAdminLogin.value[i].password
      }
      loket3Off.value = false
    }
  }
}

const mappingDataMenunggu = () => {
  let datas = antrianMenunggu.value

  datas.sort((a, b) => parseInt(a.id) - parseInt(b.id))

  dataMenunggu.value = datas
}

const firstTenData = computed(() => dataMenunggu.value.slice(0, 10))

watchEffect(() => {
  if (storeAntrian.dataAntrian.length > 0) {
    let dataAktif = storeAntrian.dataAntrian
    let dataQueue = storeAntrian.dataAntrian

    antrianAktif.value = []

    for (var i = 0; i < dataAktif.length; i++) {
      if (dataAktif[i].isActive === true && dataAktif[i].isQueue === false) {
        let datas = {
          id: dataAktif[i].id,
          isActive: dataAktif[i].isActive,
          isCompleted: dataAktif[i].isCompleted,
          isLoket: dataAktif[i].isLoket,
          isQueue: dataAktif[i].isQueue,
          nomorAntrian: dataAktif[i].nomorAntrian
        }
        antrianAktif.value.push(datas)
      }
    }

    antrianMenunggu.value = []

    for (var x = 0; x < dataQueue.length; x++) {
      if (dataQueue[x].isActive === false && dataQueue[x].isQueue === true) {
        let datas = {
          id: dataQueue[x].id,
          isActive: dataQueue[x].isActive,
          isCompleted: dataQueue[x].isCompleted,
          isLoket: dataQueue[x].isLoket,
          isQueue: dataQueue[x].isQueue,
          nomorAntrian: dataQueue[x].nomorAntrian
        }
        antrianMenunggu.value.push(datas)
      }
    }

    mappingDataAktif()
    mappingDataMenunggu()
  }

  if (storeAdmin.allAdmin.length > 0) {
    let dataLoginAdmin = storeAdmin.allAdmin
    allAdminLogin.value = []
    for (var y = 0; y < dataLoginAdmin[0].length; y++) {
      let datas = {
        email: dataLoginAdmin[0][y].email,
        id: dataLoginAdmin[0][y].id,
        isLogin: dataLoginAdmin[0][y].isLogin,
        isLoket: dataLoginAdmin[0][y].isLoket,
        nama: dataLoginAdmin[0][y].nama,
        password: dataLoginAdmin[0][y].password
      }

      allAdminLogin.value.push(datas)
    }

    mappingDataAdmin()
  }
})
</script>

<style scoped>
@media (min-width: 1260px) and (min-height: 700px) {
  .container {
    height: 100vh;
    width: 100%;
  }

  .container {
    height: 100vh;
    width: 100%;
  }

  .column3-row1 {
    text-align: center;
  }

  .column2-row1 {
    text-align: center;
  }

  .column1-row1 {
    text-align: -webkit-center;
  }

  .box1-column1-row1 {
    margin: 0;
    width: 95%;
    height: 40%;
    margin-top: 2%;
    margin-bottom: 3%;
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 600;
    font-size: 10px;
    color: #2a2f4f;
    padding-top: 5%;
  }

  .box2-column1-row1 {
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 600;
    color: #2a2f4f;
    margin: 0;
    width: 95%;
    height: 40%;
    padding-top: 5%;
    font-size: 10px;
  }

  .box1-column3-row1,
  .box2-column3-row1,
  .box3-column3-row1 {
    border-radius: 30px;
    padding: 5%;
  }

  .box1-column3-row1 {
    font-size: 12px;
    background-color: #2a2f4f;
    color: #dfeffa;
    font-weight: 500;
  }

  .box2-column3-row1 {
    font-size: 12px;
    cursor: pointer;
    background-color: #eb6e6e;
    font-weight: 800;
    color: #dfeffa;
  }

  .box3-column3-row1 {
    font-size: 12px;
    cursor: pointer;
    background-color: #0d42ff;
    font-weight: 800;
    color: #dfeffa;
  }

  .row1-col3 {
    width: 100%;
    height: 30%;
    margin-bottom: 7%;
  }
  .row1 {
    width: 100%;
    height: 30vh;
  }

  .row {
    width: 100%;
  }

  .col {
    float: left;
    width: 33.33333333%;
    border-bottom: solid #dfeffa 1px;
    margin-top: 3%;
    color: #dfeffa;
    font-size: 17px;
    padding: 0;
  }

  .col-icon {
    float: left;
    width: 33.33333333%;
    margin-top: 1%;
    color: #dfeffa;
    font-size: 50px;
  }

  .posisiLoket {
    color: #dfeffa;
    font-weight: bold;
    font-size: 16px;
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 1%;
  }

  .row2 {
    width: 100%;
    height: 55vh;
  }

  .row3 {
    width: 100%;
    height: 15vh;
  }

  .columns {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  .columns:last-child {
    margin-bottom: 0;
  }

  .columns1,
  .columns2 {
    height: 100%;
    padding: 10px;
    gap: 0.5rem;
  }

  .columns3 {
    height: 100%;
    padding: 10px;
    gap: 0.15rem;
  }

  .is-one-thirds {
    padding: 5px;
  }

  .border-box-column1 {
    height: 100%;
    background-color: #2a2f4f;
    border-radius: 15px;
  }
  .border-box-column2 {
    height: 100%;
    background-color: #2a2f4f;
    border-radius: 15px;
    padding: 3%;
  }

  .box1-row2-column1 {
    margin: 0;
    margin-bottom: 1%;
    border-radius: 0px;
    padding: 3%;
    background-color: #dfeffa;
    font-weight: 700;
    color: #2a2f4f;
    font-size: 15px;
  }

  .box2-row2-column1 {
    border-radius: 0px;
    padding: 3%;
    background-color: #dfeffa;
    font-weight: 700;
    color: #2a2f4f;
    margin-bottom: 5%;
    font-size: 15px;
  }

  .box3-row2-column1 {
    height: 50%;
    width: 60%;
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 700;
    font-size: 70px;
    padding-top: 9%;
    color: #2a2f4f;
    margin-bottom: 5%;
  }

  .box4-row2-column1 {
    height: 10%;
    width: 65%;
    border-radius: 30px;
    padding: 2%;
    font-size: 14px;
    background-color: #0d42ff;
    font-weight: bold;
    color: #dfeffa;
    cursor: pointer;
  }

  .column1-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .column2-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .column3-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .nextQueue {
    margin-right: 1%;
    text-align: center;
    padding-top: 2.5%;
    background-color: #2a2f4f;
    color: #dfeffa;
    font-weight: 800;
    border-radius: 5px;
    font-size: 14px;
  }

  .box-queue {
    width: 100%;
    height: 100%;
    padding: 0;
    padding-top: 30%;
    border-radius: 15px;
    font-weight: 800;
    color: #2a2f4f;
    background-color: #dfeffa;
  }

  .queue {
    background-color: #2a2f4f;
    text-align: center;
    padding: 1%;
    border-radius: 15%;
    height: 100%;
    max-width: 8%;
  }
}

@media (min-width: 1360px) and (min-height: 600px) {
  .container {
    height: 100vh;
    width: 100%;
  }

  .column3-row1 {
    text-align: center;
  }

  .column2-row1 {
    text-align: center;
  }

  .column1-row1 {
    text-align: -webkit-center;
  }

  .box1-column1-row1 {
    margin: 0;
    width: 95%;
    height: 45%;
    margin-top: 0px;
    margin-bottom: 3%;
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 600;
    font-size: 10px;
    color: #2a2f4f;
    padding-top: 4%;
  }

  .box2-column1-row1 {
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 600;
    color: #2a2f4f;
    margin: 0;
    width: 95%;
    height: 45%;
    padding-top: 4%;
    font-size: 10px;
  }

  .box1-column3-row1,
  .box2-column3-row1,
  .box3-column3-row1 {
    border-radius: 20px;
    padding: 7px;
  }

  .box1-column3-row1 {
    font-size: 12px;
    background-color: #2a2f4f;
    color: #dfeffa;
    font-weight: 500;
  }

  .box2-column3-row1 {
    font-size: 12px;
    cursor: pointer;
    background-color: #eb6e6e;
    font-weight: 800;
    color: #dfeffa;
  }

  .box3-column3-row1 {
    font-size: 12px;
    cursor: pointer;
    background-color: #0d42ff;
    font-weight: 800;
    color: #dfeffa;
  }

  .row1-col3 {
    width: 100%;
    height: 30%;
    margin-bottom: 5%;
  }
  .row1 {
    width: 100%;
    height: 30vh;
  }

  .row {
    width: 100%;
  }

  .col {
    float: left;
    width: 33.33333333%;
    border-bottom: solid #dfeffa 1px;
    margin-top: 3px;
    color: #dfeffa;
    font-size: 14px;
    padding: 0;
  }

  .col-icon {
    float: left;
    width: 33.33333333%;
    margin-top: 1%;
    color: #dfeffa;
    font-size: 40px;
  }

  .posisiLoket {
    color: #dfeffa;
    font-weight: bold;
    font-size: 15px;
    padding-top: 0;
    margin-top: 0;
    margin-bottom: 1%;
  }

  .row2 {
    width: 100%;
    height: 55vh;
  }

  .row3 {
    width: 100%;
    height: 15vh;
  }

  .columns {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  .columns:last-child {
    margin-bottom: 0;
  }

  .columns1,
  .columns2 {
    height: 100%;
    padding: 10px;
    gap: 0.5rem;
  }

  .columns3 {
    height: 100%;
    padding: 10px;
    gap: 0.15rem;
  }

  .is-one-thirds {
    padding: 5px;
  }

  .border-box-column1 {
    height: 100%;
    background-color: #2a2f4f;
    border-radius: 15px;
  }
  .border-box-column2 {
    height: 100%;
    background-color: #2a2f4f;
    border-radius: 15px;
    padding: 3%;
  }

  .box1-row2-column1 {
    margin: 0;
    margin-bottom: 1%;
    border-radius: 0px;
    padding: 2%;
    background-color: #dfeffa;
    font-weight: 700;
    color: #2a2f4f;
    font-size: 14px;
  }

  .box2-row2-column1 {
    border-radius: 0px;
    padding: 2%;
    background-color: #dfeffa;
    font-weight: 700;
    color: #2a2f4f;
    margin-bottom: 5%;
    font-size: 14px;
  }

  .box3-row2-column1 {
    height: 50%;
    width: 50%;
    border-radius: 15px;
    background-color: #dfeffa;
    font-weight: 700;
    font-size: 60px;
    padding-top: 7%;
    color: #2a2f4f;
    margin-bottom: 5%;
  }

  .box4-row2-column1 {
    height: 10%;
    width: 55%;
    border-radius: 30px;
    padding: 1%;
    font-size: 12px;
    background-color: #0d42ff;
    font-weight: bold;
    color: #dfeffa;
    cursor: pointer;
  }

  .column1-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .column2-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .column3-row2 {
    text-align: -webkit-center;
    background-color: #2a2f4f;
    border-radius: 5px;
  }

  .nextQueue {
    margin-right: 1%;
    text-align: center;
    padding-top: 2%;
    background-color: #2a2f4f;
    color: #dfeffa;
    font-weight: 800;
    border-radius: 5px;
    font-size: 14px;
  }

  .box-queue {
    width: 100%;
    height: 100%;
    padding: 0;
    padding-top: 20%;
    border-radius: 15px;
    font-weight: 800;
    color: #2a2f4f;
    background-color: #dfeffa;
  }

  .queue {
    background-color: #2a2f4f;
    text-align: center;
    padding: 1%;
    border-radius: 15%;
    height: 100%;
    max-width: 8%;
  }
}
</style>
