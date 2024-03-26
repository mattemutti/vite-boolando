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
			infoProductArray: [],
		}
	},
	methods: {
		showProduct(infoProd) {
			//console.log('cliccato', infoProd);
			//info prod è il mio proxyarray della card cliccata 

			this.infoDataCard = true;
			this.infoProductArray = infoProd;
			console.log(this.infoProductArray);
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

	<div v-if="infoDataCard === true" class="info_card_screen">
		<!-- metto le classi in italiano perchè ho importato bootstrap -->
		<div class="contenitore">
			<div class="riga">
				<div class="colonna">
					<div>Nome prodotto</div>
					<div @click="closeInfoBox()">X</div>
				</div>
				<div>Descrizione prodotto</div>
				<div>{{ }}</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 p-4 g-2">

			<ProductCard :product="product" v-for="product in state.products" @info-product="showProduct" />


		</div>
	</div>


</template>
<style>
.info_card_screen {

	position: relative;
	text-align: center;



	.contenitore {
		background-color: red;
		position: fixed;
		width: 600px;
		height: 300px;
		top: 30%;
		left: 40%;
		z-index: 1;
	}

	.colonna {
		display: flex;
		justify-content: space-between;
		color: white;



	}

}
</style>