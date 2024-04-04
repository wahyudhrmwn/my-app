<template>
  <div class="container">
    <div class="box box-login">
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="emailAdmin"
            class="input is-danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </span>
        </div>
        <p v-if="infoLogin" class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="passwordAdmin"
            class="input is-danger"
            type="password"
            placeholder="input password"
          />
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-key" />
          </span>
        </div>
        <p v-if="infoLogin" class="help is-danger">This password is invalid</p>
      </div>

      <div class="row button__row">
        <div class="buttonLogin" @click="btnLogin(emailAdmin, passwordAdmin)">
          <button class="button">Login</button>
        </div>
        <div class="buttonLogin" @click="btnRegister(emailAdmin, passwordAdmin)">
          <button class="button">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreAuth } from '@/stores/storeAuth'
import { onMounted, ref, watchEffect } from 'vue'


const storeAuth = useStoreAuth()

let emailAdmin = ref('')
let passwordAdmin = ref('')
let infoLogin = ref(false)
let listAdmin = ref([])

onMounted(() => {
  storeAuth.getAllAdmin()
})

watchEffect(() => {
  if(storeAuth.allAdmin.length > 0) {
    let dataQueue = storeAuth.allAdmin

      for (var i = 0; i < dataQueue.length; i++) {
            let datas = {
                id: dataQueue[i].id,
                isActive: dataQueue[i].isActive,
                isCompleted: dataQueue[i].isCompleted,
                isLoket: dataQueue[i].isLoket,
                isQueue: dataQueue[i].isQueue,
                nomorAntrian: dataQueue[i].nomorAntrian
            }
            listAdmin.value.push(datas)
        }
      }

  })


const btnRegister = (email, password) => {
  if (!email || !password) {
    alert('Please enter an email and password')
  } else {
    storeAuth.registerUser(email, password)
  }
}

const btnLogin = (email, password) => {
  if (!email || !password) {
    alert('Please enter an email and password')
  } else {
    storeAuth.loginUser(email, password)
  }
}


</script>

<style scoped>
.container {
  height: 100vh;
  margin: auto;
  display: flex;
}

.field {
  margin-left: 50px;
  margin-right: 50px;
}

.label {
  color: white;
}

.box-login {
  margin: auto;
  width: 70%;
  height: 50%;
  border-radius: 15px;
  background-color: #2a2f4f;
  padding: 0;
  padding-top: 50px;
}

.buttonLogin {
  text-align: center;
  margin-top: 20px;
}

.button {
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 15px;
  background-color: #0d42ff;
  border: #0d42ff;
  color: white;
}

.button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}

@media only screen and (max-width: 1279px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .field {
    margin-left: 50px;
    margin-right: 50px;
  }

  .label {
    color: white;
  }

  .box-login {
    margin: auto;
    width: 70%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 50px;
  }

  .buttonLogin {
    text-align: center;
    margin-top: 20px;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}
}

@media only screen and (min-width: 1280px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .field {
    margin-left: 50px;
    margin-right: 50px;
  }

  .label {
    color: white;
  }

  .box-login {
    margin: auto;
    width: 70%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 50px;
  }

  .buttonLogin {
    text-align: center;
    margin-top: 20px;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}
}

@media only screen and (min-width: 1366px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .field {
    margin-left: 50px;
    margin-right: 50px;
  }

  .label {
    color: white;
  }

  .box-login {
    margin: auto;
    width: 70%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 50px;
  }

  .buttonLogin {
    text-align: center;
    margin-top: 20px;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}
}

@media only screen and (min-width: 1440px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .field {
    margin-left: 50px;
    margin-right: 50px;
  }

  .label {
    color: white;
  }

  .box-login {
    margin: auto;
    width: 60%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 50px;
  }

  .buttonLogin {
    text-align: center;
    margin-top: 20px;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}
}

@media only screen and (min-width: 1920px) {
  .container {
    height: 100vh;
    margin: auto;
    display: flex;
  }

  .field {
    margin-left: 50px;
    margin-right: 50px;
  }

  .label {
    color: white;
  }

  .box-login {
    margin: auto;
    width: 60%;
    height: 350px;
    border-radius: 15px;
    background-color: #2a2f4f;
    padding: 0;
    padding-top: 50px;
  }

  .buttonLogin {
    text-align: center;
    margin-top: 20px;
  }

  .button {
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 15px;
    background-color: #0d42ff;
    border: #0d42ff;
    color: white;
  }

  .button__row {
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    width: 50%;
}
}
</style>
