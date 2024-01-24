import { defineStore } from 'pinia'

export const useStoreAntrian = defineStore('storeAntrian', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      dataAntrian: [
        {
          id: '01',
          nomorAntrian: '01',
          isActive: true,
          isQueue: false,
          isCompleted: false,
          isLoket: 3
        },
        {
          id: '02',
          nomorAntrian: '02',
          isActive: true,
          isQueue: false,
          isCompleted: false,
          isLoket: 1
        },
        {
          id: '03',
          nomorAntrian: '03',
          isActive: true,
          isQueue: false,
          isCompleted: false,
          isLoket: 2
        },
        {
          id: '04',
          nomorAntrian: '04',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '05',
          nomorAntrian: '05',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '06',
          nomorAntrian: '06',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '07',
          nomorAntrian: '07',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '08',
          nomorAntrian: '08',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '09',
          nomorAntrian: '09',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '10',
          nomorAntrian: '10',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '11',
          nomorAntrian: '11',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '12',
          nomorAntrian: '12',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '13',
          nomorAntrian: '13',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '14',
          nomorAntrian: '14',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '15',
          nomorAntrian: '15',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '16',
          nomorAntrian: '16',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '17',
          nomorAntrian: '17',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '18',
          nomorAntrian: '18',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '19',
          nomorAntrian: '19',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        },
        {
          id: '20',
          nomorAntrian: '20',
          isActive: false,
          isQueue: true,
          isCompleted: false,
          isLoket: 0
        }
      ],
      antrianTerbesar: 0
    }
  },
  getters: {
    getAllAntrian: (state) => {
      return state.dataAntrian
    },
    getAllAntrianAktif: (state) => {
      const dataAktif = state.dataAntrian.filter((data) => data.isActive == true)
      return dataAktif
    },
    getAntrianAktifTerbesar: (state) => {
      let AntrianTerbaru = ''
      const dataAktif = state.dataAntrian.filter((data) => data.isActive == true)

      let dataFilter = []

      for (var i = 0; i < dataAktif.length; i++) {
        dataFilter.push(dataAktif[i].nomorAntrian)
      }

      let max = Math.max(...dataFilter)

      // eslint-disable-next-line no-constant-condition
      if (
        max == 1 ||
        max == 2 ||
        max == 3 ||
        max == 4 ||
        max == 5 ||
        max == 6 ||
        max == 7 ||
        max == 8 ||
        max == 9
      ) {
        max = '0' + max
      } else {
        max
      }

      AntrianTerbaru = max.toString()

      return AntrianTerbaru
    },
    getAllAntrianMenunggu: (state) => {
      const dataMenunggu = state.dataAntrian.filter((data) => data.isQueue === true)

      return dataMenunggu
    },
    getAntrianMenungguTerbesar: (state) => {
      let dataMenungguAkhir = state.getAllAntrianMenunggu.filter((data) => data)
      let dataFilter = []

      for (var i = 0; i < dataMenungguAkhir.length; i++) {
        let lengthData = dataMenungguAkhir.length - 1
        if (i === lengthData) {
          dataFilter.push(dataMenungguAkhir[i])
        }
      }

      dataMenungguAkhir = dataFilter
      

      return dataMenungguAkhir
    },
    getAntrianMenungguPertama: (state) => {
      let dataMenungguPertama = state.getAllAntrianMenunggu.filter((data) => data)
      let dataFilter = []

      for (var i = 0; i < dataMenungguPertama.length; i++) {
        let lengthData = 0
        if (i === lengthData) {
          dataFilter.push(dataMenungguPertama[i])
        }
      }

      dataMenungguPertama = dataFilter

      return dataMenungguPertama
    }
  },
  actions: {
    ambilAntrian() {
      this.antrianTerbesar = this.getAntrianMenungguTerbesar
      let nomorAntrianAnda = this.antrianTerbesar[0]
      let localAntrian = localStorage.setItem('nomorAntrianAnda', JSON.stringify(nomorAntrianAnda))

      return localAntrian
    },
    refresh() {
      console.log('Refresh clicked')
    }
  }
})
