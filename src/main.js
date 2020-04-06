import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase/app'
import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA93bDlFF-FSJC9cL9cPVRxPGWMDryhg_Y',
      authDomain: 'it-ads-lern.firebaseapp.com',
      databaseURL: 'https://it-ads-lern.firebaseio.com',
      projectId: 'it-ads-lern',
      storageBucket: 'it-ads-lern.appspot.com',
      messagingSenderId: '313974030699',
      appId: '1:313974030699:web:1fcc8c9d86177814e6cc2e'
    })
  }
})
