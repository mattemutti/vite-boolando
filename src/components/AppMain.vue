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
					<div>{{ infoProductArray.brand }}</div>
					<div @click="closeInfoBox()"> <i class="fa-solid fa-x"></i> </div>
				</div>
				<div class="colonna_interna">
					<img class="img_info" :src="'../../public/images/' + infoProductArray.frontImage" alt="">
					<div class="box_interno">
						<div>Marca: {{ infoProductArray.name }}</div>
						<div>Prezzo: {{ infoProductArray.price }}</div>
					</div>
				</div>
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
		background-color: rgb(189, 114, 114);
		opacity: 90%;
		position: fixed;
		width: 600px;
		height: 350px;
		top: 30%;
		left: 40%;
		z-index: 1;
		padding: 2rem;
		border-radius: 1rem;


	}

	.colonna {
		display: flex;
		justify-content: space-between;
		color: white;
	}

	.colonna_interna {
		display: flex;
		padding: 3rem;


		.box_interno {
			display: flex;
			flex-direction: column;
			justify-content: left;
			text-align: left;
			color: white;
			gap: 0.5rem;


		}

		.img_info {
			width: 150px;
			padding-right: 3rem;
		}

	}
}
</style>