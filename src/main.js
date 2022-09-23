import { createApp } from 'vue'
import { createPinia } from 'pinia'

import OpenReplay from '@openreplay/tracker/cjs';
import trackerVuex from '@openreplay/tracker-vuex/cjs';
import { startTracker } from './tracker';
import { saveStore } from './store/storesManager';


const {pinia} = startTracker({
    projectKey: "YGaxALDc5BdmeN7KiM8A",
    plugins: [{
        name: 'pinia',
        fn: trackerVuex
    }]
})

const piniaStorePlugin = pinia("products")
saveStore(piniaStorePlugin)

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
