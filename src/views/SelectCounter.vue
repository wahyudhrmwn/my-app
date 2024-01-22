import { useStoreAdmin } from '@/stores/storeAdmin';
<template>
  <div class="container">
    <div class="box box-counter">
      <div class="textCounter">
        <h1>Silahkan Pilih Loket</h1>
      </div>
      <div class="dropdownCounter">
        <div class="dropdown is-active">
          <div class="dropdown-trigger">
            <button class="button btn-dropdown" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Select Counter</span>
              <span class="icon is-small">
                <font-awesome-icon icon="fa-solid fa-arrow-down" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item" @click="counter('Loket 1')">
                Jaga Di Loket 1
                <span class="icon is-small is-right">
                  <font-awesome-icon icon="fa-solid fa-check" />
                </span>
              </a>
              <a class="dropdown-item" @click="counter('Loket 2')">
                Jaga Di Loket 2
                <span class="icon is-small is-right">
                  <font-awesome-icon icon="fa-solid fa-check" />
                </span>
              </a>
              <a class="dropdown-item" @click="counter('Loket 3')">
                Jaga Di Loket 3
                <span class="icon is-small is-right">
                  <font-awesome-icon icon="fa-solid fa-check" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="buttonCounter">
          <button class="button btn-oke">OKE</button>
        </div> -->
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStoreAdmin } from '@/stores/storeAdmin'
// import { useStoreAntrian } from '@/stores/storeAntrian'

const router = useRouter()
const storeAdmin = useStoreAdmin()
// const storeAntrian = useStoreAntrian()

