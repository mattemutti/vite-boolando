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
			priceFinalDiscount: 0,

		}
	},
	methods: {
		closeInfoBox() {
			this.$emit('infoDataCard', this.infoDataCard)
			//console.log(this.infoDataCard);
		},
		calcolateDiscountPrice() {
			for (let i = 0; i < this.product.badges.length; i++) {
				const element = this.product.badges[i];
				if (element.type === 'discount') {
					this.valueDiscount = element.value.substring(1, 3);
					this.priceDiscount = (this.product.price * this.valueDiscount / 100).toFixed(2)
					this.priceFinalDiscount = (this.product.price - this.priceDiscount).toFixed(2)
				} else if (element.value === null) {
					this.priceFinalDiscount = this.product.price
					//console.log(this.priceFinalDiscount);
				}
			}
		},

	},
	mounted() {
		this.calcolateDiscountPrice()
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

					<div class="text-decoration-line-through">Prezzo Listino: {{ product.price }}</div>
					<div class="">Prezzo Scontato: {{ priceFinalDiscount }}</div>

					<div>

					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<style></style>