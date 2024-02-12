import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usu : [
      {usuario: '0020',nombre:'SOCIO 0020',password:1234},
      {usuario: '0020',nombre:'SOCIO 0020',password:1235}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
