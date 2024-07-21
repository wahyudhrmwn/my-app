import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, } from 'firebase/auth'
import { auth } from '@/js/firebase'
import router from '@/router'
import { db } from '@/js/firebase'
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      allAdminLogin: [],
      allAdmin: [],
      logoutAdmin: [],
      loginAdminUnpam: [],
      loginAdminCS: [],
      loginAdminBPR: [],
      loginAdminEvenet: [],
      loginAdminDukcapil: []
    }
  },
  actions: {
    getAllAdmin() {
      onSnapshot(collection(db, 'admin'), (querySnapshot) => {
        let data = []
        this.allAdmin = []

        querySnapshot.forEach((doc) => {
          let adminLogin = {
            id: doc.data().id,
            email: doc.data().email,
            password: doc.data().password,
            nama: doc.data().nama,
            isLoket: doc.data().isLoket,
            isLogin: doc.data().isLogin,
            type: doc.data().type
          }
          data.push(adminLogin)
        })

        this.allAdmin.push(data)
        console.log(this.allAdmin)
      })
    },
    registerUser(email, password) {
      console.log('Register User', email + password)

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)
          alert('Email dan Password Berhasil di daftarkan, Silahkan Login!')
          // ...
        })
        .catch((error) => {
          alert('error : ' + error.message)
          // ..
        })
    },
    async loginUser(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          let dataLogin = []

          for (let i = 0; i < this.allAdmin[0].length; i++) {
            if (user.email === this.allAdmin[0][i].email) {
              let adminLogin = {
                id: this.allAdmin[0][i].id,
                email: this.allAdmin[0][i].email,
                password: this.allAdmin[0][i].password,
                nama: this.allAdmin[0][i].nama,
                isLoket: this.allAdmin[0][i].isLoket,
                isLogin: true,
                type: this.allAdmin[0][i].type
              }

              dataLogin.push(adminLogin)
            }
          }

          

          this.allAdminLogin = dataLogin
          this.updateStatusLogin(this.allAdminLogin)
          localStorage.setItem('isUserLogin', JSON.stringify(dataLogin))
          router.replace('/loketadmin')
        })
        .catch((error) => {
          alert(error.message)
        })
    },
    logoutUser(allAdmin) {
      signOut(auth)
        .then(() => {
          let confirmed = confirm("Apakah anda yakin ingin Logout?");
  
          if (confirmed) {
          this.logoutAdmin = []
          let dataLogout = [JSON.parse(localStorage.getItem('isUserLogin'))]
          let datas = []

          for (let i = 0; i < allAdmin.length; i++) {
            if (dataLogout[0].email === allAdmin[i].email) {
              let adminLogout = {
                id: allAdmin[i].id,
                email: allAdmin[i].email,
                password: allAdmin[i].password,
                nama: allAdmin[i].nama,
                isLoket: 0,
                isLogin: false
              }

              datas.push(adminLogout)
            }
          }

          

          this.logoutAdmin = datas
          this.updateStatusLogout(this.logoutAdmin)
          localStorage.removeItem('isUserLogin', JSON.stringify(dataLogout))
          router.replace('/login')
          } else {
            alert("You clicked Cancel!");
          }
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    async updateStatusLogin(dataLogin) {

      await updateDoc(doc(collection(db, 'admin'), dataLogin[0].id), {
        ...dataLogin[0]
      });

    },
    async updateStatusLogout(dataLogout) {

      await updateDoc(doc(collection(db, 'admin'), dataLogout[0].id), {
        email: dataLogout[0].email,
        isLogin: dataLogout[0].isLogin,
        isLoket: dataLogout[0].isLoket,
        nama: dataLogout[0].nama,
        password: dataLogout[0].password
      });

    }
  }
})
