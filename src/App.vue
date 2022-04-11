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

      <div v-if="products" class="my-8">
          <span>Filter</span>
          <select v-model="filterByCategory" class="border-2 border-gray-300 px-4 py-1 ml-4" name="category" id="category">
            <option value="all">all</option>
            <option v-for="category in availableCategories" :value="category" :key="category"> {{category}} </option>
          </select>
      </div>

    <div v-if="products" class="grid grid-cols-4 gap-x-6 gap-y-4">
      <div v-for="product in filteredProducts">
        <Card :product="product" />
      </div>
    </div>

    <nav aria-label="Page navigation" class="flex my-8" v-if="products">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <button :class="{ 'opacity-40 bg-gray-100': !products.prev_page_url }" @click="jumpToPage({url:products.prev_page_url})"
            class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </li>
        <li v-for="i in Math.ceil(products.total / products.per_page)" :key="i">
          <button href="#"  
            @click="jumpToPage({page:i})"
            :class="{'text-blue-600 bg-blue-100 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 ':i === products.current_page, 'opacity-40 bg-gray-100': i === products.current_page }"
            class=" font-semibold py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {{ i }} </button>
        </li>
        <li>
          <button :class="{ 'opacity-40 bg-gray-100 ': !products.next_page_url }" @click="jumpToPage({url:products.next_page_url})"
            class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </li>
      </ul>
      <div class="flex-grow"></div>
      <p class="mx-8"> {{ ((products.current_page - 1 )* products.per_page ) + products.data.length  }} <span class="text-gray-500">in</span> {{products.total}} <span class="text-gray-500">products</span> </p>
    </nav>

    <!-- Here's your version of console.log since stackblitz is broken atm -->
    <!-- You can also just open dev tools and see the log there -->

    <!-- Huge bonus if you can add pagination or explain how it would work based on the json structure -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted,computed } from 'vue'
import axios from 'axios'
import Card from './components/Card.vue'
import { PaginatedData, Product } from './types';
// computed: {
// each product has a category(id), how would you make the products filtered based on the selected category in data? Don't worry about rendering a filtered list, just want to see your thought process
// },

const products = ref<PaginatedData<Product>>()
const filterByCategory = ref<string>('all')
const selectedCategoryId = ref(2)
const availableCategories =  computed(() => {
  return Array.from(new Set(products.value?.data.map(product => product.category)))
})

const filteredProducts = computed(() => {
  if (filterByCategory.value === 'all') {
    return products.value?.data
  }
  return products.value?.data.filter(product => product.category === +filterByCategory.value)
})

interface Category {
  id: number
  name: string
}

interface Pagination{
url: string 
page: number
}

async function jumpToPage({url,page}:Partial<Pagination> = {}) {
  const defaultUrl = 'https://tnorthern.xyz/Edgewood-API/public/api/products';
  if(!url)  url = defaultUrl;
  if(page)url = url + '?page=' + page;
  const data = await axios.get<PaginatedData<Product>>(url)
  products.value = data.data
}




onMounted(async () => {
  await jumpToPage()
})
</script>
