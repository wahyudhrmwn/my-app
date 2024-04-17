<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io" target="_blank">
        <img src="/src/assets/logo/bulma-png.png" width="auto" height="auto" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light btnLogin" id="btnLogin" @click="buttonLogin">
              Log in &nbsp;<font-awesome-icon icon="fa-solid fa-circle-user" size="1x" /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
  
  <script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const buttonLogin = () => {
  router.push({ name: 'loginpage' })
}
</script>
  
  <style>
.buttons .button {
  margin-bottom: 0;
  background-color: blue;
  border-radius: 20px;
  color: #dfeffa;
}

.buttons .button:hover {
  background-color: #2a2f4f;
  color: #dfeffa;
}

.navbar {
  min-height: 4rem;
}
</style>