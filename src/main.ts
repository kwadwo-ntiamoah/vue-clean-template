import 'reflect-metadata'
import DI from './Core/di'

import { createApp } from 'vue'
import Login from './Presentation/login/index.vue'

DI.init()

createApp(Login).mount('#app')
