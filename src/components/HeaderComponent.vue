<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>
  
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light btnLogin" id="btnLogin" @click="buttonLogin"> Log in </a>
              <font-awesome-icon icon="fa-solid fa-right-to-bracket" size="2x" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter()
  
  const buttonLogin = () => {
    router.push({ name: 'loginpage'})
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
    background-color: #2A2F4F;
    color: #dfeffa;
  }
  
  .navbar {
    min-height: 4rem;
  }
  </style>