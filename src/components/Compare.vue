<template>
  <div>
    <compare>
      <table class="table" v-if="inCompare.length >= 2">
      <thead>
        <tr class="name_product"><td></td></tr>
        <td style="border:none"></td>
          <td class="title_table">Price</td>
          <td class="title_table">Colors</td>
          <td class="title_table">Condition</td>
      </thead>
      <tbody v-for="(index, value) in inCompare" :key="value">
        <tr>
          <td>{{index.name}}</td>
            <td>{{index.price}} $</td>
            <td><span :class="index.color"></span></td>
          <td :style="`${index.condition == 'Fresh' ? 'background: #48cfad' : 'background: #ff715b'}`">{{index.condition}}</td>
        </tr>
      </tbody>
    </table>
    </compare>
  </div>
</template>

<script>
import store from '../store'
import common from '../common/common.js'

export default {
  mixins: [common]
}
</script>

<style>

 .table {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    -webkit-box-shadow: 0 13px 21px -5px rgba(0,0,0,.05);
    box-shadow: 0 13px 21px -5px rgba(0,0,0,.05);
    border: 1px solid #eee;
    font-size: 18px;
    table-layout: fixed;
  }

  .name_product {
    display: none;
  }

  .title_table {
    background: #f9f9f9;
  }

  .blue, .red, .green {
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-right: 5px;
    border-radius: 100%;
    z-index: 1;
  }

  .blue {
    background: #0197f6;
  }

  .red {   
    background: #ff715b;
  }

  .green {   
    background: #48cfad;
  }

</style>
