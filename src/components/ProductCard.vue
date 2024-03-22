<script>

export default {
	name: 'ProductCard',
	props: {
		product: Object
		// frontImage: String,
		// backImage: String,
		// brand: String,
		// name: String,
		// price: Number,
		// favorite: Boolean,
		// badgeTag: String,
		// badgeDiscount: Number,
	},
	data() {
		return {
			priceDiscount: 0,
			valueDiscount: null,
			indexBadges: 0,
			priceFinalDiscount: 0,


		}

	},
	methods: {
		calcolateDiscountPrice() {
			//console.log(this.priceDiscount);
			//console.log(this.product.badges[this.indexBadges].value.substring(1, 3));
			for (let i = 0; i < this.product.badges.length; i++) {
				const element = this.product.badges[i];
				//console.log(this.product.badges[i]);
				//console.log(element);
				if (element.type === 'discount') {
					this.valueDiscount = element.value.substring(1, 3);
					//	console.log(this.valueDiscount);
					this.priceDiscount = (this.product.price * this.valueDiscount / 100).toFixed(2)
					this.priceFinalDiscount = (this.product.price - this.priceDiscount).toFixed(2)
					console.log(this.priceFinalDiscount);
				} else if (element.value === null) {
					this.priceFinalDiscount = this.product.price
					console.log(this.priceFinalDiscount);

				}

			}
		}

	},
	mounted() {

		this.calcolateDiscountPrice()
		console.log(this.product.badges);
	}
}
</script>
<template>


	<div class="col">
		<div class="card">
			<div class="photo">

				<div class="photo_on">
					<img class="img_1" :src="'../../public/images/' + product.frontImage" alt="">
					<img class="img_1b" :src="'../../public/images/' + product.backImage" alt="">
				</div>
				<!-- images -->

				<div v-if="valueDiscount != null" class="sconto"> {{ valueDiscount }}%</div>
				<div v-if="product.badges[0].type === 'tag'" class="info">{{ product.badges[0].value }}</div>

				<div class="heart-red">
					<div class="heart"><i class="fa-solid fa-heart"></i></div>
				</div>
			</div>
			<!-- box over image -->


			<div class="card-body">
				<div>{{ product.brand }}</div>
				<h5 class="card-title">{{ product.name }}</h5>
				<div>
					<span v-if="valueDiscount != null" class="text-danger"> {{ priceFinalDiscount }} &euro;</span>
					<span v-if="valueDiscount == null" class="text-danger"> {{ product.price }} &euro;</span>
					<span v-if="valueDiscount != null" class="text-decoration-line-through">{{ product.price }}
						&euro;</span>
				</div>

			</div>
		</div>

	</div>




</template>
<style lang="scss"></style>