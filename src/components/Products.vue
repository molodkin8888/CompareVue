<template>
  <div>
    <products>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-3 col-md-12 col-xs-12" v-for="product in products" :key="product">
            <div class="product" :id="'product' + product.id">
              <div class="overlay"></div>
              <img :src="product.image" alt="Cherry">  
              <div class="view_details" @click="compare(product.id)">compare</div>      
                <div class="stats">
                  <div class="stats-container">
                    <span class="product_price">{{ product.price }}</span>
                    <span class="product_name">{{ product.name }}</span>
                    <p>{{product.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </products>
  </div>
</template>

<script>
import common from '../common/common.js'
import store from '../store'

export default {
  mixins: [common]
}  
</script>

<style>

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
}

.product:hover .overlay {
  display: block;
  background: #48cfad;
  opacity: 0.8;
}
.product {
  cursor: pointer;
  position: relative;
  padding-bottom: 100px;
  border-radius: 5px;
  overflow: hidden;
  -webkit-transition: all .5s ease-out;
  -o-transition: all .5s ease-out;
  transition: all .5s ease-out;
  margin-bottom: 30px;
  border: 1px solid #ddd;
}

.product img {
  width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

.product .image_overlay, .product .view_details {
  position: absolute;
  opacity: 0;
  -webkit-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}

.product .image_overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #48cfad;
}

.product .view_details {
  top: 112px;
  left: 50%;
  margin-left: -85px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 172px;
}

.product:hover .view_details {
  opacity: 1;
  width: 152px;
  font-size: 15px;
  margin-left: -75px;
  top: 35%;
  -webkit-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}

.product .stats-container {
    background: #fff;
    padding: 25px 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.product .stats-container .product_price {
    float: right;
    color: #48cfad;
    font-size: 22px;
    font-weight: 600;
}

.product .stats-container .product_name {
    font-size: 22px;
    color: #393c45;
}

.product .stats-container p {
    font-size: 16px;
    color: #b1b1b3;
    margin: 0;
}

</style>

