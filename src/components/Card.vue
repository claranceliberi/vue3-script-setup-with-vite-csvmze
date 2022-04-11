<template>
  <!-- Card For Grid Start -->
  
    <div class="w-full bg-gray-100 p-1 rounded-sm">
      <img
        :src="product.image "
        :alt="`${product.name} image`"
        class="w-full h-40"
      />
      <p class="font-medium leading-none mt-3 text-gray-800 dark:text-white text-lg">{{product.name}}</p>
      <p class="font-medium leading-3 text-gray-600 dark:text-white mt-2">From ${{product.price}} </p>
      <p class="mt-1 text-sm text-gray-600">Category: {{product.category}} </p>
    </div>
    <!-- Card for Grid end -->
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'
import { Product } from '../types';

interface IProps{
  product:Product
}

const props = defineProps<IProps>()
const { product } = props

</script>