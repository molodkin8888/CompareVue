import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [{
      "id": "1",
      "name": "Cherry",
      "image": "../images/Cherry.png",
      "price": "$1.99",
      "colors": "red",
      "condition": "Fresh",
      "description": "Two Cherries"
    },
    {
      "id": "2",
      "name": "Orange",
      "image": "../images/Orange.png",
      "price": "$2.99",
      "colors":  "blue",
      "condition": "Frozen",
      "description": "Giant Orange"
    },
    {
      "id": "3",
      "name": "Nuts",
      "image": "../images/Nuts.png",
      "price": "$1.00",
      "colors": "green",
      "condition": "Frozen",
      "description": "Mixed Nuts"
    },
    {
      "id": "4",
      "name": "Strawberry",
      "image": "../images/Strawberry.png",
      "price": "$1.49",
      "colors": "blue",
      "condition": "Fresh",
      "description": "Just Strawberry"
    }],

    inCompare: [],
  },

  getters: {
    data: state => state.data,
    inCompare: state => state.inCompare,
  },

  mutations: {
    ADD_TO_COMPARE(state, id) {
      state.data.forEach(function(value) {
        if (id === value.id) {          
          var obj = {
            id: value.id,
            name: value.name,
            price: value.price,
            color: value.colors,
            condition: value.condition
          }

          if (state.inCompare.length > 1) {
            for (var i = 0; i < state.inCompare.length; i++) {
              if (id === state.inCompare[i].id) {
                state.inCompare.splice(i, 1);
                i--;
                return
              }
            }
          }
          state.inCompare.push(obj);
        }             
         else {}
      })
  }},

  actions: {
    compare(context, id) { context.commit('ADD_TO_COMPARE', id); }},
})