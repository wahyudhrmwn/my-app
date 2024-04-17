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
    async getAllAntrian() {
      this.dataAntrian = []
      const q = query(collection(db, 'dataAntrian'))
      onSnapshot(q, (querySnapshot) => {
        const datas = []
        querySnapshot.forEach((doc) => {
          datas.push({
            id: doc.data().id,
            isActive: doc.data().isActive,
            isCompleted: doc.data().isCompleted,
            isLoket: doc.data().isLoket,
            isQueue: doc.data().isQueue,
            nomorAntrian: doc.data().nomorAntrian
          })
        })
        this.dataAntrian = datas
      })
    },
    async ambilAntrian(nomorAnda) {
      this.antrianBaru = {
        id: nomorAnda.toString(),
        isActive: false,
        isCompleted: false,
        isLoket: 0,
        isQueue: true,
        nomorAntrian: nomorAnda.toString()
      }

      await setDoc(doc(collection(db, 'dataAntrian'), this.antrianBaru.id), {
        id: this.antrianBaru.id,
        isActive: this.antrianBaru.isActive,
        isCompleted: this.antrianBaru.isCompleted,
        isLoket: this.antrianBaru.isLoket,
        isQueue: this.antrianBaru.isQueue,
        nomorAntrian: this.antrianBaru.nomorAntrian
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
    }
    // getAntrianMenungguTerbesar() {
    //     const dataMenunggu = this.dataAntrian.filter((data) => data.isQueue === true)
    //     let dataMenungguAkhir = dataMenunggu.filter((data) => data)
    //     let dataFilter = []

    //     for (var i = 0; i < dataMenungguAkhir.length; i++) {
    //       let lengthData = dataMenungguAkhir.length - 1
    //       if (i === lengthData) {
    //         dataFilter.push(dataMenungguAkhir[i])
    //       }
    //     }

    //     dataMenungguAkhir = dataFilter

    //     return dataMenungguAkhir
    //   }
  }
})
