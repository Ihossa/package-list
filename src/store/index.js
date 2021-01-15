import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    package:[],
    infoPackage:""

  },
  mutations: {
    setPackage(state, listPackage){
      state.package = listPackage;
    },
    setInfoPackage(state, inf){
      state.infoPackage = inf;
    },
  },
  actions: {
    async getPackage({ commit }) {
      await fetch('https://data.jsdelivr.com/v1/stats/packages/npm')
          .then(function(response) {
            return response.json();
          }).then(function(data) {
            commit("setPackage", data);
          });
    },
    async getInfoPackage({ commit }, namePackage) {
      await fetch(`https://data.jsdelivr.com/v1/package/npm/${namePackage}/stats`)
          .then(function (response){
            return response.json();
          }).then(function(data) {
            commit("setInfoPackage", data);
          });
    }
  },

})
