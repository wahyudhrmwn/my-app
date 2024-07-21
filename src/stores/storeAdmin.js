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
      LoginError: false,
      loginAdminUnpam: [],
      loginAdminCS: [],
      loginAdminBPR: [],
      loginAdminEvent: [],
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
    async resetAntrian(type) {
      let confirmed = confirm("Apakah anda yakin ingin Reset Antrian?");
  
        if (confirmed) {
          const storeAntrian = useStoreAntrian()

          let dataAntrian = storeAntrian.dataAntrian

          for (var i = 0; i < dataAntrian.length; i++) {
            await deleteDoc(doc(db, `/getAntrian/${type}/antrian`, dataAntrian[i].id));
          }

          // await setDoc(doc(collection(db, 'dataAntrian'), '0'), {
          //   id: '0',
          //   isActive: true,
          //   isCompleted: false,
          //   isLoket: 1,
          //   isQueue: false,
          //   nomorAntrian: '0'
          // })

          router.push('/admin')
          
        } else {
          alert("You clicked Cancel!");
        }
    },
    jenisLoket(typeAntrian) {
      localStorage.setItem('jenisLoket', JSON.stringify({type: typeAntrian}))

      router.replace('/counter')
    },
    async inputDataLoket(dataAdmin, type) {
      this.dataLoket = {
        id: dataAdmin.id,
        isLogin: dataAdmin.isLogin,
        isLoket: dataAdmin.isLoket,
        email: dataAdmin.email,
        nama: dataAdmin.nama,
        password: dataAdmin.password,
        type: type
      }

      const collectionRef = collection(db, `/getAdmin/${type}/allAdmin`);
      const documentRef = doc(collectionRef, dataAdmin.id);
  
      // Set the document in Firestore
      await setDoc(documentRef, this.dataLoket);

      // await setDoc(doc(collection(db, `/getAdmin/${type}/allAdmin`), this.dataLoket.id), {
      //   id: this.dataAdmin.id,
      //   isLogin: this.dataAdmin.isLogin,
      //   isLoket: this.dataAdmin.isLoket,
      //   email: this.dataAdmin.email,
      //   nama: this.dataAdmin.nama,
      //   password: this.dataAdmin.password,
      //   type: this.dataLokettype
      // })

      
    }
  }
})
