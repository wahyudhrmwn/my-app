import { defineStore } from 'pinia'

export const useStoreAdmin = defineStore('storeAdmin', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      dataAdmin: [
        {
            email: 'tester01@gmail.com',
            password: '123456',
            nama: 'TESTER01',
            isLoket: 0,
            isLogin: false
        },
        {
            email: 'tester02@gmail.com',
            password: '123456',
            nama: 'TESTER02',
            isLoket: 0,
            isLogin: false
        },
        {
            email: 'tester03@gmail.com',
            password: '123456',
            nama: 'TESTER03',
            isLoket: 0,
            isLogin: false
        }
      ]
    }
  },
})