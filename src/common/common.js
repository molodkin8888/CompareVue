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
        }
      ],
      compareProduct: [],
      }
    },

    methods: {
      compare(id) {
        var product = this.products;
        var compareProd = this.compareProduct;
        product.forEach(function(value) {
          if (id === value.id) {          
            var obj = {
              id: value.id,
              name: value.name,
              price: value.price,
              color: value.colors,
              condition: value.condition
            }

            if (compareProd.length > 1) {
              for (var i = 0; i < compareProd.length; i++) {
                if (id === compareProd[i].id) {
                  compareProd.splice(i, 1);
                  i--;
                  return
                }
              }
            }
            compareProd.push(obj);             
          } else {}
        })
      }   
    }   
  }