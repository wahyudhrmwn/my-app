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
  faRightToBracket
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
  faRightToBracket
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
