<script>

export default {
	name: 'ProductCard',
	props: {
		frontImage: String,
		backImage: String,
		brand: String,
		name: String,
		price: Number,
		favorite: Boolean,
		badgeTag: String,
		badgeDiscount: Number,
	},
	data() {
		return {
			priceDiscount: 0,


		}

	},
	methods: {
		discountPrice() {
			this.priceDiscount = this.price / this.badgeDiscount

		}

	},
	mounted() {

		this.discountPrice()
	}
}
</script>
<template>


	<div class="col">
		<div class="card">
			<div class="photo">

				<div class="photo_on">
					<img class="img_1" src="../../public/images/1.webp" alt="">
					<img class="img_1b" src="../../public/images/1b.webp" alt="">
				</div>
				<!-- images -->
				<div class="sconto"> 30 %</div>
				<div class="info">Sostenibilità</div>
				<div class="heart-red">
					<div class="heart"><i class="fa-solid fa-heart"></i></div>
				</div>
			</div>
			<!-- box over image -->


			<div class="card-body">
				<div>{{ brand }}</div>
				<h5 class="card-title">{{ name }}</h5>
				<div>
					<span class="text-danger"> {{ discountPrice }} &euro;</span>
					<span class="text-decoration-line-through">{{ price }} &euro;</span>
				</div>

			</div>
		</div>

	</div>




</template>
<style lang="scss"></style>