const counter = (loket) => {
  let login = storeAdmin.dataLogin
  let dbAdmin = storeAdmin.dataAdmin
  for (var i = 0; i < dbAdmin.length; i++) {
    if (login.email === dbAdmin[i].email && login.password === dbAdmin[i].password) {
      if (loket === 'Loket 1') {
        storeAdmin.$patch((state) => {
          state.dataLogin = {
            email: dbAdmin[i].email,
            password: dbAdmin[i].password,
            nama: dbAdmin[i].nama,
            isLoket: 1,
            isLogin: true
          }
        })

        router.replace('/admin')
        console.log('Loket 1 is Clicked', 'storeAdmin.dataLogin Updated')
      } else if (loket === 'Loket 2') {
        storeAdmin.$patch((state) => {
          state.dataLogin = {
            email: dbAdmin[i].email,
            password: dbAdmin[i].password,
            nama: dbAdmin[i].nama,
            isLoket: 2,
            isLogin: true
          }
        })

        router.replace('/admin')
        console.log('Loket 2 is Clicked', 'storeAdmin.dataLogin Updated')
      } else if (loket === 'Loket 3') {
        storeAdmin.$patch((state) => {
          state.dataLogin = {
            email: dbAdmin[i].email,
            password: dbAdmin[i].password,
            nama: dbAdmin[i].nama,
            isLoket: 3,
            isLogin: true
          }
        })

        router.replace('/admin')
        console.log('Loket 3 is Clicked', 'storeAdmin.dataLogin Updated')
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  margin: auto;
  display: flex;
}

.box-counter {
  margin: auto;
  width: 50%;
  height: 350px;
  border-radius: 15px;
  background-color: #2a2f4f;
  padding: 0;
  padding-top: 40px;
}

.dropdownCounter {
  text-align: center;
  margin-top: 10px;
}

.dropdown-item {
  padding-right: 0;
  padding-left: 0;
  border-bottom: solid black 1px;
}

.dropdown-item:hover {
  background-color: #0d42ff;
  color: white;
}

.dropdown-content {
  padding-bottom: 0;
  padding-top: 0;
}

.dropdown-menu {
  width: -webkit-fill-available;
}

.btn-dropdown {
  padding-left: 100px;
  padding-right: 100px;
}

.buttonCounter {
  text-align: center;
  margin-top: 70px;
}

.btn-oke {
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 15px;
  background-color: #0d42ff;
  border: #0d42ff;
  color: white;
}

.button {
  padding-left: 50px;
  padding-right: 50px;
  background-color: #0d42ff;
  border: #0d42ff;
  color: white;
  cursor: default;
  width: 350px;
}

.textCounter {
  color: white;
  font-size: 35px;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: bolder;
}

@media only screen and (max-width: 1279px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .box-counter {
    margin: auto;
    width: 50%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 40px;
  }

  .dropdownCounter {
    text-align: center;
    margin-top: 10px;
  }

  .dropdown-item {
    padding-right: 0;
    padding-left: 0;
    border-bottom: solid black 1px;
  }

  .dropdown-item:hover {
    background-color: #0d42ff;
    color: white;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }

  .btn-dropdown {
    padding-left: 100px;
    padding-right: 100px;
  }

  .buttonCounter {
    text-align: center;
    margin-top: 70px;
  }

  .btn-oke {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
    cursor: default;
    width: 350px;
  }

  .textCounter {
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
  }
}

@media only screen and (min-width: 1280px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .box-counter {
    margin: auto;
    width: 50%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 40px;
  }

  .dropdownCounter {
    text-align: center;
    margin-top: 10px;
  }

  .dropdown-item {
    padding-right: 0;
    padding-left: 0;
    border-bottom: solid black 1px;
  }

  .dropdown-item:hover {
    background-color: #0d42ff;
    color: white;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }

  .btn-dropdown {
    padding-left: 100px;
    padding-right: 100px;
  }

  .buttonCounter {
    text-align: center;
    margin-top: 70px;
  }

  .btn-oke {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
    cursor: default;
    width: 350px;
  }

  .textCounter {
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
  }
}

@media only screen and (min-width: 1366px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .box-counter {
    margin: auto;
    width: 50%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 40px;
  }

  .dropdownCounter {
    text-align: center;
    margin-top: 10px;
  }

  .dropdown-item {
    padding-right: 0;
    padding-left: 0;
    border-bottom: solid black 1px;
  }

  .dropdown-item:hover {
    background-color: #0d42ff;
    color: white;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }

  .btn-dropdown {
    padding-left: 100px;
    padding-right: 100px;
  }

  .buttonCounter {
    text-align: center;
    margin-top: 70px;
  }

  .btn-oke {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
    cursor: default;
    width: 350px;
  }

  .textCounter {
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
  }
}
@media only screen and (min-width: 1440px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .box-counter {
    margin: auto;
    width: 50%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 40px;
  }

  .dropdownCounter {
    text-align: center;
    margin-top: 10px;
  }

  .dropdown-item {
    padding-right: 0;
    padding-left: 0;
    border-bottom: solid black 1px;
  }

  .dropdown-item:hover {
    background-color: #0d42ff;
    color: white;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }

  .btn-dropdown {
    padding-left: 100px;
    padding-right: 100px;
  }

  .buttonCounter {
    text-align: center;
    margin-top: 70px;
  }

  .btn-oke {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
    cursor: default;
    width: 350px;
  }

  .textCounter {
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
  }
}
@media only screen and (min-width: 1920px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .box-counter {
    margin: auto;
    width: 50%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 40px;
  }

  .dropdownCounter {
    text-align: center;
    margin-top: 10px;
  }

  .dropdown-item {
    padding-right: 0;
    padding-left: 0;
    border-bottom: solid black 1px;
  }

  .dropdown-item:hover {
    background-color: #0d42ff;
    color: white;
  }

  .dropdown-content {
    padding-bottom: 0;
    padding-top: 0;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }

  .btn-dropdown {
    padding-left: 100px;
    padding-right: 100px;
  }

  .buttonCounter {
    text-align: center;
    margin-top: 70px;
  }

  .btn-oke {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
    cursor: default;
    width: 350px;
  }

  .textCounter {
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
  }
}
</style>
