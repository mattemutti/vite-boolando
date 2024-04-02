<script>

import { state } from '../state';

export default {
	name: 'Modal',
	props: {
		product: Object,

	},
	data() {
		return {
			state,
			infoDataCard: true,


		}
	},
	methods: {
		closeInfoBox() {
			this.$emit('infoDataCard', this.infoDataCard)
			console.log(this.infoDataCard);
		}

	}
}

</script>
<template>


	<!-- metto le classi in italiano perchè ho importato bootstrap -->
	<div class="contenitore">
		<div class="riga">
			<div class="colonna">
				<div>{{ product.brand }}</div>
				<div @click="closeInfoBox"> <i class="fa-solid fa-x"></i> </div>
			</div>
			<div class="colonna_interna">
				<img class="img_info" :src="'../../public/images/' + product.frontImage" alt="">
				<div class="box_interno">
					<div>Modello: {{ product.name }}</div>
					<div class="">Prezzo Listino: {{ product.price }}</div>
					<div class="">Prezzo Scontato: {{ }}</div>
					<div>

					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<style></style>