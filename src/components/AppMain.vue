<script>

import { state } from '../state';
import ProductCard from './ProductCard.vue';

export default {
	name: 'AppMain',
	components: {
		ProductCard,
	},
	data() {
		return {
			state
		}
	},
	methods: {
		showProduct() {
			console.log('cliccato');

		}
	},
	mounted() {
		this.state.getProducts(this.state.base_products_api_url)
	}
}
</script>
<template>

	<div class="container">
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 p-4 g-2">

			<ProductCard :product="product" v-for="product in state.products" @info-product="showProduct" />

			<!-- <ProductCard :frontImage="product.frontImage" :backImage="product.backImage" :brand="product.brand"
				:name="product.name" :price="product.price" :favorite="product.favorite" v-for="product in products" /> -->

		</div>
	</div>


</template>
<style lang="scss"></style>