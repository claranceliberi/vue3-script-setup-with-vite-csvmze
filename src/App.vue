<template>
  <!-- Instructions -->
  <!-- Read through the comments and solve the problem below then open up src/ts-problem/index.ts -->
  <!-- The typescript problem should take you less then 5 minutes to solve. -->
  <!-- Feel free to break up anything into components if you'd like to show that skill off -->
  <!-- Compositon API/Script Setup is also acceptable -->
  <div class="px-5 py-3 ">
    <!-- Display the products in a responsive grid with the above html, max 4 columns(grid or flex acceptable), view the mounted hook for the data source. Expected fields to display are:
    name, image, category, and price
     -->
    <div v-if="products" class="grid grid-cols-4 gap-x-6 gap-y-4">
        <div v-for="product in products.data">
        <Card :product="product" />
      </div>
    </div>
    <!-- Here's your version of console.log since stackblitz is broken atm -->
    <!-- You can also just open dev tools and see the log there -->

    <!-- Huge bonus if you can add pagination or explain how it would work based on the json structure -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Card from './components/Card.vue'
import { PaginatedData, Product } from './types';
// computed: {
// each product has a category(id), how would you make the products filtered based on the selected category in data? Don't worry about rendering a filtered list, just want to see your thought process
// },

const products = ref<PaginatedData<Product>>()
const selectedCategoryId = ref(2)

onMounted(async () => {
  const data = await axios.get<PaginatedData<Product>>('https://tnorthern.xyz/Edgewood-API/public/api/products')
  console.log(data.data)
  products.value = data.data
})
</script>