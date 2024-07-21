import { collection, onSnapshot, setDoc, doc, query } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { db } from '@/js/firebase'
import router from '@/router'

export const useStoreAntrian = defineStore('storeAntrian', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      dataAntrian: [],
      antrianBaru: {},
      antrianAktif: []
    }
  },
  actions: {
    async getAllAntrian(type) {
      this.dataAntrian = []
      const q = query(collection(db, `/getAntrian/${type}/antrian`))
      onSnapshot(q, (querySnapshot) => {
        const datas = []
        querySnapshot.forEach((doc) => {
          datas.push({
            id: doc.data().id,
            isActive: doc.data().isActive,
            isCompleted: doc.data().isCompleted,
            isLoket: doc.data().isLoket,
            isQueue: doc.data().isQueue,
            nomorAntrian: doc.data().nomorAntrian,
            type: doc.data().type
          })
        })
        this.dataAntrian = datas
        console.log('data type CS : ', this.dataAntrian)
      })
    },
    async ambilAntrian(nomorAnda, type) {
      this.antrianBaru = {
        id: nomorAnda.toString(),
        isActive: false,
        isCompleted: false,
        isLoket: 0,
        isQueue: true,
        nomorAntrian: nomorAnda.toString(),
        type: type
      }

      await setDoc(doc(collection(db, `/getAntrian/${type}/antrian`), this.antrianBaru.id), {
        id: this.antrianBaru.id,
        isActive: this.antrianBaru.isActive,
        isCompleted: this.antrianBaru.isCompleted,
        isLoket: this.antrianBaru.isLoket,
        isQueue: this.antrianBaru.isQueue,
        nomorAntrian: this.antrianBaru.nomorAntrian,
        type: this.antrianBaru.type
      })

      localStorage.setItem('nomorAntrianAnda', JSON.stringify(this.antrianBaru))

      router.replace('/second')
    },
    refresh() {
      router.go('/second')
    },
    async getAllAntrianAktif() {
      this.antrianAktif = []

      const data = await this.dataAntrian[0]
      let filteredData = null
      if (data) {
        filteredData = data.filter((data) => data.isActive == true)
      }

      this.antrianAktif = filteredData

      return this.antrianAktif
    },
    
    jenisAntrian(typeAntrian) {
      localStorage.setItem('jenisAntrian', JSON.stringify({type: typeAntrian}))

      router.replace('/first')
    }
  }
})
