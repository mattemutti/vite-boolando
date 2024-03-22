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
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 p-4">

			<ProductCard />

		</div>
	</div>


</template>
<style lang="scss"></style>