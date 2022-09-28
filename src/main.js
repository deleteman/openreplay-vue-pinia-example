import { createApp } from 'vue'
import { createPinia } from 'pinia'

import trackerVuex from '@openreplay/tracker-vuex/cjs';
import { startTracker } from './tracker';
import { saveStore } from './store/storesManager';


//const wrapper = tracker.use(vuexPlugin())
const {piniaPlugin} = startTracker({
    projectKey: "YGaxALDc5BdmeN7KiM8A",
    //ingestPoint: "https://foss.openreplay.com/ingest",
    plugins: [{
        name: 'piniaPlugin',
        fn: trackerVuex
    }]
})

//const nameStoreWrapper = wrapper(‘storeName’)
const exampleStoreWrapper = piniaPlugin("products")
saveStore(exampleStoreWrapper)

import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
