// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import {
  faUserSecret,
  faUser,
  faUniversalAccess,
  faUsers,
  faCirclePlus,
  faRotateRight,
  faCheck,
  faKey,
  faEnvelope,
  faExclamationTriangle,
  faAngleDown,
  faArrowDown,
  faCircleCheck,
  faCircleXmark,
  faRightToBracket,
  faCircleUser,
  faArrowRight,
  faCancel
} from '@fortawesome/free-solid-svg-icons'

/* add each imported icon to the library */
library.add(
  faUserSecret,
  faUser,
  faUniversalAccess,
  faUsers,
  faCirclePlus,
  faRotateRight,
  faCheck,
  faKey,
  faEnvelope,
  faExclamationTriangle,
  faAngleDown,
  faArrowDown,
  faCircleCheck,
  faCircleXmark,
  faRightToBracket,
  faCircleUser,
  faArrowRight,
  faCancel
)

const app = createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
