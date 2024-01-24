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
          <!-- <span class="icon is-small is-right">
            <font-awesome-icon icon="fa-solid fa-exclamation-triangle" />
          </span> -->
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
          <!-- <span class="icon is-small is-right">
            <font-awesome-icon icon="fa-solid fa-check" />
          </span> -->
        </div>
        <p v-if="infoLogin" class="help is-danger">This password is invalid</p>
      </div>

      <div class="buttonLogin" @click="btnLogin(emailAdmin, passwordAdmin)">
        <button class="button">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreAdmin } from '@/stores/storeAdmin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const storeAdmin = useStoreAdmin()

let emailAdmin = ref('')
let passwordAdmin = ref('')
let dataAdmin = ref(false)
let infoLogin = ref(false)

let btnLogin = (email, password) => {
  storeAdmin.btnLogin(email, password)
  

  for (var i = 0; i < storeAdmin.dataAdmin.length; i++) {
    if (email === storeAdmin.dataAdmin[i].email && password === storeAdmin.dataAdmin[i].password) {
      dataAdmin.value = true
    }
  }

  if(dataAdmin.value === true) {
    router.replace('/counter')
  } else {
    infoLogin.value = true
    alert('email dan password tidak terdaftar')
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
}
</style>
