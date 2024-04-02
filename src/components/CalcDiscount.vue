<script>
import { state } from "../state";

export default {
	name: 'CalcDiscount',
	props: {


	},
	data() {
		return {
			state,
			priceDiscount: 0,
			valueDiscount: null,
		}


	},
	methods: {
		calcolateDiscountPrice() {
			for (let i = 0; i < this.product.badges.length; i++) {
				const element = this.product.badges[i];
				if (element.type === 'discount') {
					this.valueDiscount = element.value.substring(1, 3);
					this.priceDiscount = (this.product.price * this.valueDiscount / 100).toFixed(2)
					this.priceFinalDiscount = (this.product.price - this.priceDiscount).toFixed(2)
				} else if (element.value === null) {
					this.priceFinalDiscount = this.product.price
				}
			}
		},
	}
}

</script>
<template>

</template>
<style></style>