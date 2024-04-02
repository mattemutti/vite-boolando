<script>

import { state } from '../state';
import ProductCard from './ProductCard.vue';
import Modal from './Modal.vue';

export default {
	name: 'AppMain',
	components: {
		ProductCard,
		Modal,
	},
	data() {
		return {
			state,
			infoDataCard: false,
			infoProductArray: [],
			valueDiscount: null,
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
			console.log('cliccato');
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

		<Modal :product="infoProductArray" @info-data-card="closeInfoBox" />

		<!-- <div class="contenitore">
			<div class="riga">
				<div class="colonna">
					<div>{{ infoProductArray.brand }}</div>
					<div @click="closeInfoBox()"> <i class="fa-solid fa-x"></i> </div>
				</div>
				<div class="colonna_interna">
					<img class="img_info" :src="'../../public/images/' + infoProductArray.frontImage" alt="">
					<div class="box_interno">
						<div>Modello: {{ infoProductArray.name }}</div>
						<div class="">Prezzo Listino: {{ infoProductArray.price }}</div>
						<div class="">Prezzo Scontato: {{ }}</div>
						<div>

						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>
	<div class="container">
		<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 p-4 g-2">


			<ProductCard :product="product" v-for="product in state.products" @info-product="showProduct" />


		</div>
	</div>


</template>
<style></style>