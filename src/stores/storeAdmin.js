// import router from '@/router'
import { defineStore } from 'pinia'

import { db } from '@/js/firebase'
import { collection, onSnapshot, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useStoreAntrian } from './storeAntrian';
import router from '@/router';

export const useStoreAdmin = defineStore('storeAdmin', {
  state: () => {
    return {
      allAdmin: [],
      dataLogin: [],
      LoginError: false
    }
  },
  actions: {
    getAllAdmin() {
      onSnapshot(collection(db, 'admin'), (querySnapshot) => {
        let data = []
        querySnapshot.forEach((doc) => {
          let adminLogin = {
            id: doc.data().id,
            email: doc.data().email,
            password: doc.data().password,
            nama: doc.data().nama,
            isLoket: doc.data().isLoket,
            isLogin: doc.data().isLogin
          }
          data.push(adminLogin)
        })

        this.allAdmin.push(data)
      })
    },
    async resetAntrian() {
      let confirmed = confirm("Apakah anda yakin ingin Reset Antrian?");
  
        if (confirmed) {
          const storeAntrian = useStoreAntrian()

          let dataAntrian = storeAntrian.dataAntrian

          for (var i = 0; i < dataAntrian.length; i++) {
            await deleteDoc(doc(db, "dataAntrian", dataAntrian[i].id));
          }

          await setDoc(doc(collection(db, 'dataAntrian'), '0'), {
            id: '0',
            isActive: true,
            isCompleted: false,
            isLoket: 1,
            isQueue: false,
            nomorAntrian: '0'
          })

          router.push('/admin')
          
        } else {
          alert("You clicked Cancel!");
        }
    }
  }
})
