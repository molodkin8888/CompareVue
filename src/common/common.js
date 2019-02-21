import store from '../store'
export default {
  data() {
    return {
      products: [{
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
        store: store,
      }
    },

    computed: {
      counter() {
        return this.$store.getters.counter
      },

      data() { 
        return this.$store.getters.data;
      },
      
      inCompare() { 
        return this.$store.getters.inCompare; 
      },
    },
    methods: {      
      compare(id) {
        this.$store.dispatch('compare', id);
      }
    }    
  }