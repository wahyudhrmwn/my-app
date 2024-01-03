import { defineStore } from "pinia";
// import { db } from "../js/firebase";

export const useMyAppStore = defineStore('myAppStore', {
    state: () => {
        return {
            listAntrian: [
                {
                    id: '0001',
                    nomorAntrian: '01',
                    time: new Date(),
                    isActive: false,
                    isQueue: false
                },
                {
                    id: '0002',
                    nomorAntrian: '02',
                    time: new Date(),
                    isActive: false,
                    isQueue: false
                },
                {
                    id: '0003',
                    nomorAntrian: '03',
                    time: new Date(),
                    isActive: false,
                    isQueue: false
                }
            ]
        }
    },
    actions: {
        getAntrian() {

        }
    },
    mutations: {

    },
    getters: {

    }
})