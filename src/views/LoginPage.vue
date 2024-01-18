<template>
    <div class="container">
        <div class="box box-login">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-solid fa-envelope"/>
                  </span>
                  <span class="icon is-small is-right">
                    <font-awesome-icon icon="fa-solid fa-exclamation-triangle"/>
                  </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="password" placeholder="input password">
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-solid fa-key"/>
                  </span>
                  <span class="icon is-small is-right">
                    <font-awesome-icon icon="fa-solid fa-check"/>
                  </span>
                </div>
                <p class="help is-danger">This password is invalid</p>
              </div>

              <div class="buttonLogin" @click="storeAdmin.btnLogin">
                <button class="button">Login</button>
              </div>
        </div>
    </div>
</template>

<script setup>
import { useStoreAdmin } from '@/stores/storeAdmin';

const storeAdmin = useStoreAdmin()
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
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
  background-color: #2A2F4F;
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
    background-color: #0D42FF;
    border: #0D42FF;
    color: white;
}
}
</style>