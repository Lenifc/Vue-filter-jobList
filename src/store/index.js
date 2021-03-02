/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue'
import Vuex from 'vuex'
import json from "@/store/data.json";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobList: [],
    activeTags:[],
    filteredJobList: json
  },
  getters: {
    fakeFetch(state){
      state.jobList = json
      // state.filteredJobList = json
      let val = state.activeTags.length ? state.filteredJobList : state.jobList

      return val
    },
  }, 

  mutations:{
    filterTags(state, target) {
      if (target == 'DELETE') {
        // console.log(state.activeTags);
        state.filteredJobList = state.jobList
      } 
      else if (target.classList.contains('tag') && target.innerText) {
        if (!state.activeTags.includes(target.innerText)) state.activeTags.push(target.innerText) // zapobiega duplikatom
      }
      
      state.activeTags.map(tag =>{

        state.filteredJobList = state.filteredJobList
        .filter(filtered => {

          // TODO
          // zlozyc z role, level, tools, languages jedna tablice i skrocic IF statement
          if (filtered.role == tag ||
            filtered.level == tag ||
            filtered.tools.includes(tag) ||
            filtered.languages.includes(tag)) return filtered
        })
        // console.log(tag)
      })
        

    },
    deleteFilter(state, clickedRole){
      // console.log(clickedRole);
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
    },
    deleteFilter({commit}, calledValue){
      commit('deleteFilter', calledValue)
      commit('filterTags', 'DELETE')
    }
  }
})
