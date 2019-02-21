<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <products></products>
        <compare></compare>
      </div>
    </div>
  </div>
</template>

<script>
import products from './components/Products.vue'
import compare from './components/Compare.vue'
import common from './common/common.js'

export default {
  name: 'app',
  mixins: [common],

  components: {
    'products': products,
    'compare': compare
  }
}
</script>
