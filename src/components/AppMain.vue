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
			state,
			infoDataCard: false,
		}
	},
	methods: {
		showProduct(infoProd) {
			//console.log('cliccato', infoProd);
			//info prod è il mio proxyarray della card cliccata 

			this.infoDataCard = true;
		},
		closeInfoBox() {
			this.infoDataCard = false;
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

			<div v-if="infoDataCard === true" class="info_card_screen">
				Dati Card
				<div @click="closeInfoBox()">X</div>
			</div>
		</div>
	</div>


</template>
<style lang="scss"></style>