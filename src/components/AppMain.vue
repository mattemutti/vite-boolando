<script>

import ProductCard from './ProductCard.vue';
import { products } from '../data.js';

export default {
	name: 'AppMain',
	components: {
		ProductCard,
	},
	data() {
		return {
			products
		}
	}
}
</script>
<template>

	<div class="container">
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 p-4 g-2">

			<ProductCard :frontImage="product.frontImage" :backImage="product.backImage" :brand="product.brand"
				:name="product.name" :price="product.price" :favorite="product.favorite" v-for="product in products" />

		</div>
	</div>


</template>
<style lang="scss"></style>