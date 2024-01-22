import { defineStore } from 'pinia'

export const useStoreAdmin = defineStore('storeAdmin', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      dataAdmin: [
        {
            email: 'tester01@gmail.com',
            password: '123456',
            nama: 'TESTER-01',
            isLoket: 0,
            isLogin: false
        },
        {
            email: 'tester02@gmail.com',
            password: '123456',
            nama: 'TESTER-02',
            isLoket: 0,
            isLogin: false
        },
        {
            email: 'tester03@gmail.com',
            password: '123456',
            nama: 'TESTER-03',
            isLoket: 0,
            isLogin: false
        }
      ],
      dataLogin: {}
    }
  },
  getters: {
    loginAdmin: (state) => {
      return state.dataLogin
    }
  },
  actions: {
    btnLogin(email, password) {
      this.dataLogin = {
        email: email,
        password: password,
        nama: '',
        isLoket: 0,
        isLogin: true
      }

      console.log(this.dataLogin, 'Btn Login Clicked')
    },
    btnAntrianSelanjutnya() {
      console.log('Btn Next Antrian Clicked')
    },
    btnResetAntrian() {
      console.log('Btn Reset Antrian Clicked')
    },
    btnLogout() {
      console.log('Btn Logout Clicked')
    }
  }
})