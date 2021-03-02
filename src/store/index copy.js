/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue'
import Vuex from 'vuex'
import json from "@/store/data.json";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobList: [],
    activeTags:[],
    filteredJobList: []
  },
  getters: {
    fakeFetch(state){
      state.jobList = json
      state.filteredJobList = json
      let val = state.activeTags.length ? state.filteredJobList : state.jobList

      return val
    },
  }, 

  mutations:{
    filterTags(state, term) {

      let searchValue = term.innerText


      if (term.classList.contains('tag') && searchValue) {
        if(!state.activeTags.includes(searchValue)) state.activeTags.push(searchValue) // zapobiega duplikatom
        
        state.filteredJobList = state.filteredJobList.filter(filtered => {
          if (filtered.role == searchValue ||
              filtered.level == searchValue ||
              filtered.tools.includes(searchValue) ||
              filtered.languages.includes(searchValue)) return filtered
        })
      } else return
      console.log(term.innerText)
    },
    deleteFilter(state, clickedRole){
      state.activeTags = state.activeTags.filter(role => role !== clickedRole)
    },
    deleteAllFilters(state){
      state.activeTags = []
      state.filteredJobList = json
    }
      
  },

  actions: {
    filterTags({commit}, calledValue){
      commit('filterTags', calledValue)
    }
  }
})
